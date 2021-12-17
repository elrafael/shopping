import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./reducer";

export const getState = createFeatureSelector<State>('shop');
export const getCart = createSelector(getState, state => state.cart)
export const getCartTotal = createSelector(getState, state => (state.cart) ? state.cart.total : 0)
export const getProducts = createSelector(getState, state => state.items)
