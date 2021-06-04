import { Context } from '@azure/functions';
import * as data from './data';
import validateInput from './validate';

async function getWishList(context: Context) {
  try {
    const wishes = data.getWishList();

    context.done(null, {body: { status: 200, wishes }});
   
  } catch (error) {
    context.done(null, {body: { status: 500, error: `${error.name}: ${error.message}` }}); 
  }
}

async function postWish(context: Context) {
  const wish = {
    id: undefined,
    name: context.req.body.name,
    description: context.req.body.description
  };

  try {
    const validated = validateInput(wish);

    if(!validated) {
      throw new Error('Expression not permitted');
    }

    const newWish = data.addWish(wish);

    context.done(null, {body: { status: 201, newWish }});
    
  } catch (error) {
    context.done(null, {body: { status: 500, error: `${error.name}: ${error.message}` }}); 
  }
}

async function putWish(context: Context) {
  const wish = {
    id: context.req.params.id,
    name: context.req.body.name,
    description: context.req.body.description
  };

  try {
    const validated = validateInput(wish);

    if(!validated) {
      throw new Error('Expression not permitted');
    }

    const updatedWish = data.updateWish(wish);

    context.done(null, {body: { status: 200, updatedWish }});
  
  } catch (error) {

    context.done(null, {body: { status: 500, error: `${error.name}: ${error.message}` }});
  }
}

async function deleteWish(context: Context) {
  const { id } = context.req.params;

  try {
    data.deleteWish(id);

    context.done(null, {body: { status: 200, success: 'wish successfully deleted' }});
  } catch (error) {
    context.done(null, {body: { status: 500, error: `${error.name}: ${error.message}` }});
  }
}

export default { getWishList, postWish, putWish, deleteWish };
