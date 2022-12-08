import { IsService, IServiceContext } from "@webspaceiq/ts-service-objects";
import { DeployServiceContext } from "../../model/deploy";

@IsService()
export class DeployUniswapFactoryV2Service {

    public static serviceName = 'DeployUniswapFactoryV2Service';

    async execute(context: IServiceContext<DeployServiceContext>): Promise<void> {
        let { hre, db } = context.data;
        const { deployments, getNamedAccounts } = hre;
        const { deployer } = await getNamedAccounts();

        const { profiles } = db.data;
        const { deploy } = deployments;

        for (const profile of profiles) {
            const deployedWETH = await deploy('WETH9', { from: deployer });
            const deployedWETHPartner = await deploy('ERC20Base', { from: deployer, args: ["WETH", "WETH"] });

            // deploy V2
            const deployedFactoryV2 = await deploy('UniswapV2Factory', { from: deployer, args: [deployer] });
            const deployedRouterEmit = await deploy('RouterEventEmitter', { from: deployer });

            db.$.profiles
                .get(profile.code)
                .replace({
                    ...profile,
                    deployedWETH: deployedWETH.address,
                    deployedWETHPartner: deployedWETHPartner.address,
                    deployedFactoryV2: deployedFactoryV2.address,
                    deployedRouterEmit: deployedRouterEmit.address,
                }).commit();
        }
    }
}
export const DeployUniswapFactoryV2ServiceInfo = {
    serviceName: DeployUniswapFactoryV2Service.serviceName,
    serviceContructor: DeployUniswapFactoryV2Service
};