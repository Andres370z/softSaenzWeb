import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Menssage } from 'src/app/models/router';
import { ProductsDetailsService } from 'src/app/services/products-details.service';
import { AlertService } from 'src/app/services/utility/alert.service';
import { LocalStoreService } from 'src/app/services/utility/local-store.service';
import { environment } from 'src/environments/environment';
import { PagesStates } from 'src/store/interface/pagesInterface';
import * as action from 'src/store/actions';
import * as $ from 'jquery';
//declare var $:any
declare var window: any;
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, OnDestroy {
  public typeProductsSubscription: Subscription;
  public quoteServicesSubscription: Subscription;
  public productsType: any[] = [];
  public itemQuote: any;
  public form: FormGroup;
  formModal: any;
  public arraySelecteplan:any[]=[
    {
      id:1,
      code:"MSL",
      name:"Mambresía Mensaul"
    },
    {
      id:2,
      code:"SMT",
      name:"Mambresía Semestral"
    },
    {
      id:3,
      code:"ANL",
      name:"Mambresía Anual"
    },
    {
      id:4,
      code:"DPV",
      name:"Mambresía de por vida"
    }
  ]
  public api = environment.img
  public usersData: any;
  constructor(
    private productService: ProductsDetailsService,
    private store: Store<PagesStates>,
    private alert: AlertService,
    public formBuilder: FormBuilder,
    private localStore: LocalStoreService,

  ) { 
    this.usersData = this.localStore.getSuccessLogin();
  }
  ngOnDestroy(): void {
    this.typeProductsSubscription.unsubscribe();
    this.quoteServicesSubscription.unsubscribe();
  }
  productData: any[] = []

  ngOnInit(): void {
    this.initial()
    this.dataProductsTypeSucess()
    this.dataQuoteServicesSucess()
    this.getProductsType(4)
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );
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
      email: [Menssage.empty, Validators.compose([
        Validators.required,
        Validators.pattern(Menssage.valiEmail),
        Validators.minLength(5)
      ])],
      shippingAddress: [Menssage.empty, Validators.compose([
        Validators.required,
      ])],
      selectPlan: [Menssage.empty, Validators.compose([
        Validators.required,
      ])],
      idProyectsClients: [this.alert.convertTextDecrypt(this.usersData.authorisation.idProyectsClients), Validators.compose([
        Validators.required,
      ])],
    });
  }
  getProducts(){
    this.productData = this.productService.productsDetails
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
          this.productsType = data.productsType
         }
       })
  }
  dataQuoteServicesSucess(){
    this.quoteServicesSubscription = this.store.select('quoteServices')
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
       })
   }
   loading(){
      this.alert.loading();
   }
   stopLoading(){
      this.alert.messagefin();
   }
   getProductsType(id: number){
    this.store.dispatch(
      action.loadinggetListTypeProducts({id})
    );
  }
   alertError(description: string){
      this.alert.error(Menssage.error, description);
   }
   modal(item: any){
    this.itemQuote = item;
    this.formModal.show();
   }
   public onSubmit(item: any){
    if (this.valid(item)) {
        this.store.dispatch(action.loadingCreateQuoteServices({item}));
    }
   }
   public exitAcces(){
    this.form.reset()
    this.formModal.hide();
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
    if (item.email === Menssage.empty) {
      this.alert.error(Menssage.error, Menssage.email);
      valid = false
    }
    if (item.shippingAddress === Menssage.empty) {
      this.alert.error(Menssage.error, Menssage.shippingAddress);
      valid = false
    }
    if (item.selectPlan === Menssage.empty) {
      this.alert.error(Menssage.error, Menssage.selectplan);
      valid = false
    }
    if (item.idProyectsClients === Menssage.empty) {
      this.alert.error(Menssage.error, Menssage.idProyectsClients);
      valid = false
    }
    
    return valid
   }
}
