import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "./reducer";

export const getState = createFeatureSelector<State>('shop');
export const getCart = createSelector(getState, state => state.cart)
export const getCartTotal = createSelector(getState, state => state.cart.length)
export const getProducts = createSelector(getState, state => state.items)