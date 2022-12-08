import { BigNumber, BigNumberish, Signer } from "ethers/lib/ethers";
import { Deployment } from "hardhat-deploy/types";
export interface SymbolMap<T> {
    [symbol: string]: T;
}
export declare enum eTenderly {
    fork = "tenderly-fork"
}
export type eNetwork = eEthereumNetwork | ePolygonNetwork | eXDaiNetwork | eAvalancheNetwork | eArbitrumNetwork | eHarmonyNetwork | eFantomNetwork | eOptimismNetwork | eTenderlyNetwork;
type eTenderlyNetwork = "tenderly";
export declare enum eFantomNetwork {
    main = "fantom",
    testnet = "fantom-testnet"
}
export declare enum eOptimismNetwork {
    main = "optimism",
    testnet = "optimism-testnet"
}
export declare enum eEthereumNetwork {
    buidlerevm = "buidlerevm",
    kovan = "kovan",
    ropsten = "ropsten",
    main = "main",
    coverage = "coverage",
    hardhat = "hardhat",
    tenderly = "tenderly",
    rinkeby = "rinkeby",
    görli = "g\u00F6rli"
}
export declare enum ePolygonNetwork {
    polygon = "polygon",
    mumbai = "mumbai"
}
export declare enum eXDaiNetwork {
    xdai = "xdai"
}
export declare enum eAvalancheNetwork {
    avalanche = "avalanche",
    fuji = "fuji"
}
export declare enum eArbitrumNetwork {
    arbitrum = "arbitrum",
    arbitrumTestnet = "arbitrum-testnet",
    görliNitro = "arbitrum-g\u00F6rli"
}
export declare enum eHarmonyNetwork {
    main = "harmony",
    testnet = "harmony-testnet"
}
export declare enum EthereumNetworkNames {
    kovan = "kovan",
    ropsten = "ropsten",
    main = "main",
    matic = "matic",
    mumbai = "mumbai",
    xdai = "xdai",
    avalanche = "avalanche",
    fuji = "fuji"
}
export declare enum AavePools {
    proto = "proto",
    matic = "matic",
    amm = "amm",
    avalanche = "avalanche"
}
export declare enum eContractid {
    Example = "Example",
    PoolAddressesProvider = "PoolAddressesProvider",
    MintableERC20 = "MintableERC20",
    MintableDelegationERC20 = "MintableDelegationERC20",
    PoolAddressesProviderRegistry = "PoolAddressesProviderRegistry",
    PoolConfigurator = "PoolConfigurator",
    ValidationLogic = "ValidationLogic",
    ReserveLogic = "ReserveLogic",
    GenericLogic = "GenericLogic",
    Pool = "Pool",
    PriceOracle = "PriceOracle",
    Proxy = "Proxy",
    MockAggregator = "MockAggregator",
    AaveOracle = "AaveOracle",
    DefaultReserveInterestRateStrategy = "DefaultReserveInterestRateStrategy",
    LendingPoolCollateralManager = "LendingPoolCollateralManager",
    InitializableAdminUpgradeabilityProxy = "InitializableAdminUpgradeabilityProxy",
    MockFlashLoanReceiver = "MockFlashLoanReceiver",
    WalletBalanceProvider = "WalletBalanceProvider",
    AToken = "AToken",
    MockAToken = "MockAToken",
    DelegationAwareAToken = "DelegationAwareAToken",
    MockStableDebtToken = "MockStableDebtToken",
    MockVariableDebtToken = "MockVariableDebtToken",
    AaveProtocolDataProvider = "AaveProtocolDataProvider",
    IERC20Detailed = "IERC20Detailed",
    StableDebtToken = "StableDebtToken",
    VariableDebtToken = "VariableDebtToken",
    FeeProvider = "FeeProvider",
    TokenDistributor = "TokenDistributor",
    StableAndVariableTokensHelper = "StableAndVariableTokensHelper",
    ATokensAndRatesHelper = "ATokensAndRatesHelper",
    UiPoolDataProviderV3 = "UiPoolDataProviderV3",
    WrappedTokenGatewayV3 = "WrappedTokenGatewayV3",
    WETH = "WETH"
}
export declare enum ProtocolErrors {
    CALLER_NOT_POOL_ADMIN = "33",
    VL_INVALID_AMOUNT = "1",
    VL_NO_ACTIVE_RESERVE = "2",
    VL_RESERVE_FROZEN = "3",
    VL_CURRENT_AVAILABLE_LIQUIDITY_NOT_ENOUGH = "4",
    VL_NOT_ENOUGH_AVAILABLE_USER_BALANCE = "5",
    VL_TRANSFER_NOT_ALLOWED = "6",
    VL_BORROWING_NOT_ENABLED = "7",
    VL_INVALID_INTEREST_RATE_MODE_SELECTED = "8",
    VL_COLLATERAL_BALANCE_IS_0 = "9",
    VL_HEALTH_FACTOR_LOWER_THAN_LIQUIDATION_THRESHOLD = "10",
    VL_COLLATERAL_CANNOT_COVER_NEW_BORROW = "11",
    VL_STABLE_BORROWING_NOT_ENABLED = "12",
    VL_COLLATERAL_SAME_AS_BORROWING_CURRENCY = "13",
    VL_AMOUNT_BIGGER_THAN_MAX_LOAN_SIZE_STABLE = "14",
    VL_NO_DEBT_OF_SELECTED_TYPE = "15",
    VL_NO_EXPLICIT_AMOUNT_TO_REPAY_ON_BEHALF = "16",
    VL_NO_STABLE_RATE_LOAN_IN_RESERVE = "17",
    VL_NO_VARIABLE_RATE_LOAN_IN_RESERVE = "18",
    VL_UNDERLYING_BALANCE_NOT_GREATER_THAN_0 = "19",
    VL_DEPOSIT_ALREADY_IN_USE = "20",
    LP_NOT_ENOUGH_STABLE_BORROW_BALANCE = "21",
    LP_INTEREST_RATE_REBALANCE_CONDITIONS_NOT_MET = "22",
    LP_LIQUIDATION_CALL_FAILED = "23",
    LP_NOT_ENOUGH_LIQUIDITY_TO_BORROW = "24",
    LP_REQUESTED_AMOUNT_TOO_SMALL = "25",
    LP_INCONSISTENT_PROTOCOL_ACTUAL_BALANCE = "26",
    LP_CALLER_NOT_LENDING_POOL_CONFIGURATOR = "27",
    LP_INCONSISTENT_FLASHLOAN_PARAMS = "28",
    CT_CALLER_MUST_BE_LENDING_POOL = "29",
    CT_CANNOT_GIVE_ALLOWANCE_TO_HIMSELF = "30",
    CT_TRANSFER_AMOUNT_NOT_GT_0 = "31",
    RL_RESERVE_ALREADY_INITIALIZED = "32",
    LPC_RESERVE_LIQUIDITY_NOT_0 = "34",
    LPC_INVALID_ATOKEN_POOL_ADDRESS = "35",
    LPC_INVALID_STABLE_DEBT_TOKEN_POOL_ADDRESS = "36",
    LPC_INVALID_VARIABLE_DEBT_TOKEN_POOL_ADDRESS = "37",
    LPC_INVALID_STABLE_DEBT_TOKEN_UNDERLYING_ADDRESS = "38",
    LPC_INVALID_VARIABLE_DEBT_TOKEN_UNDERLYING_ADDRESS = "39",
    LPC_INVALID_ADDRESSES_PROVIDER_ID = "40",
    LPC_CALLER_NOT_EMERGENCY_ADMIN = "76",
    LPAPR_PROVIDER_NOT_REGISTERED = "41",
    LPCM_HEALTH_FACTOR_NOT_BELOW_THRESHOLD = "42",
    LPCM_COLLATERAL_CANNOT_BE_LIQUIDATED = "43",
    LPCM_SPECIFIED_CURRENCY_NOT_BORROWED_BY_USER = "44",
    LPCM_NOT_ENOUGH_LIQUIDITY_TO_LIQUIDATE = "45",
    LPCM_NO_ERRORS = "46",
    LP_INVALID_FLASHLOAN_MODE = "47",
    MATH_MULTIPLICATION_OVERFLOW = "48",
    MATH_ADDITION_OVERFLOW = "49",
    MATH_DIVISION_BY_ZERO = "50",
    RL_LIQUIDITY_INDEX_OVERFLOW = "51",
    RL_VARIABLE_BORROW_INDEX_OVERFLOW = "52",
    RL_LIQUIDITY_RATE_OVERFLOW = "53",
    RL_VARIABLE_BORROW_RATE_OVERFLOW = "54",
    RL_STABLE_BORROW_RATE_OVERFLOW = "55",
    CT_INVALID_MINT_AMOUNT = "56",
    LP_FAILED_REPAY_WITH_COLLATERAL = "57",
    CT_INVALID_BURN_AMOUNT = "58",
    LP_BORROW_ALLOWANCE_NOT_ENOUGH = "59",
    LP_FAILED_COLLATERAL_SWAP = "60",
    LP_INVALID_EQUAL_ASSETS_TO_SWAP = "61",
    LP_REENTRANCY_NOT_ALLOWED = "62",
    LP_CALLER_MUST_BE_AN_ATOKEN = "63",
    LP_IS_PAUSED = "64",
    LP_NO_MORE_RESERVES_ALLOWED = "65",
    LP_INVALID_FLASH_LOAN_EXECUTOR_RETURN = "66",
    RC_INVALID_LTV = "67",
    RC_INVALID_LIQ_THRESHOLD = "68",
    RC_INVALID_LIQ_BONUS = "69",
    RC_INVALID_DECIMALS = "70",
    RC_INVALID_RESERVE_FACTOR = "71",
    LPAPR_INVALID_ADDRESSES_PROVIDER_ID = "72",
    INVALID_FROM_BALANCE_AFTER_TRANSFER = "Invalid from balance after transfer",
    INVALID_TO_BALANCE_AFTER_TRANSFER = "Invalid from balance after transfer",
    INVALID_OWNER_REVERT_MSG = "Ownable: caller is not the owner",
    INVALID_HF = "Invalid health factor",
    TRANSFER_AMOUNT_EXCEEDS_BALANCE = "ERC20: transfer amount exceeds balance",
    SAFEERC20_LOWLEVEL_CALL = "SafeERC20: low-level call failed"
}
export type tEthereumAddress = string;
export type tStringTokenBigUnits = string;
export type tBigNumberTokenBigUnits = BigNumber;
export type tStringTokenSmallUnits = string;
export type tBigNumberTokenSmallUnits = BigNumber;
export interface iAssetCommon<T> {
    [key: string]: T;
}
export interface iAssetBase<T> {
    WETH: T;
    DAI: T;
    TUSD: T;
    USDC: T;
    USDT: T;
    SUSD: T;
    AAVE: T;
    BAT: T;
    MKR: T;
    LINK: T;
    KNC: T;
    WBTC: T;
    MANA: T;
    ZRX: T;
    SNX: T;
    BUSD: T;
    YFI: T;
    UNI: T;
    USD: T;
    REN: T;
    ENJ: T;
    UniDAIWETH: T;
    UniWBTCWETH: T;
    UniAAVEWETH: T;
    UniBATWETH: T;
    UniDAIUSDC: T;
    UniCRVWETH: T;
    UniLINKWETH: T;
    UniMKRWETH: T;
    UniRENWETH: T;
    UniSNXWETH: T;
    UniUNIWETH: T;
    UniUSDCWETH: T;
    UniWBTCUSDC: T;
    UniYFIWETH: T;
    BptWBTCWETH: T;
    BptBALWETH: T;
    WMATIC: T;
    STAKE: T;
    xSUSHI: T;
    AVAX: T;
}
export type iAssetsWithoutETH<T> = Omit<iAssetBase<T>, "ETH">;
export type iAssetsWithoutUSD<T> = Omit<iAssetBase<T>, "USD">;
export type iAavePoolAssets<T> = Pick<iAssetsWithoutUSD<T>, "DAI" | "USDC" | "AAVE" | "LINK" | "WBTC" | "WETH">;
export type iLpPoolAssets<T> = Pick<iAssetsWithoutUSD<T>, "DAI" | "USDC" | "USDT" | "WBTC" | "WETH" | "UniDAIWETH" | "UniWBTCWETH" | "UniAAVEWETH" | "UniBATWETH" | "UniDAIUSDC" | "UniCRVWETH" | "UniLINKWETH" | "UniMKRWETH" | "UniRENWETH" | "UniSNXWETH" | "UniUNIWETH" | "UniUSDCWETH" | "UniWBTCUSDC" | "UniYFIWETH" | "BptWBTCWETH" | "BptBALWETH">;
export type iMaticPoolAssets<T> = Pick<iAssetsWithoutUSD<T>, "DAI" | "USDC" | "USDT" | "WBTC" | "WETH" | "WMATIC" | "AAVE">;
export type iXDAIPoolAssets<T> = Pick<iAssetsWithoutUSD<T>, "DAI" | "USDC" | "USDT" | "WBTC" | "WETH" | "STAKE">;
export type iAvalanchePoolAssets<T> = Pick<iAssetsWithoutUSD<T>, "WETH" | "DAI" | "USDC" | "USDT" | "AAVE" | "WBTC" | "AVAX">;
export type iMultiPoolsAssets<T> = iAssetCommon<T> | iAavePoolAssets<T>;
export type iAavePoolTokens<T> = Omit<iAavePoolAssets<T>, "ETH">;
export type iAssetAggregatorBase<T> = iAssetsWithoutETH<T>;
export declare enum TokenContractId {
    DAI = "DAI",
    AAVE = "AAVE",
    TUSD = "TUSD",
    BAT = "BAT",
    WETH = "WETH",
    USDC = "USDC",
    USDT = "USDT",
    SUSD = "SUSD",
    ZRX = "ZRX",
    MKR = "MKR",
    WBTC = "WBTC",
    LINK = "LINK",
    KNC = "KNC",
    MANA = "MANA",
    REN = "REN",
    SNX = "SNX",
    BUSD = "BUSD",
    USD = "USD",
    YFI = "YFI",
    UNI = "UNI",
    ENJ = "ENJ",
    UniDAIWETH = "UniDAIWETH",
    UniWBTCWETH = "UniWBTCWETH",
    UniAAVEWETH = "UniAAVEWETH",
    UniBATWETH = "UniBATWETH",
    UniDAIUSDC = "UniDAIUSDC",
    UniCRVWETH = "UniCRVWETH",
    UniLINKWETH = "UniLINKWETH",
    UniMKRWETH = "UniMKRWETH",
    UniRENWETH = "UniRENWETH",
    UniSNXWETH = "UniSNXWETH",
    UniUNIWETH = "UniUNIWETH",
    UniUSDCWETH = "UniUSDCWETH",
    UniWBTCUSDC = "UniWBTCUSDC",
    UniYFIWETH = "UniYFIWETH",
    BptWBTCWETH = "BptWBTCWETH",
    BptBALWETH = "BptBALWETH",
    WMATIC = "WMATIC",
    STAKE = "STAKE",
    xSUSHI = "xSUSHI",
    AVAX = "AVAX"
}
export interface IReserveParams extends IReserveBorrowParams, IReserveCollateralParams {
    aTokenImpl: eContractid;
    reserveFactor: string;
    supplyCap: string;
    strategy: IInterestRateStrategyParams;
}
export interface IInterestRateStrategyParams {
    name: string;
    optimalUsageRatio: string;
    baseVariableBorrowRate: string;
    variableRateSlope1: string;
    variableRateSlope2: string;
    stableRateSlope1: string;
    stableRateSlope2: string;
    baseStableRateOffset: string;
    stableRateExcessOffset: string;
    optimalStableToTotalDebtRatio: string;
}
export interface IReserveBorrowParams {
    borrowingEnabled: boolean;
    stableBorrowRateEnabled: boolean;
    reserveDecimals: string;
    borrowCap: string;
    debtCeiling: string;
    borrowableIsolation: boolean;
    flashLoanEnabled: boolean;
}
export interface IReserveCollateralParams {
    baseLTVAsCollateral: string;
    liquidationThreshold: string;
    liquidationBonus: string;
    liquidationProtocolFee?: string;
}
export type iParamsPerNetwork<T> = {
    [k in eNetwork]?: T;
};
export type iParamsPerNetworkWithDefault<T> = {
    [k in eNetwork]?: T;
} & {
    default: T;
};
export interface iParamsPerNetworkAll<T> extends iEthereumParamsPerNetwork<T>, iPolygonParamsPerNetwork<T>, iXDaiParamsPerNetwork<T> {
}
export interface iEthereumParamsPerNetwork<T> {
    [eEthereumNetwork.kovan]: T;
    [eEthereumNetwork.ropsten]: T;
    [eEthereumNetwork.main]: T;
    [eEthereumNetwork.tenderly]: T;
}
export interface iPolygonParamsPerNetwork<T> {
    [ePolygonNetwork.polygon]: T;
    [ePolygonNetwork.mumbai]: T;
}
export interface iXDaiParamsPerNetwork<T> {
    [eXDaiNetwork.xdai]: T;
}
export interface iAvalancheParamsPerNetwork<T> {
    [eAvalancheNetwork.avalanche]: T;
    [eAvalancheNetwork.fuji]: T;
}
export interface iArbitrumParamsPerNetwork<T> {
    [eArbitrumNetwork.arbitrum]: T;
    [eArbitrumNetwork.arbitrumTestnet]: T;
}
export interface iParamsPerPool<T> {
    [AavePools.proto]: T;
    [AavePools.matic]: T;
    [AavePools.amm]: T;
    [AavePools.avalanche]: T;
}
export interface iBasicDistributionParams {
    receivers: string[];
    percentages: string[];
}
export declare enum RateMode {
    None = "0",
    Stable = "1",
    Variable = "2"
}
export interface ObjectString {
    [key: string]: string;
}
export interface IMocksConfig {
    AllAssetsInitialPrices: iAssetBase<string>;
}
export interface ILendingRate {
    borrowRate: string;
}
export interface EMode {
    id: string;
    ltv: string;
    liquidationThreshold: string;
    liquidationBonus: string;
    label: string;
    oracleId?: string;
    assets: string[];
}
export interface IBaseConfiguration {
    MarketId: string;
    ATokenNamePrefix: string;
    StableDebtTokenNamePrefix: string;
    VariableDebtTokenNamePrefix: string;
    SymbolPrefix: string;
    ProviderId: number;
    TestnetMarket?: boolean;
    ProviderRegistryOwner?: iParamsPerNetwork<tEthereumAddress | undefined>;
    FallbackOracle?: iParamsPerNetwork<tEthereumAddress>;
    ChainlinkAggregator: iParamsPerNetwork<ITokenAddress>;
    WrappedTokenGateway?: iParamsPerNetwork<tEthereumAddress>;
    ReserveFactorTreasuryAddress: iParamsPerNetwork<tEthereumAddress>;
    StableDebtTokenImplementation?: iParamsPerNetwork<tEthereumAddress>;
    VariableDebtTokenImplementation?: iParamsPerNetwork<tEthereumAddress>;
    ReserveAssets?: iParamsPerNetwork<SymbolMap<tEthereumAddress>>;
    OracleQuoteCurrency: string;
    OracleQuoteUnit: string;
    OracleQuoteCurrencyAddress: tEthereumAddress;
    ReservesConfig: SymbolMap<IReserveParams>;
    WrappedNativeTokenSymbol: string;
    IncentivesConfig: IncentivesConfig;
    EModes: SymbolMap<EMode>;
    L2PoolEnabled?: iParamsPerNetwork<boolean>;
    StkAaveProxy?: iParamsPerNetwork<tEthereumAddress>;
    ParaswapRegistry?: iParamsPerNetwork<tEthereumAddress>;
    FlashLoanPremiums: {
        total: number;
        protocol: number;
    };
}
export interface ICommonConfiguration extends IBaseConfiguration {
}
export interface IAaveConfiguration extends ICommonConfiguration {
}
export interface ITokenAddress {
    [token: string]: tEthereumAddress;
}
export interface ITokenDecimals {
    [token: string]: number;
}
export type PoolConfiguration = ICommonConfiguration;
export interface SignerWithAddress {
    signer: Signer;
    address: tEthereumAddress;
}
export interface PoolTokens {
    aTokenAddress: tEthereumAddress;
    stableDebtTokenAddress: tEthereumAddress;
    variableDebtTokenAddress: tEthereumAddress;
}
export interface RewardsInput {
    emissionPerSecond: BigNumberish;
    totalSupply: BigNumberish;
    distributionEnd: BigNumberish;
    asset: string;
    reward: string;
    rewardOracle: string;
    transferStrategy: string;
}
export interface SubTokenOutput {
    symbol: string;
    artifact: Deployment;
}
export declare enum AssetType {
    AToken = 0,
    VariableDebtToken = 1,
    StableDebtToken = 2
}
export declare enum TransferStrategy {
    PullRewardsStrategy = 0,
    StakedRewardsStrategy = 1
}
export interface RewardsConfigInput {
    emissionPerSecond: BigNumberish;
    duration: number;
    asset: string;
    assetType: AssetType;
    reward: string;
    rewardOracle: string;
    transferStrategy: TransferStrategy;
    transferStrategyParams: string;
}
export interface IncentivesConfig {
    enabled: iParamsPerNetwork<boolean>;
    rewards: iParamsPerNetwork<SymbolMap<tEthereumAddress>>;
    rewardsOracle: iParamsPerNetwork<SymbolMap<tEthereumAddress>>;
    incentivesInput: iParamsPerNetwork<RewardsConfigInput[]>;
}
export {};
