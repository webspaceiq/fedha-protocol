import { IsService, IServiceContext } from "@webspaceiq/ts-service-objects";
import { POOL_ADDRESSES_PROVIDER_ID, POOL_DATA_PROVIDER } from "../../deploy_ids";
import { COMMON_DEPLOY_PARAMS } from "../../env";
import { DeployServiceContext } from "../../model/deploy";
import { InitUtil } from "../../util/InitUtil";

@IsService()
export class DeployAaveAddressesProviderService {

    public static serviceName = 'DeployAaveAddressesProviderService';

    async execute(context: IServiceContext<DeployServiceContext>): Promise<void> {
        let { hre, db } = context.data;
        const { deployments, getNamedAccounts } = hre;
        const { deployer, addressesProviderRegistryOwner } = await getNamedAccounts();

        const { profiles } = db.data;
        const { deploy } = deployments;

        for (const profile of profiles) {
            // 1. Deploy PoolAddressesProvider
            // NOTE: The script passes 0 as market id to create the same address of PoolAddressesProvider
            // in multiple networks via CREATE2. Later in this script it will update the corresponding Market ID.
            const addressesProviderArtifact = await deploy(`${POOL_ADDRESSES_PROVIDER_ID}_${profile.code}`, {
                from: deployer,
                contract: "PoolAddressesProvider",
                args: ["0", deployer],
                ...COMMON_DEPLOY_PARAMS,
            });

            const addressesProviderInstance = (
                await hre.ethers.getContractAt(
                    addressesProviderArtifact.abi, addressesProviderArtifact.address));

            // 2. Set the MarketId
            await addressesProviderInstance.setMarketId(profile.code);

            // 3. Add AddressesProvider to Registry
            await InitUtil.addMarketToRegistry(hre, profile.providerId, addressesProviderArtifact.address);

            // 4. Deploy AaveProtocolDataProvider getters contract
            const protocolDataProvider = await deploy(`${POOL_DATA_PROVIDER}_${profile.code}`, {
                from: deployer,
                contract: "AaveProtocolDataProvider",
                args: [addressesProviderArtifact.address],
                ...COMMON_DEPLOY_PARAMS,
            });

            const currentProtocolDataProvider = await addressesProviderInstance.getPoolDataProvider();

            // Set the ProtocolDataProvider if is not already set at addresses provider
            if (currentProtocolDataProvider.address !== protocolDataProvider.address) {
                await addressesProviderInstance.setPoolDataProvider(protocolDataProvider.address);
            }

            db.$.profiles
                .get(profile.code)
                .replace({
                    ...profile,
                    addressesProvider: addressesProviderArtifact.address,
                }).commit();
        }
    }
}
export const DeployAaveAddressesProviderServiceInfo = {
    serviceName: DeployAaveAddressesProviderService.serviceName,
    serviceContructor: DeployAaveAddressesProviderService
};