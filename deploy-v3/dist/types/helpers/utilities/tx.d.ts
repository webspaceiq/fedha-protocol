import { Contract, ContractTransaction } from "ethers";
import { tEthereumAddress } from "../types";
import { Libraries } from "hardhat-deploy/types";
export declare const waitForTx: (tx: ContractTransaction) => Promise<import("ethers").ContractReceipt>;
export declare const getCurrentBlock: () => Promise<number>;
export declare const evmSnapshot: () => Promise<any>;
export declare const evmRevert: (id: string) => Promise<any>;
export declare const advanceBlock: (timestamp: number) => Promise<any>;
export declare const increaseTime: (secondsToIncrease: number) => Promise<void>;
export declare const advanceTimeAndBlock: (forwardTime: number) => Promise<void>;
export declare const parseUnitsFromToken: (tokenAddress: tEthereumAddress, amount: string) => Promise<import("ethers").BigNumber>;
export declare const waitDeployment: <ContractType extends Contract>(instance: ContractType) => Promise<ContractType>;
export declare const getBlockTimestamp: (blockNumber?: number) => Promise<number>;
export declare const deployContract: <ContractType extends Contract>(contract: string, args?: (string | string[])[], libraries?: Libraries | undefined, id?: string) => Promise<ContractType>;
export declare const getContract: <ContractType extends Contract>(id: string, address?: tEthereumAddress) => Promise<ContractType>;
interface AccountItem {
    name: string;
    account: string;
    balance: string;
}
export declare const getWalletBalances: () => Promise<AccountItem[]>;
export declare const getProxyAdminBySlot: (proxyAddress: tEthereumAddress) => Promise<string>;
export declare const getAddressFromJson: (network: string, id: string) => Promise<any>;
export {};
