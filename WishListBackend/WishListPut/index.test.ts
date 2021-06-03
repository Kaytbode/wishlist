import * as data from '../services/data';
import { Context } from '@azure/functions';
import httpTrigger from './index';

test('data method should update entry', async () => {
    const wish = {
        id: '1',
        name: 'mock-test-updated',
        description: 'for test purposes'
    };

    const res = data.updateWish(wish)

    expect(res.name).toBe('mock-test-updated');
});

test('Updates entry and returns status code: 200', async () => {
    let context: Context;

    context = { 
        req : { params: {id: '1'}, body: {name: 'mock-test updated', description: 'for test purposes'} },
        res:  { }
    } as unknown as Context;

    await httpTrigger(context);

    expect(context.res.status).toBe(200);
});

