import { cloneDeep, uniqBy } from 'lodash';
import { Cart } from '../interfaces/cart.interface';


export function cloneObj(obj: any) {
  return cloneDeep(obj);
}

export function formatCart(cart: Cart) {
  cart.products = uniqBy(cart.products, e => {
    return e.product.id
  })
  const moreThanOne = cart.products.filter(cart => cart.quantity > 0)
  cart.products = moreThanOne
  cart.total = cart.products.length
  return cart
}
