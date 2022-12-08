import { IsService, IServiceContext } from "@webspaceiq/ts-service-objects";
import { ERC20_IMPLEMENTATION } from "../constants";
import { DeployServiceContext } from "../model/deploy";

@IsService()
export class DeployERC20Service {

    public static serviceName = 'DeployERC20Service';

    async execute(context: IServiceContext<DeployServiceContext>): Promise<void> {
        let { hre, db } = context.data;
        const { deployments, getNamedAccounts } = hre;
        const { deploy } = deployments;

        const { deployer } = await getNamedAccounts();
        const { assets } = db.data;

        for (const asset of assets) {

            const { address } = await deploy(ERC20_IMPLEMENTATION, {
                from: deployer,
                args: [asset.name, asset.symbol],
            });

            // Update the asset information
            db.$.assets
                .get(asset.symbol)
                .replace({ ...asset, address }).commit();
        };
    }
}
export const DeployERC20ServiceInfo = {
    serviceName: DeployERC20Service.serviceName,
    serviceContructor: DeployERC20Service
};