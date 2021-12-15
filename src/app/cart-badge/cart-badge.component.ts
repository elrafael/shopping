import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getCart } from 'src/selectors';
import { Product } from '../interfaces/product.interface';
// import { getCartNumber, getSearchResults } from 'src/selectors';

@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.scss']
})
export class CartBadgeComponent implements OnInit {

  public items: Product[] = [];

  constructor(private readonly _store: Store) {}

  ngOnInit(): void {
    this._store.select(getCart).subscribe((data: any) => {
      this.items = data
    })
  }

}
