import { Injectable } from '@angular/core';
import { RoutersLink } from 'src/app/models/router';
import { HttpsService } from '../https.service';

@Injectable({
  providedIn: 'root'
})
export class WarrantyService {

  constructor(
    private registeresquest: HttpsService,
  ) { }

  create(inform:any){
    return  this.registeresquest.POST(RoutersLink.warranty, inform)
  }

  getWarranty(item:number){
    return  this.registeresquest.GET(RoutersLink.bookingConsult+item)
  }

  getWarrantyFull(item:string){
    return  this.registeresquest.GET(RoutersLink.warranty+item)
  }
}
