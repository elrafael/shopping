import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCart, getProducts } from 'src/app/shared/selectors';
import { Cart } from '../interfaces/cart.interface';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cart$: Observable<Cart>;

  displayedColumns: string[] = ['image', 'name', 'price', 'quantity'];
  dataSource: any

  emptyCart = false

  constructor(private readonly _store: Store) { }

  ngOnInit(): void {
    this.cart$ = this._store.select(getCart)
    this._store.select(getCart).subscribe(cart => {
      if ( cart ) {
        this.dataSource = cart.products
      } else {
        this.emptyCart = true
      }
    })
  }

}
