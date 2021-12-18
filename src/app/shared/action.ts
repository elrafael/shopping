import { Action } from "@ngrx/store";
import { Product } from "../interfaces/product.interface";

export enum ActionTypes {
  Add = '[Product] Add to cart',
  Remove = '[Product] Remove from cart',
  LoadItems = '[Products] Load items from server',
  LoadSuccess = '[Products] Load success',
  IncreaseQuantity = '[Cart] Increase Item',
  DecreaseQuantity = '[Cart] Decrease Item'
}
export class AddToCart implements Action {
  readonly type = ActionTypes.Add;

  constructor(public payload: Product) {}
}
export class GetItems implements Action {
  readonly type = ActionTypes.LoadItems;
}

export class RemoveFromCart implements Action {
  readonly type = ActionTypes.Remove;

  constructor(public payload: Product) {}
}
export class IncreaseQuantity implements Action {
  readonly type = ActionTypes.IncreaseQuantity;

  constructor(public payload: Product) {}
}
export class DecreaseQuantity implements Action {
  readonly type = ActionTypes.DecreaseQuantity;

  constructor(public payload: Product) {}
}
export class LoadItems implements Action {
  readonly type = ActionTypes.LoadSuccess;

  constructor(public payload: Product[]) {}
}

export type ActionsUnion = AddToCart | RemoveFromCart | LoadItems | GetItems | IncreaseQuantity | DecreaseQuantity;




