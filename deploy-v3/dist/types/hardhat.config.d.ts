import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import "hardhat-contract-sizer";
import "hardhat-dependency-compiler";
declare const _default: {
    contractSizer: {
        alphaSort: boolean;
        runOnCompile: boolean;
        disambiguatePaths: boolean;
    };
    solidity: {
        compilers: ({
            version: string;
            settings: {
                optimizer: {
                    enabled: boolean;
                    runs: number;
                };
                evmVersion: string;
            };
        } | {
            version: string;
            settings: {
                optimizer: {
                    enabled: boolean;
                    runs: number;
                };
                evmVersion?: undefined;
            };
        })[];
    };
    typechain: {
        outDir: string;
        target: string;
    };
    networks: {
        hardhat: {
            gasPrice: string;
            initialBaseFeePerGas: string;
            blockGasLimit: number;
            throwOnTransactionFailures: boolean;
            throwOnCallFailures: boolean;
            chainId: number;
            forking: import("hardhat/types").HardhatNetworkForkingUserConfig | undefined;
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
        localhost: {
            gasPrice: string;
            initialBaseFeePerGas: string;
            blockGasLimit: number;
            throwOnTransactionFailures: boolean;
            throwOnCallFailures: boolean;
            chainId: number;
            forking: import("hardhat/types").HardhatNetworkForkingUserConfig | undefined;
            saveDeployments: boolean;
            allowUnlimitedContractSize: boolean;
            tags: string[];
            accounts: {
                mnemonic: string;
                path: string;
                initialIndex: number;
                count: number;
            } | undefined;
            url: string;
        };
        tenderly: {
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
        main: {
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
        kovan: {
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
        rinkeby: {
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
        ropsten: {
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
        polygon: {
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
        mumbai: {
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
        arbitrum: {
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
        "arbitrum-testnet": {
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
        harmony: {
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
        "harmony-testnet": {
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
        avalanche: {
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
        fuji: {
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
        fantom: {
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
        "fantom-testnet": {
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
        "optimism-testnet": {
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
        optimism: {
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
        görli: {
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
        "arbitrum-g\u00F6rli": {
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
    };
    namedAccounts: {
        deployer: {
            default: number;
        };
        aclAdmin: {
            default: number;
        };
        emergencyAdmin: {
            default: number;
        };
        poolAdmin: {
            default: number;
        };
        addressesProviderRegistryOwner: {
            default: number;
        };
        treasuryProxyAdmin: {
            default: number;
        };
        incentivesProxyAdmin: {
            default: number;
        };
        incentivesEmissionManager: {
            default: number;
        };
        incentivesRewardsVault: {
            default: number;
        };
    };
    mocha: {
        timeout: number;
    };
    dependencyCompiler: {
        paths: string[];
    };
    deterministicDeployment: {
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
    } | undefined;
    etherscan: {
        apiKey: string;
    };
};
export default _default;
