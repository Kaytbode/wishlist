import * as data from '../services/data';

test('data method should add new entry', async () => {
    const wish = {
        name: 'post-test',
        description: 'confirming api post route'
    }

    const res = data.addWish(wish)

    expect(res.id).toBe('wish-post-test');
});

