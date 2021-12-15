import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CartBadgeComponent } from './cart-badge/cart-badge.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { StoreModule } from '@ngrx/store';
import { ShopReducer } from 'src/app/shared/reducer';
import { EffectsModule } from '@ngrx/effects';
import { ShopEffects } from 'src/app/shared/effects';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    CartBadgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatBadgeModule,
    MatIconModule,
    MatTableModule,
    StoreModule.forRoot( { shop: ShopReducer }),
    EffectsModule.forRoot([ShopEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
