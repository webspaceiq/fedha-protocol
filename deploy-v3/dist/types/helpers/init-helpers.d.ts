import { iMultiPoolsAssets, IReserveParams, tEthereumAddress } from "./types";
export declare const initReservesByHelper: (reservesParams: iMultiPoolsAssets<IReserveParams>, tokenAddresses: {
    [symbol: string]: string;
}, aTokenNamePrefix: string, stableDebtTokenNamePrefix: string, variableDebtTokenNamePrefix: string, symbolPrefix: string, admin: tEthereumAddress, treasuryAddress: tEthereumAddress, incentivesController: tEthereumAddress) => Promise<void>;
export declare const getPairsTokenAggregator: (allAssetsAddresses: {
    [tokenSymbol: string]: string;
}, aggregatorsAddresses: {
    [tokenSymbol: string]: string;
}) => [string[], string[]];
export declare const configureReservesByHelper: (reservesParams: iMultiPoolsAssets<IReserveParams>, tokenAddresses: {
    [symbol: string]: string;
}) => Promise<void>;
export declare const addMarketToRegistry: (providerId: number, addressesProvider: tEthereumAddress) => Promise<void>;
