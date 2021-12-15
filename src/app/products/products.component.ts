import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddToCart, GetItems, RemoveFromCart } from 'src/app/shared/action';
import { getProducts } from 'src/app/shared/selectors';
import { Product } from '../interfaces/product.interface';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products$: Observable<Product[]>;

  constructor(private readonly _store: Store ) { }

  ngOnInit(): void {
    this._store.dispatch(
      new GetItems()
    )

    this.products$ = this._store.select(getProducts);

  }

  public addToCart(product: Product) {
    this._store.dispatch(
      new AddToCart(product)
    )
  }

  public removeFromCart(product: Product) {
    this._store.dispatch(
      new RemoveFromCart(product)
    )
  }

}
