import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";

const config: HardhatUserConfig = {
    networks: {
        hardhat: {
            blockGasLimit: 30000000,
        },
    },
    solidity: {
        compilers: [
            {
                version: "0.8.4",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 9999,
                    },
                    metadata: {
                        bytecodeHash: "none",
                    },
                },
            },
            {
                version: "0.8.10",
                settings: {},
            },
        ],
    },
    typechain: {
        outDir: "typechain-types",
        target: "ethers-v5",
    },
};

export default config;
