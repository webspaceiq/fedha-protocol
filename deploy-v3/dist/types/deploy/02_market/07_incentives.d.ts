import { DeployFunction } from "hardhat-deploy/types";
/**
 * @notice An incentives proxy can be deployed per network or per market.
 * You need to take care to upgrade the incentives proxy to the desired implementation,
 * following the IncentivesController interface to be compatible with ATokens or Debt Tokens.
 */
declare const func: DeployFunction;
export default func;
