import { Component, OnInit } from '@angular/core';
import { ProductsDetailsService } from 'src/app/services/products-details.service';
import { ProductDetails } from 'src/app/shared/interfaces/productDetail';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private productDetailService: ProductsDetailsService
  ) { }
  productData: any[] = []
  ngOnInit(): void {
    this.getProductDetails()
  }
  getProductDetails(){
    this.productData = this.productDetailService.productsDetails
  }


}
