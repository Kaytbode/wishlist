import { Context } from '@azure/functions';
import * as data from './data';

async function getWishList({ req, res }: Context) {
  try {
    const wishList = data.getWishList();
    res.status(200).json(wishList);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function postWish({ req, res }: Context) {
  const wish = {
    id: undefined,
    name: req.body.name,
    description: req.body.description
  };

  try {
    const newWish = data.addWish(wish);
    res.status(201).json(newWish);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function putWish({ req, res }: Context) {
  const wish = {
    id: req.params.id,
    name: req.body.name,
    description: req.body.description
  };

  try {
    const updatedWish = data.updateWish(wish);
    res.status(200).json(updatedWish);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteWish({ req, res }: Context) {
  const { id } = req.params;

  try {
    data.deleteWish(id);
    res.status(200).json({});
  } catch (error) {
    res.status(500).send(error);
  }
}

export default { getWishList, postWish, putWish, deleteWish };
