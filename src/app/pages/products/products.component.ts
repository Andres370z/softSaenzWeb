import { Component, OnInit } from '@angular/core';
import { ProductsDetailsService } from 'src/app/services/products-details.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

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
