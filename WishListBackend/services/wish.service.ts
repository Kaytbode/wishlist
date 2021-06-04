import { Context } from '@azure/functions';
import * as data from './data';

async function getWishList(context: Context) {
  try {
    const wishList = data.getWishList();
    context.res = {
      status: 200,
      wishList
    };
  } catch (error) {
    context.res = {
      status: 500,
      error
    };
  }
}

async function postWish(context: Context) {
  const wish = {
    id: undefined,
    name: context.req.body.name,
    description: context.req.body.description
  };

  try {
    const newWish = data.addWish(wish);
    context.res = {
      status: 201,
      newWish
    };
  } catch (error) {
    context.res = {
      status: 500,
      error
    };
  }
}

async function putWish(context: Context) {
  const wish = {
    id: context.req.params.id,
    name: context.req.body.name,
    description: context.req.body.description
  };

  try {
    const updatedWish = data.updateWish(wish);
    context.res = {
      status: 200,
      updatedWish
    };
  } catch (error) {
    context.res = { 
      status: 500, 
      error
    };
  }
}

async function deleteWish(context: Context) {
  const { id } = context.req.params;

  try {
    data.deleteWish(id);
    context.res = {
      status: 200,
      success: 'wish successfully deleted'
    };
  } catch (error) {
    context.res = {
      status: 500,
      error
    }
  }
}

export default { getWishList, postWish, putWish, deleteWish };
