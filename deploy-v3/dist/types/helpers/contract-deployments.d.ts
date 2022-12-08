import { EmissionManager } from "./../typechain";
import { MockL2Pool } from "./../typechain";
import { StakedAave } from "./../typechain";
import { tEthereumAddress, tStringTokenSmallUnits } from "./types";
import { MintableERC20 } from "../typechain";
import { AaveOracle, AaveProtocolDataProvider, ACLManager, AToken, ConfiguratorLogic, DefaultReserveInterestRateStrategy, DelegationAwareAToken, InitializableImmutableAdminUpgradeabilityProxy, MintableDelegationERC20, InitializableAdminUpgradeabilityProxy, UiIncentiveDataProviderV3, L2Pool, L2Encoder } from "../typechain";
import { StakedAaveV2 } from "../typechain";
import { StakedTokenV2Rev3 } from "../typechain";
import { MockAggregator, MockAToken, MockFlashLoanReceiver, MockIncentivesController, MockInitializableFromConstructorImple, MockInitializableImple, MockInitializableImpleV2, MockPool, MockPoolInherited, MockReentrantInitializableImple, MockReserveConfiguration, MockStableDebtToken, MockVariableDebtToken, Pool, PoolAddressesProvider, PoolAddressesProviderRegistry, PoolConfigurator, PriceOracle, ReservesSetupHelper, StableDebtToken, UiPoolDataProviderV3, VariableDebtToken, WETH9Mocked, WrappedTokenGatewayV3 } from "../typechain";
export declare const deployUiIncentiveDataProvider: () => Promise<UiIncentiveDataProviderV3>;
export declare const deployUiPoolDataProvider: (chainlinkAggregatorProxy: string, chainlinkEthUsdAggregatorProxy: string) => Promise<UiPoolDataProviderV3>;
export declare const deployPoolAddressesProvider: (marketId: string) => Promise<PoolAddressesProvider>;
export declare const deployPoolAddressesProviderRegistry: () => Promise<PoolAddressesProviderRegistry>;
export declare const deployACLManager: (provider: tEthereumAddress) => Promise<ACLManager>;
export declare const deployConfiguratorLogicLibrary: () => Promise<ConfiguratorLogic>;
export declare const deployPoolConfigurator: () => Promise<PoolConfigurator>;
export declare const deployPool: (provider?: tEthereumAddress) => Promise<Pool>;
export declare const deployMockPoolInherited: (provider?: tEthereumAddress) => Promise<MockPoolInherited>;
export declare const deployPriceOracle: () => Promise<PriceOracle>;
export declare const deployMockAggregator: (price: tStringTokenSmallUnits) => Promise<MockAggregator>;
export declare const deployAaveOracle: (args: [
    tEthereumAddress,
    tEthereumAddress[],
    tEthereumAddress[],
    tEthereumAddress,
    tEthereumAddress,
    string
]) => Promise<AaveOracle>;
export declare const deployMockFlashLoanReceiver: (addressesProvider: tEthereumAddress) => Promise<MockFlashLoanReceiver>;
export declare const deployAaveProtocolDataProvider: (addressesProvider: tEthereumAddress) => Promise<AaveProtocolDataProvider>;
export declare const deployMintableERC20: (args: [string, string, string]) => Promise<MintableERC20>;
export declare const deployMintableDelegationERC20: (args: [string, string, string]) => Promise<MintableDelegationERC20>;
export declare const deployDefaultReserveInterestRateStrategy: (args: [
    tEthereumAddress,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
]) => Promise<DefaultReserveInterestRateStrategy>;
export declare const deployGenericStableDebtToken: (poolAddress: tEthereumAddress) => Promise<StableDebtToken>;
export declare const deployGenericVariableDebtToken: (poolAddress: tEthereumAddress) => Promise<VariableDebtToken>;
export declare const deployGenericAToken: ([poolAddress, underlyingAssetAddress, treasuryAddress, incentivesController, name, symbol,]: [
    tEthereumAddress,
    tEthereumAddress,
    tEthereumAddress,
    tEthereumAddress,
    string,
    string
]) => Promise<AToken>;
export declare const deployGenericATokenImpl: (poolAddress: tEthereumAddress) => Promise<AToken>;
export declare const deployDelegationAwareAToken: ([poolAddress, underlyingAssetAddress, treasuryAddress, incentivesController, name, symbol,]: [
    tEthereumAddress,
    tEthereumAddress,
    tEthereumAddress,
    tEthereumAddress,
    string,
    string
]) => Promise<DelegationAwareAToken>;
export declare const deployDelegationAwareATokenImpl: (poolAddress: tEthereumAddress) => Promise<DelegationAwareAToken>;
export declare const deployReservesSetupHelper: () => Promise<ReservesSetupHelper>;
export declare const deployInitializableImmutableAdminUpgradeabilityProxy: (args: [tEthereumAddress]) => Promise<InitializableImmutableAdminUpgradeabilityProxy>;
export declare const deployMockStableDebtToken: (args: [
    tEthereumAddress,
    tEthereumAddress,
    tEthereumAddress,
    string,
    string,
    string
]) => Promise<MockStableDebtToken>;
export declare const deployWETHMocked: () => Promise<WETH9Mocked>;
export declare const deployMockVariableDebtToken: (args: [
    tEthereumAddress,
    tEthereumAddress,
    tEthereumAddress,
    string,
    string,
    string
]) => Promise<MockVariableDebtToken>;
export declare const deployMockAToken: (args: [
    tEthereumAddress,
    tEthereumAddress,
    tEthereumAddress,
    tEthereumAddress,
    string,
    string,
    string
]) => Promise<MockAToken>;
export declare const deployMockIncentivesController: () => Promise<MockIncentivesController>;
export declare const deployMockReserveConfiguration: () => Promise<MockReserveConfiguration>;
export declare const deployMockPool: () => Promise<MockPool>;
export declare const deployMockInitializableImple: () => Promise<MockInitializableImple>;
export declare const deployMockInitializableImpleV2: () => Promise<MockInitializableImpleV2>;
export declare const deployMockInitializableFromConstructorImple: (args: [string]) => Promise<MockInitializableFromConstructorImple>;
export declare const deployMockReentrantInitializableImple: () => Promise<MockReentrantInitializableImple>;
export declare const deployWrappedTokenGateway: (wrappedToken: tEthereumAddress) => Promise<WrappedTokenGatewayV3>;
export declare const deployStakedAaveV3: ([stakedToken, rewardsToken, cooldownSeconds, unstakeWindow, rewardsVault, emissionManager, distributionDuration,]: [
    tEthereumAddress,
    tEthereumAddress,
    string,
    string,
    tEthereumAddress,
    tEthereumAddress,
    string
]) => Promise<StakedTokenV2Rev3>;
export declare const deployStakedAaveV2: ([stakedToken, rewardsToken, cooldownSeconds, unstakeWindow, rewardsVault, emissionManager, distributionDuration,]: [
    tEthereumAddress,
    tEthereumAddress,
    string,
    string,
    tEthereumAddress,
    tEthereumAddress,
    string
]) => Promise<StakedAaveV2>;
export declare const deployStakedAaveV1: ([stakedToken, rewardsToken, cooldownSeconds, unstakeWindow, rewardsVault, emissionManager, distributionDuration,]: [
    tEthereumAddress,
    tEthereumAddress,
    string,
    string,
    tEthereumAddress,
    tEthereumAddress,
    string
]) => Promise<StakedAave>;
export declare const setupStkAave: (proxy: InitializableAdminUpgradeabilityProxy, args: [
    tEthereumAddress,
    tEthereumAddress,
    string,
    string,
    tEthereumAddress,
    tEthereumAddress,
    string
]) => Promise<void>;
export declare const deployInitializableAdminUpgradeabilityProxy: (slug: string) => Promise<InitializableAdminUpgradeabilityProxy>;
export declare const deployCalldataLogicLibrary: () => Promise<import("ethers").Contract>;
export declare const deployL2DeployerImplementation: (addressesProviderAddress: tEthereumAddress) => Promise<L2Pool>;
export declare const deployL2Mock2Pool: (addressesProviderAddress: tEthereumAddress) => Promise<MockL2Pool>;
export declare const deployL2Encoder: (poolProxy: tEthereumAddress) => Promise<L2Encoder>;
export declare const deployEmissionManager: (rewardsController: tEthereumAddress, owner: tEthereumAddress) => Promise<EmissionManager>;
