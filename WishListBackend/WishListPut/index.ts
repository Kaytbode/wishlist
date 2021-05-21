import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { wishService } from '../services';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    await wishService.putWish(context);
};

export default httpTrigger;