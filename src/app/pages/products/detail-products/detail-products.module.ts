import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailProductsRoutingModule } from './detail-products-routing.module';
import { DetailProductsComponent } from './detail-products.component';
import { LightgalleryModule } from 'lightgallery/angular/13';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    DetailProductsComponent
  ],
  imports: [
    CommonModule,
    DetailProductsRoutingModule,
    LightgalleryModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class DetailProductsModule { }
