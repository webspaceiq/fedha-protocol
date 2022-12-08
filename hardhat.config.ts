import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import 'hardhat-dependency-compiler';
import 'hardhat-deploy';

const config: HardhatUserConfig = {
    networks: {
        hardhat: {
            blockGasLimit: 30000000,
            allowUnlimitedContractSize: true,
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
        externalArtifacts: [
            'node_modules/@aave/core-v3/artifacts/contracts/**/*[!dbg].json',
            'node_modules/@aave/core-v3/artifacts/contracts/**/**/*[!dbg].json',
            'node_modules/@aave/core-v3/artifacts/contracts/**/**/**/*[!dbg].json',
            'node_modules/@aave/core-v3/artifacts/contracts/mocks/tokens/WETH9Mocked.sol/WETH9Mocked.json',
        ],
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        aclAdmin: {
            default: 0,
        },
        emergencyAdmin: {
            default: 0,
        },
        poolAdmin: {
            default: 0,
        },
        addressesProviderRegistryOwner: {
            default: 0,
        },
        treasuryProxyAdmin: {
            default: 1,
        },
        incentivesProxyAdmin: {
            default: 1,
        },
        incentivesEmissionManager: {
            default: 0,
        },
        incentivesRewardsVault: {
            default: 2,
        },
    },
    external: {
      contracts: [
        {
          artifacts: './artifacts',
          deploy: './src/deploy',
        },
      ],
    },
};

export default config;
