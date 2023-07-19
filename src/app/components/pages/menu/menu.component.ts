import { Component, OnInit } from '@angular/core';
import { ProductsDetailsService } from 'src/app/services/products-details.service';
import { ProductDetails } from 'src/app/shared/interfaces/productDetail';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private productService: ProductsDetailsService
  ) { }
  productData: any[] = []

  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.productData = this.productService.productsDetails
  }

}
