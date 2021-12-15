import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCart, getProducts } from 'src/selectors';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cart$: Observable<Product[]>;

  constructor(private readonly _store: Store) { }

  ngOnInit(): void {
    this.cart$ = this._store.select(getCart)
  }

}