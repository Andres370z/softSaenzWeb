import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyServicesDetailsRoutingModule } from './my-services-details-routing.module';
import { MyServicesDetailsComponent } from './my-services-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [MyServicesDetailsComponent],
  imports: [
    CommonModule,
    MyServicesDetailsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule
  ]
})
export class MyServicesDetailsModule { }
