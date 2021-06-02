import * as data from '../services/data';
import { Context } from '@azure/functions';
import httpTrigger from './index';

test('data method should delete entry and return true', async () => {
    const id = '1';

    const res = data.deleteWish(id)

    expect(res).toBe(true);
});

test('data method should return true even if entry not found', async () => {
    const id = '2';

    const res = data.deleteWish(id)

    expect(res).toBe(true);
});

test('Context object parameters are accessible', async () => {
    let context: Context;

    context = { 
        req : { params: {id: '1'} }
    };

    expect(context.req.params.id).toBe('1');
});

test('Returns 200 when entry is deleted', async () => {
    let context: Context;

    context = { 
        req : { params: {id: '1'} },
        res:  { status: 200 }
    };

    await httpTrigger(context);

    expect(context.res.status).toBe(200);
});

test('Returns 200 if entry is absent', async () => {
    let context: Context;

    context = { 
        req : { params: {id: '2'} },
        res:  { }
    };

    await httpTrigger(context);

    expect(context.res.status).toBe(200);
});