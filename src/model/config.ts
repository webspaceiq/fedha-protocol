export interface Asset {
    name: string;
    symbol: string;
    address?: string;
}
export interface Profile {
    code: string;
    providerId: number;
    deployedWETH?: string;
    deployedWETHPartner?: string;
    deployedFactoryV2?: string;
    deployedRouterEmit?: string;
    poolAddressesProviderRegistry?: string;
    addressesProvider?: string;
    poolImplementation?: string;
    poolConfigurator?: string;
    reservesSetupHelper?: string;
    aclManager?: string;

}
export interface Pair {
    code: string;
    profileId: string;
    tokenA: string;
    tokenB: string;
    pairAddress?: string;
    tokenAAddress?: string;
    tokenBAddress?: string;
}
export interface Reserve {
    
}
export interface Strategy {
    
}

export interface Configuration {
    assets: Asset[];
    profiles: Profile[];
    pairs: Pair[];
    reserves: Reserve[];
    strategies: Strategy[];
}

export type ConfigurationDB  = Record<string, any[]> & Configuration


export interface MarketConfig {
    MarketId: string,
    ATokenNamePrefix: string,
    StableDebtTokenNamePrefix: string,
    VariableDebtTokenNamePrefix: string,
    SymbolPrefix: string,
    ProviderId: number,
    OracleQuoteCurrencyAddress: string,
    OracleQuoteCurrency: "USD",
    OracleQuoteUnit: number,
    WrappedNativeTokenSymbol: "WETH",
    reserves: Record<string, ReserveConfig>;
}
export interface ReserveConfig {
    strategy: ReserveStrategy,
    baseLTVAsCollateral: number,
    liquidationThreshold: number,
    liquidationBonus: number,
    liquidationProtocolFee: number,
    borrowingEnabled: true,
    stableBorrowRateEnabled: true,
    flashLoanEnabled: true,
    reserveDecimals: number,
    aTokenImpl: any,
    reserveFactor: number,
    supplyCap: number,
    borrowCap: number,
    debtCeiling: number,
    borrowableIsolation: true,
}
export interface ReserveStrategy {
    name: string,
    optimalUsageRatio: number,
    baseVariableBorrowRate: number,
    variableRateSlope1: number,
    variableRateSlope2: number,
    stableRateSlope1: number,
    stableRateSlope2: number,
    baseStableRateOffset: number,
    stableRateExcessOffset: number,
    optimalStableToTotalDebtRatio: number,
}