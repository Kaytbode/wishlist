import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { wishService } from '../services';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    await wishService.getWishList(context);
};

export default httpTrigger;