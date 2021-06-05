import * as data from '../services/data';


test('data method should get entries', async () => {
    const res = data.getWishList();

    expect(res[0].name).toBe('mock-test');
});

