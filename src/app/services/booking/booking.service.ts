import { Injectable } from '@angular/core';
import { HttpsService } from '../https.service';
import { RoutersLink } from 'src/app/models/router';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private registeresquest: HttpsService,
  ) { }

  create(inform:any){
    return  this.registeresquest.POST(RoutersLink.booking, inform)
  }

  getbookingConsult(item:number){
    return  this.registeresquest.GET(RoutersLink.bookingConsult+item)
  }
  getbookingConsultFull(item:string){
    return  this.registeresquest.GET(RoutersLink.booking+item)
  }
  createDetail(inform:any){
    return  this.registeresquest.POST(RoutersLink.detailBooking, inform)
  }
  editBooking(item:number, list:any){
    return  this.registeresquest.PUT(RoutersLink.bookingUpdate+item, list)
  }
  getDetail(inform:number){
    return  this.registeresquest.GET(RoutersLink.detailBooking+'/'+inform)
  }
  getShow(inform:number){
    return  this.registeresquest.GET(RoutersLink.bookingShow+'/'+inform)
  }
  getDetailShow(inform:any){
    return  this.registeresquest.POST(RoutersLink.detailShow, inform)
  }
}
