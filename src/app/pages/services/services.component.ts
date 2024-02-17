import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Menssage } from 'src/app/models/router';
import { ProductsDetailsService } from 'src/app/services/products-details.service';
import { AlertService } from 'src/app/services/utility/alert.service';
import { LocalStoreService } from 'src/app/services/utility/local-store.service';
import { environment } from 'src/environments/environment';
import { PagesStates } from 'src/store/interface/pagesInterface';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, OnDestroy {
  public typeProductsSubscription: Subscription;
  public productsType: any[] = [];
  public api = environment.img
  constructor(
    private productService: ProductsDetailsService,
    private store: Store<PagesStates>,
    private alert: AlertService,
    private localStore: LocalStoreService,
  ) { }
  ngOnDestroy(): void {
    this.typeProductsSubscription.unsubscribe();
  }
  productData: any[] = []

  ngOnInit(): void {
    this.getProducts()
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
