import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpsService } from '../https.service';
import { AlertService } from '../utility/alert.service';
import { LocalStoreService } from '../utility/local-store.service';
import { RoutersLink } from 'src/app/models/router';



@Injectable({
  providedIn: 'root'
})
export class CreateProductsService {

  constructor(
    private registeresquest: HttpsService,
    private route: Router, 
    private localStore: LocalStoreService,
    private alert: AlertService
  ) { }

  create(inform:any){
    return  this.registeresquest.POST(RoutersLink.products, inform)
  }
  createGalleryProducts(inform:any){
    return  this.registeresquest.POST(RoutersLink.galleryProducts, inform)
  }
  
  createProductList(inform:any){
    return  this.registeresquest.POST(RoutersLink.productList, inform)
  }
  getProducts(item:string){
    return  this.registeresquest.GET(RoutersLink.products+item)
  }
  getProductList(item:string){
    return  this.registeresquest.GET(RoutersLink.productList+item)
  }
  getgalleryProducts(item:string){
    return  this.registeresquest.GET(RoutersLink.galleryProducts+'/'+item)
  }
  productListDetail(item:string){
    return  this.registeresquest.GET(RoutersLink.productListDetail+item)
  }
  editProducts(item:number, list:any){
    return  this.registeresquest.PUT(RoutersLink.productsUpdate+item, list)
  }
  editProductList(item:number, list:any){
    return  this.registeresquest.PUT(RoutersLink.productListUpdate+item, list)
  }
  getProductListEnd(item:string){
    return  this.registeresquest.GET(RoutersLink.productListEnd+'/'+item)
  }
  getListTypeProducts(item:number){
    return  this.registeresquest.GET(RoutersLink.getListTypeProducts+'/'+item)
  }
}
