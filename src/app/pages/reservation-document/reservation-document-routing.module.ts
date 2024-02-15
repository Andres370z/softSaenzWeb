import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationDocumentComponent } from './reservation-document.component';

const routes: Routes = [{ path: '', component: ReservationDocumentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationDocumentRoutingModule { }
