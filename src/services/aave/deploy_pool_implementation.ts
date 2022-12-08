import { IsService, IServiceContext } from "@webspaceiq/ts-service-objects";
import { POOL_IMPL_ID } from "../../deploy_ids";
import { COMMON_DEPLOY_PARAMS } from "../../env";
import { DeployServiceContext } from "../../model/deploy";
import { InitUtil } from "../../util/InitUtil";

@IsService()
export class DeployAavePoolImplementationService {

    public static serviceName = 'DeployAavePoolImplementationService';

    async execute(context: IServiceContext<DeployServiceContext>): Promise<void> {
        let { hre, db } = context.data;
        const { deployments, getNamedAccounts } = hre;
        const { deployer } = await getNamedAccounts();

        const { profiles } = db.data;
        const { deploy } = deployments;

        const commonLibraries = await InitUtil.getPoolLibraries(hre);

        for (const profile of profiles) {

            if (!profile.addressesProvider) {
                throw Error('Addresses provider is undefined')
            }

            const poolArtifact = await deploy(`${POOL_IMPL_ID}_${profile.code}`, {
                contract: "Pool",
                from: deployer,
                args: [profile.addressesProvider],
                libraries: {
                    ...commonLibraries,
                },
                ...COMMON_DEPLOY_PARAMS,
            });

            db.$.profiles
                .get(profile.code)
                .replace({
                    ...profile,
                    poolImplementation: poolArtifact.address,
                }).commit();
        }
    }
}
export const DeployAavePoolImplementationServiceInfo = {
    serviceName: DeployAavePoolImplementationService.serviceName,
    serviceContructor: DeployAavePoolImplementationService
};