import { SignerWithAddress, tEthereumAddress } from "../types";
export declare const impersonateAddress: (address: tEthereumAddress) => Promise<SignerWithAddress>;
export declare const impersonateAddresses: (addresses: tEthereumAddress[]) => Promise<SignerWithAddress[]>;
export declare const usingTenderly: () => boolean;
