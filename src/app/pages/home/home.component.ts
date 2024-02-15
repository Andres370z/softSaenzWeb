import { Component, OnDestroy, OnInit } from '@angular/core';
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
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  public userSubscription: Subscription;
  public typeProductsSubscription: Subscription;
  public typeProduct: any[] = [];
  public reservationCart: any =[];
  public totalSumTecn: number = 0
  public totalSumUsers: number = 0
  public selectList: number = 0;
  public fullData: number = 0
  public createProductsService: Subscription;
  public reservationCartService: Subscription;
  public createQualitiesService: Subscription;
  public wayToPayService: Subscription;
  public createTypeProductsService: Subscription;
  public bookingService: Subscription;
  public usersData: any;
  public api = environment.img
  constructor(
    private productDetailService: ProductsDetailsService,
    private store: Store<PagesStates>,
    private alert: AlertService,
    private localStore: LocalStoreService,
  ) { 
    this.onSubmit({
      email: Menssage.usersAuth,
      password: Menssage.passWordAuth
    })
  }
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
  onSubmit(item: any){
      this.store.dispatch(action.loadingUsers({item}));
  }
  productData: any[] = []
  ngOnInit(): void {
    this.getProductDetails()
    this.datatypeProductsSucess()
    this.getTypeProducts()
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
           console.log(data.error)
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
           console.log(data.error)
           this.alertError(data.error.message);          
         }
         if (data.typeProductsCheck == 1) {
          console.log(data)
          this.typeProduct = data.typeProducts
         }
       })
   }

   private reservationCreationCart(){
    this.reservationCartService = this.store.select('reservationCreationCart')
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
        if (data.reservationCheck == 2) {
          this.getReservationCartService()
        }
        if (data.error != null){
          this.alertError(data.error.message); 
        } 
    })
  }
  private reservationDeleteCart(){
    this.reservationCartService = this.store.select('reservationDeleteCart')
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
        if (data.reservationCheck == 3) {
          console.log("delete", data)
          this.totalSumTecn = 0
          this.totalSumUsers = 0
          this.fullData  = 0  
          this.getReservationCartService()
        }
        if (data.error != null){
          this.alertError(data.error.message); 
        } 
    })
  }
  
  private dataCreateBookingSucess(){
    this.createProductsService = this.store.select('booking')
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
        if (data.bookingCheck == 2) {
          this.saveAccessDetail(data.booking)
        }
        if (data.error != null){
          this.alertError(data.error.message); 
        }
    })
    this.dataCreateBookingDetailSucess()
  }
  private dataCreateBookingDetailSucess(){
    this.createProductsService = this.store.select('bookingDetailCreation')
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
        if (data.bookingCheck == 8) {
          this.deleteReservationCartService()
          let pagination = {
            idQualities:"",
            idTypeProducts:"",
            buscar:""
          }
          this.totalSumTecn = 0
          this.totalSumUsers = 0
          this.fullData  = 0 

        }
        if (data.error != null){
          this.alertError(data.error.message); 
        }
    })
  }
  public saveAccess(){
    if (this.selectList != 0) {
      const date = new Date()
      const dateEnd = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate()
      const timeEnd = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
      const item = {
        date: dateEnd,
        time: timeEnd,
        amount:this.fullData,
        idWayToPays:this.selectList,
        idPercentage: 2,
        idusers : this.usersData.user.id,
        idProyectsClients : this.usersData.user.idProyectsClients,
        data: this.reservationCart
      }
      this.store.dispatch(
        action.loadingCreateBooking({ item })
      );
    } else {
      this.alertError("Debes seleccionar una forma de pago"); 
    }
    
  }
  public saveAccessDetail(dataEnd: any){
    const date = new Date()
    const dateEnd = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate()
    const timeEnd = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    const item = {
      date: dateEnd,
      time: timeEnd,
      idbookings: dataEnd.id,
      idusers : this.usersData.user.id,
      idProyectsClients : this.usersData.user.idProyectsClients,
      data: this.reservationCart
    }
    this.store.dispatch(
      action.loadingBookingAdmin({ item })
    );
  }
  public exitAcces(){
    Swal.fire({
      title: 'Estas seguro de eliminar tu carrito de reserva',
      icon: 'info',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteReservationCartService();
      } else if (result.isDenied) {
        this.alertError(Menssage.serverNull); 
      }
    })
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
   loading(){
     this.alert.loading();
   }
   stopLoading(){
     this.alert.messagefin();
   }
   alertError(description: string){
     this.alert.error(Menssage.error, description);
   }
}
