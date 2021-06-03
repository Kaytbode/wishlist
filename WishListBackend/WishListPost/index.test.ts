import * as data from '../services/data';
import { Context } from '@azure/functions';
import httpTrigger from './index';

test('data method should add new entry', async () => {
    const wish = {
        name: 'post-test',
        description: 'confirming api post route'
    }

    const res = data.addWish(wish)

    expect(res.id).toBe('wish-post-test');
});

test('Adds entry and returns status code: 201', async () => {
    let context: Context;

    context = { 
        req : { body: {name: 'post-test', description: 'confirming api post route'} },
        res:  { }
    } as unknown as Context;

    await httpTrigger(context);

    expect(context.res.status).toBe(201);
});
