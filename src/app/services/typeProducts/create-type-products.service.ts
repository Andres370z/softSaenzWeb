import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpsService } from '../https.service';
import { LocalStoreService } from '../utility/local-store.service';
import { AlertService } from '../utility/alert.service';
import { TypeProducts } from 'src/app/models/typeProducts';
import { RoutersLink } from 'src/app/models/router';
@Injectable({
  providedIn: 'root'
})
export class CreateTypeProductsService {

  constructor(
    private registeresquest: HttpsService,
    private route: Router, 
    private localStore: LocalStoreService,
    private alert: AlertService
  ) { }
  userRegister: TypeProducts[] = [
    { name: '', id: 0}
  ]

  create(inform:any){
    return  this.registeresquest.POST(RoutersLink.typeProducts, inform)
  }

  getTypeProducts(){
    return  this.registeresquest.GET(RoutersLink.typeProducts)
  }

  getUsers(){
    return this.userRegister.slice()
  }
}
