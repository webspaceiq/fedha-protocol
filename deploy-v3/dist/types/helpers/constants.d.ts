export declare const V3_CORE_VERSION: string;
export declare const V3_PERIPHERY_VERSION: string;
export declare const PERCENTAGE_FACTOR = "10000";
export declare const HALF_PERCENTAGE = "5000";
export declare const oneEther: import("ethers").BigNumber;
export declare const oneRay: import("ethers").BigNumber;
export declare const MAX_UINT_AMOUNT = "115792089237316195423570985008687907853269984665640564039457584007913129639935";
export declare const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export declare const ONE_ADDRESS = "0x0000000000000000000000000000000000000001";
export declare const AAVE_REFERRAL = "0";
export declare const WRAPPED_NATIVE_TOKEN_PER_NETWORK: {
    [network: string]: string;
};
export declare const ZERO_BYTES_32 = "0x0000000000000000000000000000000000000000000000000000000000000000";
export declare const MOCK_CHAINLINK_AGGREGATORS_PRICES: {
    [key: string]: string;
};
export declare const chainlinkAggregatorProxy: Record<string, string>;
export declare const chainlinkEthUsdAggregatorProxy: Record<string, string>;
export declare const EMPTY_STORAGE_SLOT = "0x0000000000000000000000000000000000000000000000000000000000000000";
export declare const DEFAULT_NAMED_ACCOUNTS: {
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
export declare const GOVERNANCE_BRIDGE_EXECUTOR: {
    [key: string]: string;
};
export declare const MULTISIG_ADDRESS: {
    [key: string]: string;
};
