import * as data from '../services/data';

test('data method should update entry', async () => {
    const wish = {
        id: '1',
        name: 'mock-test-updated',
        description: 'for test purposes'
    };

    const res = data.updateWish(wish)

    expect(res.name).toBe('mock-test-updated');
});
