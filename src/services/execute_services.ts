import { DeployAaveMarketACLManagerService } from "./aave/deploy_acl";
import { DeployAaveAddressesProviderService } from "./aave/deploy_addresses_provider";
import { DeployAaveLibrariesService } from "./aave/deploy_libraries";
import { DeployAavePoolConfiguratorService } from "./aave/deploy_pool_configurator";
import { DeployAavePoolImplementationService } from "./aave/deploy_pool_implementation";
import { DeployAaveMarketsRegistryService } from "./aave/deploy_registry";
import { DeployERC20Service } from "./deploy_erc20";
import { DeployUniswapFactoryV2Service } from "./uniswap/deploy_factory";
import { DeployUniswapPairsV2Service } from "./uniswap/deploy_pairs";
import { PrintDBDataService } from "./util/print_config";

// Services to be executed in the order given
export const execution = [
    DeployERC20Service.serviceName,
    DeployUniswapFactoryV2Service.serviceName,
    DeployUniswapPairsV2Service.serviceName,
    DeployAaveMarketsRegistryService.serviceName,
    DeployAaveLibrariesService.serviceName,
    DeployAaveAddressesProviderService.serviceName,
    DeployAavePoolImplementationService.serviceName,
    DeployAavePoolConfiguratorService.serviceName,
    DeployAaveMarketACLManagerService.serviceName,
    PrintDBDataService.serviceName
];