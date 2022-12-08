import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ConfigUtil } from '../util/ConfigUtil';
import { serviceExecutor } from '..';
import { execution } from '../services/execute_services';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { db } = await ConfigUtil.getInstance();
    const data = { hre, db };

    for (const serviceName of execution) {
        console.log('Executing service:', serviceName)
        await serviceExecutor.executeService({ data, serviceName });
    }
    return true;
};

export default func;
func.id = "PoolAddressesProviderRegistry";
func.tags = ["core", "registry"];