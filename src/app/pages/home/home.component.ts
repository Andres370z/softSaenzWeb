import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsDetailsService } from 'src/app/services/products-details.service';
import { PagesStates } from 'src/store/interface/pagesInterface';
import * as action from '../../../store/actions';
import { Menssage } from 'src/app/models/router';
import { AlertService } from 'src/app/services/utility/alert.service';
import { LocalStoreService } from 'src/app/services/utility/local-store.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public userSubscription: Subscription;
  public typeProductsSubscription: Subscription;
  public typeProduct: any[] = [];
  public productsType: any[] = [];
  public productsTypeSoft: any[] = [];
  public reservationCart: any =[];
  public totalSumTecn: number = 0
  public totalSumUsers: number = 0
  public selectList: number = 0;
  public fullData: number = 0
  public usersData: any;
  public api = environment.img
  constructor(
    private productDetailService: ProductsDetailsService,
    private store: Store<PagesStates>,
    private alert: AlertService,
    private localStore: LocalStoreService,
    private router: Router,
    private zone: NgZone
  ) { 
    this.onSubmit({
      email: Menssage.usersAuth,
      password: Menssage.passWordAuth
    })
    this.productsType = [];
    this.productsTypeSoft = [];
  }
  ngOnDestroy(): void {
    this.typeProductsSubscription.unsubscribe();
    this.productsType = []
    this.productsTypeSoft = []
  }
  onSubmit(item: any){
      this.store.dispatch(action.loadingUsers({item}));
  }
  productData: any[] = []
  ngOnInit(): void {
    this.getProductDetails()
    this.dataUsersSucess()
    this.datatypeProductsSucess()
    this.dataProductsTypeSucess()
    this.getTypeProducts()
    this.getProductsType(4)
    this.getProductsType(12)
    
  }
  getProductDetails(){
    this.productData = this.productDetailService.productsDetails
  }
  dataUsersSucess(){
    this.userSubscription = this.store.select('auth')
       .subscribe(data =>{
         switch (data.loading) {
           case true:
             this.loading();
             break;
           case false:
             this.stopLoading();
             break;
           default:
             break;
         }
         if (data.error != null) {
           this.alertError(data.error.message);          
         }
         if (data.auth != null) {
          this.usersData = data.auth
           this.localStore.setSuccessLogin(data.auth)
         }
       })
   }

   datatypeProductsSucess(){
    this.typeProductsSubscription = this.store.select('typeProducts')
       .subscribe(data =>{
         switch (data.loading) {
           case true:
             this.loading();
             break;
           case false:
             this.stopLoading();
             break;
           default:
             break;
         }
         if (data.error != null) {
           this.alertError(data.error.message);          
         }
         if (data.typeProductsCheck == 1) {
          this.typeProduct = data.typeProducts
         }
       })
   }

   dataProductsTypeSucess(){
    this.typeProductsSubscription = this.store.select('productsTypeItem')
       .subscribe(data =>{
         switch (data.loading) {
           case true:
             this.loading();
             break;
           case false:
             this.stopLoading();
             break;
           default:
             break;
         }
         if (data.error != null) {
           this.alertError(data.error.message);          
         }
         if (data.productsTypeCheck == 2) {
          this.validTypeProducts(data.productsType)
         }
       })
  }

  public validTypeProducts(item: any[]){
    
    item.forEach(element => {
      switch (element.idTypeProducts) {
        case 4:
            this.productsType.push(element)
          break;
        case 12:
            this.productsTypeSoft.push(element)
          break;
        default:
          break;
      }
    });

  
  }

  public postReservationCartService(itemEnd: any){
    this.totalSumTecn = 0
    this.totalSumUsers = 0
    this.fullData  = 0
    if (itemEnd.amountEnd >= 1) {
    const item = {
      amount: 1,
      idProductLists: itemEnd.idProductLists,
      idusers : this.usersData.user.id,
      idProyectsClients : this.usersData.user.idProyectsClients,
    }
    this.store.dispatch(
      action.loadingCreateReservationCart({ item })
    );
      
    } else {
      this.alertError("Producto no disponible"); 
    }
  }

  public getReservationCartService(){
    console.log("listo")
    var item = this.usersData.user.idProyectsClients
    this.store.dispatch(
      action.loadingreservationCart({ item })
    );
  }

  public deleteReservationCartService(){
    var item = this.usersData.user.idProyectsClients;
    this.store.dispatch(
      action.loadingDeleteReservationCart({ item })
    );
  }

  public calculateSum(item: any){
    this.totalSumTecn = 0
    this.totalSumUsers = 0
    this.fullData = 0
    if (item.length != 0) {
      item.forEach(element => {
        let tecn = element.tecnPrice.replace(",", "")
        let users = element.usersPrice.replace(",", "")
        console.log("tecn "+tecn.replace(",", ""))
        console.log("users "+users.replace(",", ""))
        this.totalSumTecn += parseFloat(tecn.replace(",", ""))
        this.totalSumUsers += parseFloat(users.replace(",", ""))
        this.fullData += element.amount
      });
    }
  }
  getTypeProducts(){
    this.store.dispatch(
      action.loadingTypeProducts()
    );
  }
  getProductsType(id: number){
    this.store.dispatch(
      action.loadinggetListTypeProducts({id})
    );
  }
   loading(){
     this.alert.loading();
   }
   stopLoading(){
     this.alert.messagefin();
   }
   alertError(description: string){
     this.alert.error(Menssage.error, description);
   }
   public encrypt(id: string){
    this.router.navigate(['/pages/products/detailProducts/'+window.btoa(id)]);
   }
}
