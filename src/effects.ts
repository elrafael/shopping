import { Injectable } from "@angular/core";
import { act, Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import { ActionTypes } from "./action";
import { ProductsService } from "./app/services/products.service";


@Injectable()
export class ShopEffects {

  // @Effect()
  // loadProduct$ = this.actions$.pipe(
  //   ofType(SEARCH),
  //   map((action: SearchAction) => action.payload),
  //   switchMap(({ searchQuery }) => this.productService.getProducts(searchQuery)),
  //   map(searchResults => new SearchSuccessAction({ searchResults }))
  // )
  loadProducts$ = createEffect(() => // atualmente
    this.actions$.pipe(
      ofType(ActionTypes.LoadItems),
      mergeMap(() => this.productService.getAll()
      .pipe(
        map(products => ({ type: ActionTypes.LoadSuccess, payload: products })),
        catchError(() => EMPTY)
      ))
    )
  )

  constructor(
    private readonly productService: ProductsService,
    private actions$: Actions
  ) {

  }
}
