import { ServiceExecutor, ServiceRepository } from "@webspaceiq/ts-service-objects";
import { DeployAaveMarketACLManagerServiceInfo } from "./services/aave/deploy_acl";
import { DeployAaveAddressesProviderServiceInfo } from "./services/aave/deploy_addresses_provider";
import { DeployAaveLibrariesServiceInfo } from "./services/aave/deploy_libraries";
import { DeployAavePoolConfiguratorServiceInfo } from "./services/aave/deploy_pool_configurator";
import { DeployAavePoolImplementationServiceInfo } from "./services/aave/deploy_pool_implementation";
import { DeployAaveMarketsRegistryServiceInfo } from "./services/aave/deploy_registry";
import { DeployERC20ServiceInfo } from "./services/deploy_erc20";
import { DeployUniswapFactoryV2ServiceInfo } from "./services/uniswap/deploy_factory";
import { DeployUniswapPairsV2ServiceInfo } from "./services/uniswap/deploy_pairs";
import { PrintDBDataServiceInfo } from "./services/util/print_config";

// Initialize service repo with just a single service ...
export const repository = new ServiceRepository([
    DeployERC20ServiceInfo,
    DeployUniswapFactoryV2ServiceInfo,
    DeployUniswapPairsV2ServiceInfo,
    DeployAaveMarketsRegistryServiceInfo,
    DeployAaveLibrariesServiceInfo,
    DeployAaveAddressesProviderServiceInfo,
    DeployAavePoolImplementationServiceInfo,
    DeployAavePoolConfiguratorServiceInfo,
    DeployAaveMarketACLManagerServiceInfo,
    PrintDBDataServiceInfo,
]);
export const serviceExecutor = new ServiceExecutor(repository);