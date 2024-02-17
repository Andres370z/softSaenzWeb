import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { LightGallery } from 'lightgallery/lightgallery';
import lgZoom from 'lightgallery/plugins/zoom';
import { Menssage } from 'src/app/models/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CreateProductsService } from 'src/app/services/products/create-products.service';
import { ReservationCartService } from 'src/app/services/reservationCart/reservation-cart.service';
import { AlertService } from 'src/app/services/utility/alert.service';
import { LocalStoreService } from 'src/app/services/utility/local-store.service';
import { environment } from 'src/environments/environment';
import { PagesStates } from 'src/store/interface/pagesInterface';
import * as products  from 'src/store/actions';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.css']
})
export class DetailProductsComponent implements OnInit {
  public createProductsService: Subscription;
  public reservationCartService: Subscription;
  public createQualitiesService: Subscription;
  public wayToPayService: Subscription;
  public createTypeProductsService: Subscription;
  public usersData: any;
  public customerDetail: any = [];
  public api = environment.img
  public eventItems: any = [];
  public selectItems: any;
  public idNumber: number;
  public settings = {
    counter: false,
    plugins: [lgZoom],
  };
  private lightGallery!: LightGallery;
  private needRefresh = false;
  public items = [
  ];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alert: AlertService,
    private localStore: LocalStoreService,
    private store: Store<PagesStates>
  ) { 
    this.usersData = this.localStore.getSuccessLogin();
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      let token = parametros.get("id");
      if (token != null) {
        this.idNumber = Number(this.alert.convertTextDecrypt(token))
        this.dataCreateProductsSucess()
        this.dataGalleryProductsSucess()
        this.getDetailProducts(this.idNumber.toString())
      } 
  })
  }
  ngOnInit(): void {
    
  }
  private dataCreateProductsSucess(){
    this.createProductsService = this.store.select('productListDetail')
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
        if (data.productListDetailCheck == 2) {
          this.selectItems = data.productListDetail;
          this.getGalleryProducts(this.idNumber)
        }
        if (data.error != null){
          this.alertError(data.error.message); 
        } 
    })
  }
  private dataGalleryProductsSucess(){
    this.createProductsService = this.store.select('productsGallery')
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
        console.log(data)
        if (data.galleryProductsCheck == 2) {
          this.items = data.productGallery;
        }
        if (data.error != null){
          this.alertError(data.error.message); 
        } 
    })
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
  getDetailProducts(item: string){
    this.store.dispatch(
      products.loadingProductListDetail({item})
    );
      
  }
  getGalleryProducts(item: number){
    this.store.dispatch(
      products.loadinggetgalleryProducts({item})
    );
  }
  public postReservationCartService(itemEnd: any){
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
