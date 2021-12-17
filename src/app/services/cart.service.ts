import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cart } from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart: Cart

  constructor() { }

  initCart(): Observable<Cart> {
    this.cart = {
      products: undefined,
      discount: 0,
      isPercent: false,
      total: 0,
      value: 0
    }

    return of(this.cart)
  }
}
