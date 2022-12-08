import { iParamsPerNetwork, eNetwork, PoolConfiguration, IBaseConfiguration, ITokenAddress, tEthereumAddress, ICommonConfiguration, SubTokenOutput, AssetType } from "./types";
export declare enum ConfigNames {
    Commons = "Commons",
    Aave = "Aave",
    Test = "Test",
    Harmony = "Harmony",
    Avalanche = "Avalanche",
    Fantom = "Fantom",
    Polygon = "Polygon",
    Optimistic = "Optimistic",
    Arbitrum = "Arbitrum"
}
export declare const getParamPerNetwork: <T>(param: iParamsPerNetwork<T> | undefined, network: eNetwork) => T | undefined;
export declare const getRequiredParamPerNetwork: <T>(poolConfig: PoolConfiguration, key: keyof PoolConfiguration, network: eNetwork) => T;
export declare const getAddressFromConfig: (param: iParamsPerNetwork<string | undefined>, network: eNetwork, key?: string) => tEthereumAddress;
export declare const loadPoolConfig: (configName: ConfigNames) => PoolConfiguration;
export declare const checkRequiredEnvironment: () => boolean;
export declare const savePoolTokens: (reservesConfig: ITokenAddress, dataProviderAddress: tEthereumAddress) => Promise<string[]>;
export declare const getReserveAddresses: (poolConfig: IBaseConfiguration, network: eNetwork) => Promise<ITokenAddress>;
export declare const getSubTokensByPrefix: (prefix: string) => Promise<SubTokenOutput[]>;
export declare const getSymbolsByPrefix: (prefix: string) => Promise<string[]>;
export declare const getChainlinkOracles: (poolConfig: IBaseConfiguration, network: eNetwork) => Promise<ITokenAddress>;
export declare const getTreasuryAddress: (poolConfig: IBaseConfiguration, network: eNetwork) => Promise<tEthereumAddress>;
export declare const isProductionMarket: (poolConfig: ICommonConfiguration) => boolean;
export declare const isTestnetMarket: (poolConfig: ICommonConfiguration) => boolean;
export declare const getReserveAddress: (poolConfig: ICommonConfiguration, symbol: string) => Promise<string>;
export declare const getOracleByAsset: (poolConfig: ICommonConfiguration, symbol: string) => Promise<string>;
export declare const isL2PoolSupported: (poolConfig: ICommonConfiguration) => boolean;
export declare const getPrefixByAssetType: (assetType: AssetType) => string;
export declare const isIncentivesEnabled: (poolConfig: ICommonConfiguration) => boolean;
