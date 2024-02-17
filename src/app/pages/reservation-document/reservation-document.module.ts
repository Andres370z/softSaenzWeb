import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationDocumentRoutingModule } from './reservation-document-routing.module';
import { ReservationDocumentComponent } from './reservation-document.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ReservationDocumentComponent
  ],
  imports: [
    CommonModule,
    ReservationDocumentRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReservationDocumentModule { }
