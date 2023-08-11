import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyServicesRoutingModule } from './my-services-routing.module';
import { MyServicesComponent } from './my-services.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [MyServicesComponent],
  imports: [
    CommonModule,
    MyServicesRoutingModule,
    MatIconModule
  ]
})
export class MyServicesModule { }
