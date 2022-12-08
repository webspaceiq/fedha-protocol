import { tEthereumAddress } from "../types";
export declare const isValidAddress: (value: tEthereumAddress) => boolean;
export declare const chunk: <T>(arr: T[], chunkSize: number) => T[][];
export declare const filterMapBy: (raw: {
    [key: string]: any;
}, fn: (key: string) => boolean) => {
    [key: string]: any;
};
export declare const isEqualAddress: (a: tEthereumAddress, b: tEthereumAddress) => boolean;
export declare const containsSameMembers: (arr1: any[], arr2: any[]) => boolean;
