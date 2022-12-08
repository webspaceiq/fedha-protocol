import { IsService, IServiceContext } from "@webspaceiq/ts-service-objects";
import { COMMON_DEPLOY_PARAMS } from "../../env";
import { DeployServiceContext } from "../../model/deploy";

@IsService()
export class DeployAaveLibrariesService {

    public static serviceName = 'DeployAaveLibrariesService';

    async execute(context: IServiceContext<DeployServiceContext>): Promise<void> {
        let { hre, db } = context.data;
        const { deployments, getNamedAccounts } = hre;
        const { deploy } = deployments;

        const { deployer } = await getNamedAccounts();
        await deploy("SupplyLogic", {
            from: deployer,
            args: [],
            ...COMMON_DEPLOY_PARAMS,
        });
        const borrowLogicArtifact = await deploy("BorrowLogic", {
            from: deployer,
            args: [],
            ...COMMON_DEPLOY_PARAMS,
        });
        await deploy("LiquidationLogic", {
            from: deployer,
            ...COMMON_DEPLOY_PARAMS,
        });
        await deploy("EModeLogic", {
            from: deployer,
            ...COMMON_DEPLOY_PARAMS,
        });
        await deploy("BridgeLogic", {
            from: deployer,
            ...COMMON_DEPLOY_PARAMS,
        });
        await deploy("ConfiguratorLogic", {
            from: deployer,
            ...COMMON_DEPLOY_PARAMS,
        });
        await deploy("FlashLoanLogic", {
            from: deployer,
            ...COMMON_DEPLOY_PARAMS,
            libraries: {
                BorrowLogic: borrowLogicArtifact.address,
            },
        });
        await deploy("PoolLogic", {
            from: deployer,
            ...COMMON_DEPLOY_PARAMS,
        });
    }
}
export const DeployAaveLibrariesServiceInfo = {
    serviceName: DeployAaveLibrariesService.serviceName,
    serviceContructor: DeployAaveLibrariesService
};