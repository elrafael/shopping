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
import { StoreModule } from '@ngrx/store';
import { ShopReducer } from 'src/reducer';
import { EffectsModule } from '@ngrx/effects';
import { ShopEffects } from 'src/effects';

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
    StoreModule.forRoot( { shop: ShopReducer }),
    EffectsModule.forRoot([ShopEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
