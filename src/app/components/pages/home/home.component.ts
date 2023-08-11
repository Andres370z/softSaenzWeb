import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import SwiperCore, { Autoplay, Navigation, Pagination, Virtual } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
/*MIS IMPORTACIONES*/
import { ProductsDetailsService } from 'src/app/services/products-details.service';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Virtual, Autoplay]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  isMobileView = false;

  //esta cosita escucha el cambio de isMobileView y muestra 2 tarjetas en lugar de 3 
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobileView = window.innerWidth <= 320; // Define el ancho máximo para considerar vista móvil
  }
  constructor(
    private productDetailService: ProductsDetailsService
  ) { }
  productData: any[] = []
  imageDta: any
  ngOnInit(): void {
    this.getProductDetails()
  }
  getProductDetails(){
    this.productData = this.productDetailService.productsDetails

  }
  //BOTONES DEL CARRUSEL
  slideNext(){
    this.swiper.swiperRef.slideNext(100);
  }
  slidePrev(){
    this.swiper.swiperRef.slidePrev(100);
  }
  

  

  
}
