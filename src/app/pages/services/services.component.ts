import { Component, OnInit } from '@angular/core';
import { ProductsDetailsService } from 'src/app/services/products-details.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

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
