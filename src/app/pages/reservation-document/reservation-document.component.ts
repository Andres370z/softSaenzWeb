import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Menssage, RoutersLink } from 'src/app/models/router';
import { AlertService } from 'src/app/services/utility/alert.service';
import { LocalStoreService } from 'src/app/services/utility/local-store.service';
import { PagesStates } from 'src/store/interface/pagesInterface';
import Swal from 'sweetalert2';
import * as action from 'src/store/actions';
@Component({
  selector: 'app-reservation-document',
  templateUrl: './reservation-document.component.html',
  styleUrls: ['./reservation-document.component.css']
})
export class ReservationDocumentComponent implements OnInit, OnDestroy {
  public usersData: any;
  public createProductsService: Subscription;
  public reservationCartService: Subscription;
  public fullData: number = 0
  public cardList: any;
  public idUsers:number;
  public userCreation: boolean = false;
  public typeProducts: any=[];
  public wayToPay: any=[];
  public qualities: any=[];
  public form: FormGroup;
  public reservationCart: any =[];
  public totalSumTecn: number = 0
  public totalSumUsers: number = 0
  public selectList: number = 3;
  public userSubscription: Subscription;
  constructor(
    private localStore: LocalStoreService,
    private router: Router,
    public formBuilder: FormBuilder,
    private alert: AlertService,
    private store: Store<PagesStates>
  ) {
    this.usersData = this.localStore.getSuccessLogin();
  }
  ngOnDestroy(): void {
    this.createProductsService.unsubscribe();
    this.reservationCartService.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.initial()
    this.dataCreateBookingSucess()
    this.reservationCreationCart()
    this.dataUsersSucess()
    this.reservationDeleteCart()
    this.getReservationCartService()
  }
  public initial(){
    this.form = this.formBuilder.group({
      name: [Menssage.empty, Validators.compose([
        Validators.required,
      ])],
      surname: [Menssage.empty, Validators.compose([
        Validators.required,
      ])],
      telephone: [Menssage.empty, Validators.compose([
        Validators.required,
      ])],
      identificationCard: [Menssage.empty, Validators.compose([
        Validators.required,
      ])],
      email: [Menssage.empty, Validators.compose([
        Validators.required,
        Validators.pattern(Menssage.valiEmail),
        Validators.minLength(5)
      ])],
      shippingAddress: [Menssage.empty, Validators.compose([
        Validators.required,
      ])],
      password: [Menssage.empty],
      passwordVerifi: [Menssage.empty],
      idrol: [Menssage.idRolAdminClientsVigilant],
      idProyectsClients: [this.alert.convertTextDecrypt(this.usersData.authorisation.idProyectsClients), Validators.compose([
        Validators.required,
      ])],
    });
  }
  private dataUsersSucess(){
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
           this.localStore.setSuccessLogin(data.auth)
           this.idUsers = Number(this.alert.convertTextDecrypt(this.usersData.authorisation.id))
           this.usersData = this.localStore.getSuccessLogin();
           this.form.reset();
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
  private reservationCreationCart(){
    this.reservationCartService = this.store.select('reservationCart')
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
      if (data.reservationCheck == 1) {
        this.reservationCart = data.reservationCart
        this.calculateSum(data.reservationCart)
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
          this.totalSumTecn = 0
          this.totalSumUsers = 0
          this.fullData  = 0  
          this.routeList()
        }
        if (data.error != null){
          this.alertError(data.error.message); 
        } 
    })
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
        idusers : this.idUsers  == 0 ? this.alert.convertTextDecrypt(this.usersData.authorisation.id): this.idUsers,
        idProyectsClients : this.alert.convertTextDecrypt(this.usersData.authorisation.idProyectsClients),
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
      idusers : this.alert.convertTextDecrypt(this.usersData.authorisation.id),
      idProyectsClients : this.alert.convertTextDecrypt(this.usersData.authorisation.idProyectsClients),
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

  public getReservationCartService(){
    console.log("listo")
    var item = Number(this.alert.convertTextDecrypt(this.usersData.authorisation.idProyectsClients));
    this.store.dispatch(
      action.loadingreservationCart({ item })
    );
  }

  public deleteReservationCartService(){
    var item = this.alert.convertTextDecrypt(this.usersData.authorisation.idProyectsClients)
    this.store.dispatch(
      action.loadingDeleteReservationCart({ item })
    );
  }
  public routeList(){
    this.router.navigate(['/pages/products']);
  }
  public onSubmit(item: any){
    let verifyDataList = this.verifyData(item)
    if (this.valid(verifyDataList)) {
        this.store.dispatch(action.loadingUsers({item: verifyDataList}));
    }
  }
  private verifyData(item: any) : any{
    if (item.password === Menssage.empty) {
      item.password = 'userInactive'
    }
    if (item.passwordVerifi === Menssage.empty) {
      item.passwordVerifi = 'userInactive'
    }
    return item;
  }
  private valid(item: any): boolean{
    let valid = true
    if (item.name === Menssage.empty) {
      this.alert.error(Menssage.error, Menssage.name);
      valid = false
    }
    if (item.surname === Menssage.empty) {
      this.alert.error(Menssage.error, Menssage.surname);
      valid = false
    }
    if (item.telephone === Menssage.empty) {
      this.alert.error(Menssage.error, Menssage.telephone);
      valid = false
    }
    if (item.identificationCard === Menssage.empty) {
      this.alert.error(Menssage.error, Menssage.identificationCard);
      valid = false
    }
    if (item.email === Menssage.empty) {
      this.alert.error(Menssage.error, Menssage.email);
      valid = false
    }
    if (item.shippingAddress === Menssage.empty) {
      this.alert.error(Menssage.error, Menssage.shippingAddress);
      valid = false
    }
    if (item.idrol === Menssage.empty) {
      this.alert.error(Menssage.error, Menssage.idrol);
      valid = false
    }
    if (item.idProyectsClients === Menssage.empty) {
      this.alert.error(Menssage.error, Menssage.idProyectsClients);
      valid = false
    }
    
    return valid
  }
   private loading(){
     this.alert.loading();
   }
   private stopLoading(){
     this.alert.messagefin();
   }
   private alertError(description: string){
     this.alert.error(Menssage.error, description);
   }
}
