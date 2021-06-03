import { Context } from '@azure/functions';
import * as data from './data';

async function getWishList(Context) {
  try {
    const wishList = data.getWishList();
    Context.res = {
      status: 200,
      wishList
    };
  } catch (error) {
    Context.res = {
      status: 500,
      error
    };
  }
}

async function postWish(Context) {
  const wish = {
    id: undefined,
    name: Context.req.body.name,
    description: Context.req.body.description
  };

  try {
    const newWish = data.addWish(wish);
    Context.res = {
      status: 201,
      newWish
    };
  } catch (error) {
    Context.res = {
      status: 500,
      error
    };
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

async function deleteWish(Context) {
  const { id } = Context.req.params;

  try {
    data.deleteWish(id);
    Context.res = {
      status: 200,
      success: 'wish successfully deleted'
    };
  } catch (error) {
    Context.res = {
      status: 500,
      error
    }
  }
}

export default { getWishList, postWish, putWish, deleteWish };
