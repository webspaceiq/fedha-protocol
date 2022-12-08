import { IsService, IServiceContext } from "@webspaceiq/ts-service-objects";
import { COMMON_DEPLOY_PARAMS } from "../../env";
import { DeployServiceContext } from "../../model/deploy";

@IsService()
export class DeployAaveMarketsRegistryService {

    public static serviceName = 'DeployAaveMarketsRegistryService';

    async execute(context: IServiceContext<DeployServiceContext>): Promise<void> {
        let { hre, db } = context.data;
        const { deployments, getNamedAccounts } = hre;
        const { deployer, addressesProviderRegistryOwner } = await getNamedAccounts();

        const { profiles } = db.data;
        const { deploy } = deployments;

        for (const profile of profiles) {
            const poolAddressesProviderRegistryArtifact = await deploy('PoolAddressesProviderRegistry', {
                from: deployer,
                args: [deployer],
                ...COMMON_DEPLOY_PARAMS
            });
            const registryInstance = await hre.ethers.getContractAt(
                poolAddressesProviderRegistryArtifact.abi, poolAddressesProviderRegistryArtifact.address);

            await registryInstance.transferOwnership(addressesProviderRegistryOwner);

            deployments.log(`[Deployment] Transferred ownership of PoolAddressesProviderRegistry to: ${addressesProviderRegistryOwner} `);
            
            db.$.profiles
                .get(profile.code)
                .replace({
                    ...profile,
                    poolAddressesProviderRegistry: poolAddressesProviderRegistryArtifact.address,
                }).commit();
        }
    }
}
export const DeployAaveMarketsRegistryServiceInfo = {
    serviceName: DeployAaveMarketsRegistryService.serviceName,
    serviceContructor: DeployAaveMarketsRegistryService
};