import { DeployFunction } from "hardhat-deploy/types";
/**
 * @notice A treasury proxy can be deployed per network or per market.
 * You need to take care to upgrade this proxy to the desired implementation.
 */
declare const func: DeployFunction;
export default func;
