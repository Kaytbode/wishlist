import * as data from '../services/data';
import { Context } from '@azure/functions';
import httpTrigger from './index';

test('data method should get entries', async () => {
    const res = data.getWishList();

    expect(res[0].name).toBe('mock-test');
});

test('Retrieves list and returns status code: 200', async () => {
    let context: Context;

    context = { 
        req : { },
        res:  { }
    } as unknown as Context;

    await httpTrigger(context);

    expect(context.res.status).toBe(200);
});
