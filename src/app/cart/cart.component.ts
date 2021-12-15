import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCart, getProducts } from 'src/app/shared/selectors';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cart$: Observable<Product[]>;

  displayedColumns: string[] = ['name', 'price', 'description'];
  dataSource: any

  constructor(private readonly _store: Store) { }

  ngOnInit(): void {
    this.cart$ = this._store.select(getCart)
    this._store.select(getCart).subscribe(products => {
      this.dataSource = products
    })
  }

}
