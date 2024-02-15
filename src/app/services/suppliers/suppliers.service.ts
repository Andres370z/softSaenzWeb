import { Injectable } from '@angular/core';
import { RoutersLink } from 'src/app/models/router';
import { HttpsService } from '../https.service';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor(
    private registeresquest: HttpsService,
  ) { }

  createSupplier(inform:any){
    return  this.registeresquest.POST(RoutersLink.supplier, inform)
  }
  getSupplier(item:string){
    return  this.registeresquest.GET(RoutersLink.supplier+item)
  }
  editSupplier(item:number, list:any){
    return  this.registeresquest.PUT(RoutersLink.supplier+'/'+item, list)
  }

  getSupplierPagination(item:string){
    return  this.registeresquest.GET(RoutersLink.supplierPagination+item)
  }
  
}
