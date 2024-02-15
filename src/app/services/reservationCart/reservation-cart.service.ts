import { Injectable } from '@angular/core';
import { RoutersLink } from 'src/app/models/router';
import { HttpsService } from '../https.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationCartService {

  constructor(
    private registeresquest: HttpsService,
  ) { }

  create(inform:any){
    return  this.registeresquest.POST(RoutersLink.reservationCart, inform)
  }

  getReservationCart(item:number){
    return  this.registeresquest.GET(RoutersLink.reservationCart+'/'+item)
  }

  getReservationCartFull(item:string){
    return  this.registeresquest.GET(RoutersLink.booking+item)
  }

  deleteReservationCart(item:number){
    return  this.registeresquest.DELETE(RoutersLink.reservationCart+'/'+item)
  }
}
