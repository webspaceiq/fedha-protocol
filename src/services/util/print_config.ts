import { IsService, IServiceContext } from "@webspaceiq/ts-service-objects";
import { DeployServiceContext } from "../../model/deploy";

@IsService()
export class PrintDBDataService {

    public static serviceName = 'PrintDBDataService';

    async execute(context: IServiceContext<DeployServiceContext>): Promise<void> {
        let { hre, db } = context.data;
        console.log(db.data);
    }
}
export const PrintDBDataServiceInfo = {
    serviceName: PrintDBDataService.serviceName,
    serviceContructor: PrintDBDataService
};