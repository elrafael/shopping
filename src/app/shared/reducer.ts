import { ActionsUnion, ActionTypes } from "./action";
import { Product } from "../interfaces/product.interface";
import { Cart, ProductsInCart } from "../interfaces/cart.interface";
export interface State {
  items?: Product[];
  cart?: Cart;
}
export const initialState: State = {
  items: [],
  cart: undefined
};
export function ShopReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.LoadSuccess:
      return {
        ...state,
        items: [...action.payload]
      };

    case ActionTypes.Add:
      let cart: Cart
      let total = 1
      let value = 0
      let quantity = 1
      const myCart = state.cart

      if ( myCart === undefined ) {
        value = action.payload.price
        const productsInCart: ProductsInCart = {
          quantity,
          product: action.payload
        }
        cart = {
          products: [productsInCart],
          value,
          discount: 0,
          isPercent: false,
          total: 1
        }
      } else {
        total = myCart.total + 1
        value = myCart.value + action.payload.price


        const find = myCart.products.find(product => product.product.id === action.payload.id)
        if ( find ) {
          quantity = find.quantity + 1
        }

        const productsInCart: ProductsInCart = {
          quantity,
          product: action.payload
        }
        const products = [ ...myCart.products, productsInCart]
        const unique = [...new Map(products.map(v => [v.product.id, v])).values()]


        cart = {
          products: unique,
          value,
          discount: 0,
          isPercent: false,
          total
        }


      }

      return {
        ...state,
        cart: cart
      };

    case ActionTypes.Remove:
      return {
        ...state,
        // cart: [...state.cart.filter((item: any) => item.id !== action.payload.id)]
        cart: [state.cart]
      };

    default:
      return { ...state };
  }
}


