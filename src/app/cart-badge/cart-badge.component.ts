import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCartTotal } from 'src/selectors';

@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.scss']
})
export class CartBadgeComponent implements OnInit {

  public total$: Observable<number>;

  constructor(private readonly _store: Store) {}

  ngOnInit(): void {
    this.total$ = this._store.select(getCartTotal)
  }

}
