import { IsService, IServiceContext } from "@webspaceiq/ts-service-objects";
import { DeployServiceContext } from "../../model/deploy";

@IsService()
export class DeployUniswapPairsV2Service {

    public static serviceName = 'DeployUniswapPairsV2Service';

    async execute(context: IServiceContext<DeployServiceContext>): Promise<void> {
        let { hre, db } = context.data;
        const { deployments, getNamedAccounts } = hre;
        const { deploy } = deployments;

        const { deployer } = await getNamedAccounts();
        const { profiles } = db.data;


        for (const profile of profiles) {
            // Do not evaluate rest of loop if... 
            if (!profile.deployedFactoryV2) continue;

            // Connect to deployed factory
            const UniswapV2Factory = await hre.ethers.getContractFactory("UniswapV2Factory");
            const deployedFactoryV2 = UniswapV2Factory.attach(profile.deployedFactoryV2);

            // Load all pairs defined for the current profile
            const pairs = db.$.pairs.find({ profileId: profile.code }).data;

            // For each defined pair ...
            for (const pair of pairs) {
                // Get the token A address
                const tokenAData = db
                    .$
                    .assets
                    .get({ symbol: pair.tokenA })
                    .data;

                // Get the token B address
                const tokenBData = db
                    .$
                    .assets
                    .get({ symbol: pair.tokenB })
                    .data;

                // Create pair
                await deployedFactoryV2.createPair(tokenAData.address, tokenBData.address);
                const pairAddress = await deployedFactoryV2.getPair(tokenAData.address, tokenBData.address);

                // Update the pair information
                db.$.pairs
                    .get(pair.code)
                    .replace({
                        ...pair,
                        pairAddress,
                        tokenAAddress: tokenAData.address,
                        tokenBAddress: tokenBData.address,
                    }).commit();
            }


        }

    }
}
export const DeployUniswapPairsV2ServiceInfo = {
    serviceName: DeployUniswapPairsV2Service.serviceName,
    serviceContructor: DeployUniswapPairsV2Service
};