import { Injectable } from '@angular/core';
import { HttpsService } from '../https.service';
import { RoutersLink } from 'src/app/models/router';

@Injectable({
  providedIn: 'root'
})
export class QuoteServicesService {

  constructor(
    private registeresquest: HttpsService,
  ) { }

  createQuoteServices(inform:any){
    return  this.registeresquest.POST(RoutersLink.quoteServices, inform)
  }
  getQuoteServices(item:string){
    return  this.registeresquest.GET(RoutersLink.quoteServices+'/'+item)
  }
}
