import { IsService, IServiceContext } from "@webspaceiq/ts-service-objects";
import { ZERO_BYTES_32 } from "../../constants";
import { ACL_MANAGER_ID, POOL_ADDRESSES_PROVIDER_ID } from "../../deploy_ids";
import { COMMON_DEPLOY_PARAMS } from "../../env";
import { DeployServiceContext } from "../../model/deploy";

@IsService()
export class DeployAaveMarketACLManagerService {

    public static serviceName = 'DeployAaveMarketACLManagerService';

    async execute(context: IServiceContext<DeployServiceContext>): Promise<void> {
        let { hre, db } = context.data;
        const { deployments, getNamedAccounts } = hre;
        const { deployer, poolAdmin, aclAdmin, emergencyAdmin } = await getNamedAccounts();
        const aclAdminSigner = await hre.ethers.getSigner(aclAdmin);

        const { deploy } = deployments;
        const { profiles } = db.data;

        for (const profile of profiles) {
            
            const addressesProviderArtifact = await deployments.get(`${POOL_ADDRESSES_PROVIDER_ID}_${profile.code}`);
            const addressesProviderInstance = (await hre.ethers.getContractAt(addressesProviderArtifact.abi, addressesProviderArtifact.address));
            // 1. Set ACL admin at AddressesProvider
            await await addressesProviderInstance.setACLAdmin(aclAdmin);
            // 2. Deploy ACLManager and setup administrators
            const aclManagerArtifact = await deploy(ACL_MANAGER_ID, {
                from: deployer,
                contract: "ACLManager",
                args: [addressesProviderArtifact.address],
                ...COMMON_DEPLOY_PARAMS,
            });
            const aclManager = (await hre.ethers.getContractAt(aclManagerArtifact.abi, aclManagerArtifact.address));
            // 3. Setup ACLManager at AddressesProviderInstance
            await await addressesProviderInstance.setACLManager(aclManager.address);
            // 4. Add PoolAdmin to ACLManager contract
            await await aclManager.connect(aclAdminSigner).addPoolAdmin(poolAdmin);
            // 5. Add EmergencyAdmin  to ACLManager contract
            await await aclManager.connect(aclAdminSigner).addEmergencyAdmin(emergencyAdmin);
            const isACLAdmin = await aclManager.hasRole(ZERO_BYTES_32, aclAdmin);
            const isPoolAdmin = await aclManager.isPoolAdmin(poolAdmin);
            const isEmergencyAdmin = await aclManager.isEmergencyAdmin(emergencyAdmin);
            if (!isACLAdmin)
                throw "[ACL][ERROR] ACLAdmin is not setup correctly";
            if (!isPoolAdmin)
                throw "[ACL][ERROR] PoolAdmin is not setup correctly";
            if (!isEmergencyAdmin)
                throw "[ACL][ERROR] EmergencyAdmin is not setup correctly";
            console.log("== Market Admins ==");
            console.log("- ACL Admin", aclAdmin);
            console.log("- Pool Admin", poolAdmin);
            console.log("- Emergency Admin", emergencyAdmin);

            db.$.profiles
                .get(profile.code)
                .replace({
                    ...profile,
                    aclManager: aclManager.address,
                }).commit();
        }
    }
}
export const DeployAaveMarketACLManagerServiceInfo = {
    serviceName: DeployAaveMarketACLManagerService.serviceName,
    serviceContructor: DeployAaveMarketACLManagerService
};