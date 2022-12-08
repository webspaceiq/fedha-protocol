import { ethers } from "hardhat";
import { BigNumber, Contract } from "ethers";
import {
  expandTo18Decimals,
} from "../test/uniswap/shared/utilities";

import { UniswapV2Pair } from "../typechain-types";

async function main() {
    const [wallet] = await ethers.getSigners();
    const token = await ethers.getContractFactory("FedhaERC20Token");

    // deploy tokens
    const tokenA = await token.deploy("Naira C", "NGNC", expandTo18Decimals(10000));
    const tokenB = await token.deploy("Naira B", "NGNB", expandTo18Decimals(10000));
    await tokenB.deployed();

    const weth = await ethers.getContractFactory("WETH9");
    const WETH = await weth.deploy();
    await WETH.deployed();

    const erc20 = await ethers.getContractFactory("UniswapTestERC20");
    const WETHPartner = await erc20.deploy(expandTo18Decimals(10000));
    await WETHPartner.deployed();

    // deploy V2
    const v2factory = await ethers.getContractFactory("UniswapV2Factory");
    const factoryV2 = await v2factory.deploy(wallet.address);
    await factoryV2.deployed();

    const routerEmit = await ethers.getContractFactory("RouterEventEmitter");

    const RouterEmit = await routerEmit.deploy();
    await RouterEmit.deployed();

    // deploy routers
    const router = await ethers.getContractFactory("UniswapV2Router");
    const router02 = await router.deploy(factoryV2.address, WETH.address);
    await router02.deployed();

    // initialize V2
    await factoryV2.createPair(tokenA.address, tokenB.address);
    const pairAddress = await factoryV2.getPair(tokenA.address, tokenB.address);
    const pairFactory = await ethers.getContractFactory("UniswapV2Pair");
    const pair = new Contract(
        pairAddress,
        pairFactory.interface,
        wallet
    ) as UniswapV2Pair;

    const token0Address = await pair.token0();
    const token0 = tokenA.address === token0Address ? tokenA : tokenB;
    const token1 = tokenA.address === token0Address ? tokenB : tokenA;

    await factoryV2.createPair(WETH.address, WETHPartner.address);
    const WETHPairAddress = await factoryV2.getPair(
        WETH.address,
        WETHPartner.address
    );

    const wethPair = new Contract(
        WETHPairAddress,
        pairFactory.interface,
        wallet
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
