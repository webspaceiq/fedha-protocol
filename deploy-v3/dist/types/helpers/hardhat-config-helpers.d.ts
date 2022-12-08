import { HardhatNetworkForkingUserConfig } from "hardhat/types";
import { iParamsPerNetwork, eNetwork } from "./types";
export declare const DEFAULT_BLOCK_GAS_LIMIT = 12450000;
export declare const DEFAULT_GAS_PRICE = 8000000000;
export declare const INFURA_KEY: string;
export declare const ALCHEMY_KEY: string;
export declare const TENDERLY_FORK_ID: string;
export declare const FORK: eNetwork;
export declare const FORK_BLOCK_NUMBER: number;
export declare const getAlchemyKey: (net: eNetwork) => string;
export declare const NETWORKS_RPC_URL: iParamsPerNetwork<string>;
export declare const LIVE_NETWORKS: iParamsPerNetwork<boolean>;
export declare const buildForkConfig: () => HardhatNetworkForkingUserConfig | undefined;
export declare const loadTasks: (taskFolders: string[]) => void;
export declare const getCommonNetworkConfig: (networkName: eNetwork, chainId?: number) => {
    live: boolean;
    accounts?: {
        mnemonic: string;
        path: string;
        initialIndex: number;
        count: number;
    } | undefined;
    url: string;
    blockGasLimit: number;
    chainId: number | undefined;
    gasPrice: string | number | undefined;
};
export declare const hardhatNetworkSettings: {
    gasPrice: string;
    initialBaseFeePerGas: string;
    blockGasLimit: number;
    throwOnTransactionFailures: boolean;
    throwOnCallFailures: boolean;
    chainId: number;
    forking: HardhatNetworkForkingUserConfig | undefined;
    saveDeployments: boolean;
    allowUnlimitedContractSize: boolean;
    tags: string[];
    accounts: {
        mnemonic: string;
        path: string;
        initialIndex: number;
        count: number;
    } | undefined;
};
export declare const DETERMINISTIC_FACTORIES: {
    "1": {
        funding: string;
        deployer: string;
        factory: string;
        signedTx: string;
    };
    "10": {
        funding: string;
        deployer: string;
        factory: string;
        signedTx: string;
    };
    "137": {
        funding: string;
        deployer: string;
        factory: string;
        signedTx: string;
    };
    "250": {
        funding: string;
        deployer: string;
        factory: string;
        signedTx: string;
    };
    "31337": {
        funding: string;
        deployer: string;
        factory: string;
        signedTx: string;
    };
    "42161": {
        funding: string;
        deployer: string;
        factory: string;
        signedTx: string;
    };
    "43114": {
        funding: string;
        deployer: string;
        factory: string;
        signedTx: string;
    };
    "1666600000": {
        funding: string;
        deployer: string;
        factory: string;
        signedTx: string;
    };
};
export declare const DETERMINISTIC_DEPLOYMENT: boolean | null;
export declare const ETHERSCAN_KEY: string;
