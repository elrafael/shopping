import { ActionsUnion, ActionTypes } from "./action";
import { Product } from "../interfaces/product.interface";
import { Products } from "../mock/products";

export interface State {
  items?: Product[];
  cart?: Product[];
}
export const initialState: State = {
  items: [],
  cart: []
};
export function ShopReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.LoadSuccess:
      return {
        ...state,
        items: [...action.payload]
      };

    case ActionTypes.Add:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    case ActionTypes.Remove:
      return {
        ...state,
        cart: [...state.cart.filter((item: any) => item.id !== action.payload.id)]
      };

    default:
      return { ...state };
  }
}


