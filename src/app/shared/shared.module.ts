import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatBadgeModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule
  ],
  exports: [
    FlexLayoutModule,
    MatToolbarModule,
    MatBadgeModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class SharedModule { }
