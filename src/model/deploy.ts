import { DeployOptions, DeployResult } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Database } from "newtondb";
import { ConfigurationDB } from "./config";

export interface DeployServiceContext {
    db: Database<ConfigurationDB>;
    hre: HardhatRuntimeEnvironment;
}