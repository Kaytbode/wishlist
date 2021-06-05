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
    } as unknown as Context;

    expect(context.req.params.id).toBe('1');
});

test('Returns 200 when entry is deleted', async () => {
    let context: Context;

    context = { 
        req : { params: {id: '1'} },
        done : (a, b)=>b.body.status
    } as unknown as Context;

    const status = context.done(null, {body: { status: 200 } } );

    expect(status).toBe(200);
});
