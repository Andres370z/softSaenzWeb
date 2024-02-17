import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Menssage, RoutersLink } from 'src/app/models/router';
import { AlertService } from 'src/app/services/utility/alert.service';
import { LocalStoreService } from 'src/app/services/utility/local-store.service';
import { PagesStates } from 'src/store/interface/pagesInterface';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit, OnDestroy {
  @Input() estadoNav: boolean = false
  public reservationCartService: Subscription;
  list = [
    {
      number: '1',
      name: 'home',
      icon: "fa-solid fa-house" //cambia
    },{
      number: '1',
      name: 'home2',
      icon: "fa-solid fa-house-user" //cambia
    },{
      number: '1',
      name: 'home3',
      icon: 'fa-solid fa-house' //cambia
    }
  ]
  public fullData: number = 0
  constructor(
    private sanitizer: DomSanitizer,
    private localStore: LocalStoreService,
    private router: Router,
    public formBuilder: FormBuilder,
    private alert: AlertService,
    private store: Store<PagesStates>
  ) { }
  ngOnDestroy(): void {
    this.reservationCartService.unsubscribe();
  }

  ngOnInit(): void {
    this.dataReservationCartSucess()
  }
  getSafeIconHtml(icon: string): SafeHtml {
    const iconHtml = `<i class="${icon}"></i>`;
    return this.sanitizer.bypassSecurityTrustHtml(iconHtml);
  }
  public calculateSum(item: any){
    this.fullData = 0
    if (item.length != 0) {
      item.forEach(element => {
        this.fullData += element.amount
      });
    }
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
          this.calculateSum(data.reservationCart)
        }
        if (data.error != null){
          this.alertError(data.error.message); 
        } 
    })
  }
  public option(){
    if (this.fullData !=0) {
      this.router.navigate([RoutersLink.card]);
    }else{
      this.alertError("Carrito de compra vacío")
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
