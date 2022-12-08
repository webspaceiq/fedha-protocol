import { IsService, IServiceContext } from "@webspaceiq/ts-service-objects";
import { POOL_CONFIGURATOR_IMPL_ID, RESERVES_SETUP_HELPER_ID } from "../../deploy_ids";
import { COMMON_DEPLOY_PARAMS } from "../../env";
import { DeployServiceContext } from "../../model/deploy";

@IsService()
export class DeployAavePoolConfiguratorService {

    public static serviceName = 'DeployAavePoolConfiguratorService';

    async execute(context: IServiceContext<DeployServiceContext>): Promise<void> {
        let { hre, db } = context.data;
        const { deployments, getNamedAccounts, } = hre;
        const { deployer } = await getNamedAccounts();

        const { profiles } = db.data;
        const { deploy, get } = deployments;

        for (const profile of profiles) {
            const configuratorLogicArtifact = await get("ConfiguratorLogic");

            const poolConfiguratorArtifact = await deploy(
                `${POOL_CONFIGURATOR_IMPL_ID}_${profile.code}`, {
                contract: "PoolConfigurator",
                from: deployer,
                args: [],
                libraries: {
                    ConfiguratorLogic: configuratorLogicArtifact.address,
                },
                ...COMMON_DEPLOY_PARAMS,
            });

            const reservesSetupHelperArtifact = await deploy(
                `${RESERVES_SETUP_HELPER_ID}_${profile.code}`, {
                from: deployer,
                args: [],
                contract: "ReservesSetupHelper",
            });

            db.$.profiles
                .get(profile.code)
                .replace({
                    ...profile,
                    poolConfigurator: poolConfiguratorArtifact.address,
                    reservesSetupHelper: reservesSetupHelperArtifact.address,
                }).commit();
        }
    }
}
export const DeployAavePoolConfiguratorServiceInfo = {
    serviceName: DeployAavePoolConfiguratorService.serviceName,
    serviceContructor: DeployAavePoolConfiguratorService
};