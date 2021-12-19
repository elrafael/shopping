import { ActionsUnion, ActionTypes } from "./action";
import { Product } from "../interfaces/product.interface";
import { Cart, ProductsInCart } from "../interfaces/cart.interface";
import { cloneObj, formatCart } from "./functions";
export interface State {
  items?: Product[];
  cart?: Cart;
}
export const initialState: State = {
  items: [],
  cart: undefined
};
export function ShopReducer(state = initialState, action: ActionsUnion) {
  let stateCart = state.cart
  let myCart: Cart;
  let total = 0;
  switch (action.type) {
    case ActionTypes.LoadSuccess:
      return {
        ...state,
        items: [...action.payload]
      };

    case ActionTypes.Add:
      if ( stateCart === undefined ) {
        const productsInCart: ProductsInCart = {
          quantity: 1,
          product: action.payload
        }
        myCart = {
          products: [productsInCart],
          value: action.payload.price,
          discount: 0,
          isPercent: false,
          total: 1
        }
      } else {
        myCart = cloneObj(state.cart)

        if ( myCart.products.length === 0 ) {
          const productInCart: ProductsInCart = {
            quantity: 1,
            product: action.payload
          }
          myCart.products.push(productInCart)
        } else {
          myCart.products.map(cart => {
            if ( cart.product.id === action.payload.id) {
              cart.quantity += 1
            } else {
              const productInCart: ProductsInCart = {
                quantity: 1,
                product: action.payload
              }
              myCart.products.push(productInCart)
            }
          })
        }

        myCart.total += 1
        myCart.value += action.payload.price
      }
      myCart = formatCart(myCart)

      return {
        ...state,
        cart: myCart
      };

    case ActionTypes.Remove:
      let valueRemoved = 0
      myCart = cloneObj(state.cart)
      myCart.products.filter((item: ProductsInCart) => item.product.id !== action.payload.id).map(product => {
        valueRemoved += product.product.price * product.quantity
      })
      myCart.value = valueRemoved;
      myCart.total = (state.cart.total > 0) ? state.cart.total - 1 : 0
      myCart = formatCart(myCart)

      return {
        ...state,
        cart: myCart
      };

    case ActionTypes.IncreaseQuantity:
      myCart = cloneObj(state.cart)
      myCart.products.map(el => {
        if ( el.product.id === action.payload.id ) {
          el.quantity += 1
        }
        total += el.quantity * el.product.price
      })
      myCart.value = total
      myCart = formatCart(myCart)
      return {
        ...state,
        cart: myCart
      }
    case ActionTypes.DecreaseQuantity:
      myCart = cloneObj(state.cart)
      myCart.products.map(el => {
        if ( el.product.id === action.payload.id ) {
          el.quantity -= (el.quantity > 0 ) ? 1 : el.quantity
        }
        total += el.quantity * el.product.price
      })
      myCart.value = total
      myCart = formatCart(myCart)
      return {
        ...state,
        cart: myCart
      }
    default:
      return { ...state };
  }
}


