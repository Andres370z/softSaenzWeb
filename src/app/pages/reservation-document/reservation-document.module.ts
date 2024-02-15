import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationDocumentRoutingModule } from './reservation-document-routing.module';
import { ReservationDocumentComponent } from './reservation-document.component';


@NgModule({
  declarations: [
    ReservationDocumentComponent
  ],
  imports: [
    CommonModule,
    ReservationDocumentRoutingModule
  ]
})
export class ReservationDocumentModule { }
