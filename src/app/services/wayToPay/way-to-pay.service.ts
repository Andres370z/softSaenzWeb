import { Injectable } from '@angular/core';
import { RoutersLink } from 'src/app/models/router';
import { HttpsService } from '../https.service';

@Injectable({
  providedIn: 'root'
})
export class WayToPayService {

  constructor(
    private registeresquest: HttpsService,
  ) { }

  create(inform:any){
    return  this.registeresquest.POST(RoutersLink.wayToPay, inform)
  }

  getWayToPay(){
    return  this.registeresquest.GET(RoutersLink.wayToPay)
  }
}
