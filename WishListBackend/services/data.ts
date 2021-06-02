const data = {
  wishlist: [
    {
      id: '1',
      name: 'mock-test',
      description: 'for test purposes'
    }
  ]
};

const addWish = wish => {
  wish.id = `wish-${wish.name}`;
  data.wishlist.push(wish);
  return wish;
};

const updateWish = wish => {
  const index = data.wishlist.findIndex(v => v.id === wish.id);
  data.wishlist.splice(index, 1, wish);
  return wish;
};

const deleteWish = id => {
  data.wishlist = data.wishlist.filter(v => v.id !== id);
  return true;
};

const getWishList = () => {
  return data.wishlist;
};

export { addWish, updateWish, deleteWish, getWishList };
