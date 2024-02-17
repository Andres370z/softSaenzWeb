import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2'
import { LightGallery } from 'lightgallery/lightgallery';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { PagesStates } from 'src/store/interface/pagesInterface';
import * as products  from 'src/store/actions';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocalStoreService } from 'src/app/services/utility/local-store.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/utility/alert.service';
import { Menssage } from 'src/app/models/router';
declare var $: any;
declare var particlesJS: any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public menuItems: any[] = [];
  public menuItemsStore: any[];
  public usersData: any;
  public customerDetail: any = [];
  public api = environment.img
  public eventItems: any = [];
  public selectItems: any;
  public offset:number =  3
  public pagination : any = {
    'total' : 0,
    'current_page' : 0,
    'per_page' : 0,
    'last_page' : 0,
    'from' : 0,
    'to' : 0,
  }
  public fullData: number = 0
  public cardList: any;
  public typeProducts: any=[];
  public wayToPay: any=[];
  public qualities: any=[];
  public form: FormGroup;
  public reservationCart: any =[];
  public totalSumTecn: number = 0
  public totalSumUsers: number = 0
  public selectList: number = 0;
  public settings = {
    counter: false,
    plugins: [lgZoom],
  };
  private lightGallery!: LightGallery;
  private needRefresh = false;
  public createProductsService: Subscription;
  public reservationCartService: Subscription;
  public wayToPayService: Subscription;
  public createTypeProductsService: Subscription;
  public bookingService: Subscription;
  public qualityService: Subscription;
  constructor(private localStore: LocalStoreService,
    private router: Router,
    public formBuilder: FormBuilder,
    private alert: AlertService,
    private store: Store<PagesStates>)
     { 
      this.usersData = this.localStore.getSuccessLogin();
    }
  ngOnDestroy(): void {
    this.createProductsService.unsubscribe();
    this.reservationCartService.unsubscribe();
    this.wayToPayService.unsubscribe();
    this.createTypeProductsService.unsubscribe();
    this.bookingService.unsubscribe();
    this.qualityService.unsubscribe();
  }

  ngOnInit(): void {
    this.initial()
    this.dataCreateProductsSucess()
    this.dataCreateBookingSucess()
    this.dataTypeProductsSucess()
    this.dataQualitySucess()
    this.dataWayToPaySucess()
    this.dataReservationCartSucess()
    this.reservationCreationCart();
    this.reservationDeleteCart();
  }
  ngAfterViewChecked(): void {
    if (this.needRefresh) {
        this.lightGallery.refresh();
        this.needRefresh = false;
    }
  }
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
  onInit = (detail): void => {
    this.lightGallery = detail.instance;
  };
  initial(){
    /* if (localStorage.getItem('token') !== null) {
      this.router.navigate([RoutersLink.home]);
    } */
    this.form = this.formBuilder.group({
      buscar: [Menssage.empty],
      idTypeProducts: [Menssage.empty],
      idQualities: [Menssage.empty],
    });

  }
  getQualities(){
    this.store.dispatch(
      products.loadingQuality()
    );
  }

  getTypeProducts(){
    this.store.dispatch(
      products.loadingTypeProducts()
    );
  }
  private dataCreateProductsSucess(){
    this.createProductsService = this.store.select('productsItem')
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
        if (data.productsCheck != 0) {
          this.eventItems = data.products.articulos.data;
          this.pagination= data.products.pagination;
        }
        if (data.error != null){
          this.alertError(data.error.message); 
        } 
    })
    let data = {
      idQualities:"",
      idTypeProducts:"",
      buscar:""
    }
    this.getEvents(1,data);
  }
  private dataWayToPaySucess(){
    this.wayToPayService = this.store.select('wayToPay')
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

        if (data.wayToPayCheck != 0) {
          this.wayToPay = []
          this.wayToPay = data.wayToPay
        }
        if (data.error != null){
          this.alertError(data.error.message); 
        } 
    })
    this.getWayToPay();
  }
  private dataQualitySucess(){
    this.qualityService = this.store.select('quality')
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
        if (data.qualityCheck != 0) {
          this.qualities = data.quality
        }
        if (data.error != null){
          this.alertError(data.error.message); 
        } 
    })
    this.getQualities();
  }
  private dataTypeProductsSucess(){
    
    this.createTypeProductsService = this.store.select('typeProducts')
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
        if (data.typeProductsCheck == 1) {
          this.typeProducts = data.typeProducts
        }
        if (data.error != null){
          this.alertError(data.error.message); 
        } 
    })
    this.getTypeProducts();  
  }
  private dataReservationCartSucess(){
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
          console.log("reservationCart", data)
          this.reservationCart = data.reservationCart
          this.calculateSum(data.reservationCart)
        }
        if (data.error != null){
          this.alertError(data.error.message); 
        } 
    })
    this.getReservationCartService()
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
          this.cerrarModal()
        }
        if (data.error != null){
          this.alertError(data.error.message); 
        } 
    })
  }
  
  private dataCreateBookingSucess(){
    this.bookingService = this.store.select('booking')
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
          this.getEvents(1,pagination);

        }
        if (data.error != null){
          this.alertError(data.error.message); 
        }
    })
  }

  public getEvents(page: number, buscar: any){
    const item = "?page="+page+"&buscar="+buscar.buscar+"&idQualities="+buscar.idQualities+"&idTypeProducts="+buscar.idTypeProducts
    this.store.dispatch(
      products.loadingProducts({ item })
    );
  }
  public routerList(item: string){
    this.router.navigate(['/pages/products/detailProducts/'+window.btoa(item)]);
  }
  public subMenu(resulta:any){
    resulta.forEach(element => {
      if (element.children != null) {
        console.log(JSON.stringify(element.children.toString().trim()))
        this.menuItems.push(
          {
            id:element.id,
            path:element.path,
            title:element.title,
            type:element.type,
            icontype:element.icontype,
            collapse:element.collapse,
            children: JSON.parse(element.children.toString().trim()),
            imgMenu:element.imgMenu,
            active:element.active,
          },
        )
      }else{
        this.menuItems.push(
          {
            id:element.id,
            path:element.path,
            title:element.title,
            type:element.type,
            icontype:element.icontype,
            collapse:element.collapse,
            children:element.children,
            imgMenu:element.imgMenu,
            active:element.active,
          },
        )
      }
    });
    this.menuItems = this.menuItems.filter(menuItem => menuItem);
    console.log(this.menuItems)
  }

  public changePage(page: number, buscar: string, idQualities: String, idTypeProducts: string){
    //Actualiza la página actual
    this.pagination.current_page = page;
    //Envia la petición para visualizar la data de esa página
    let data = {
      idQualities:this.form.controls['idQualities'].value ? this.form.controls['idQualities'].value  : ''  ,
      idTypeProducts:this.form.controls['idTypeProducts'].value ? this.form.controls['idTypeProducts'].value :''  ,
      buscar: this.form.controls['buscar'].value
    }
    this.getEvents(page,data);
  }
 
  public pagesNumber() {
    if(!this.pagination.to) {
        return [];
    }
    
    var from = this.pagination.current_page - this.offset; 
    if(from < 1) {
        from = 1;
    }

    var to = from + (this.offset * 2); 
    if(to >= this.pagination.last_page){
        to = this.pagination.last_page;
    }  

    var pagesArray = [];
    while(from <= to) {
        pagesArray.push(from);
        from++;
    }
    return pagesArray;             

  }

  public isActived(){
    return this.pagination.current_page;
  }

  public option(){
    $('#exampleModal').modal('show')
    this.alert.messagefin();
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
        idusers : this.alert.convertTextDecrypt(this.usersData.authorisation.id),
        idProyectsClients : this.alert.convertTextDecrypt(this.usersData.authorisation.idProyectsClients),
        data: this.reservationCart
      }
      this.store.dispatch(
        products.loadingCreateBooking({ item })
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
      products.loadingBookingAdmin({ item })
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
      idusers : this.alert.convertTextDecrypt(this.usersData.authorisation.id),
      idProyectsClients : this.alert.convertTextDecrypt(this.usersData.authorisation.idProyectsClients),
    }

    this.store.dispatch(
      products.loadingCreateReservationCart({ item })
    );
      
    } else {
      this.alertError("Producto no disponible"); 
    }
  }
  public getReservationCartService(){
    console.log("listo")
    var item = Number(this.alert.convertTextDecrypt(this.usersData.authorisation.idProyectsClients));
    this.store.dispatch(
      products.loadingreservationCart({ item })
    );
  }

  public deleteReservationCartService(){
    var item = this.alert.convertTextDecrypt(this.usersData.authorisation.idProyectsClients)
    this.store.dispatch(
      products.loadingDeleteReservationCart({ item })
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

  public getWayToPay(){
    this.store.dispatch(
      products.loadingWayToPay()
    );
  }

  public routeList(id:string){
    var code = window.btoa(id)
    this.router.navigate(['/pages/products/detailProducts/'+code]);
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
  private cerrarModal(){
    $('#exampleModal').modal('hide')
  }

}
