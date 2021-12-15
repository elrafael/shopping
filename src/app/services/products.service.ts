import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { Products } from '../mock/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getAll(search?: any): Observable<Product[]> {
    return of(Products)
  }
}
