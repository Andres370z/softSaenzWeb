import { Injectable } from '@angular/core';
import { RoutersLink } from 'src/app/models/router';
import { HttpsService } from '../https.service';

@Injectable({
  providedIn: 'root'
})
export class BillsPaidService {

  constructor(
    private registeresquest: HttpsService,
  ) { }

  create(inform:any){
    return  this.registeresquest.POST(RoutersLink.billsPaid, inform)
  }

  getBillsPaid(item:number){
    return  this.registeresquest.GET(RoutersLink.bookingConsult+item)
  }

  getBillsPaidFull(item:string){
    return  this.registeresquest.GET(RoutersLink.billsPaid+item)
  }
  
  getBookingAdmin(item:string){
    return  this.registeresquest.GET(RoutersLink.bookingAdmin+item)
  }
  getBillsPaidAdmin(item:string){
    return  this.registeresquest.GET(RoutersLink.billsPaidAdmin+item)
  }
}
