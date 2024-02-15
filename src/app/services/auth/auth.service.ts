import { Injectable } from '@angular/core';
import { HttpsService } from '../https.service';
import { LocalStoreService } from '../utility/local-store.service';
import { AlertService } from '../utility/alert.service';
import { Router } from '@angular/router';
import { RoutersLink } from 'src/app/models/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private registeresquest: HttpsService,
    private route: Router, 
    private localStore: LocalStoreService,
    private alert: AlertService
  ) { }

  create(inform:any){
    const data = {
      businessName: inform.businessName,
      identificationCard: inform.identificationCard,
      idCategoryToRegister: inform.idCategoryToRegister,
      address: inform.address,
      phone: inform.phone,
      email: inform.email,
      password: "sumateClaro",
      password_confirmation : "sumateClaro",
      idCity: inform.idCity
    };
    return  this.registeresquest.POST(RoutersLink.register, data)
  }

  login(inform:any){
    return  this.registeresquest.POST(RoutersLink.loginApi, inform)
  }

  logout(){
    this.localStore.clear();
    this.route.navigate([RoutersLink.login]);
  } 

  forgotPassword(item: string){
    return  this.registeresquest.GET(RoutersLink.forgotPassword+item)
  }

  getCustomerDetail(item: string){
    return  this.registeresquest.GET(RoutersLink.customerDetail+item)
  }
  
  createEditUsers(inform:any){
    const data = {
      businessName: inform.businessName,
      identificationCard: inform.identificationCard,
      idCategoryToRegister: inform.idCategoryToRegister,
      address: inform.address,
      phone: inform.phone,
      email: inform.email,
      idCity: inform.idCity,
      businessDescription: inform.businessDescription,
      contactPerson : inform.contactPerson,
      telephoneContact: inform.telephoneContact,
      legalRepresentatives: inform.legalRepresentatives,
      password: inform.password,
      id: inform.id
    };
    return  this.registeresquest.POST(RoutersLink.registerUpdate, data)
  }

  createUpdatePassword(inform:any){
    const data = {
      id: inform.id,
      email: inform.email,
      password: inform.password,
    };
    return  this.registeresquest.POST(RoutersLink.passwordUpdate, data)
  }

  createImgUpdate(inform:any){
    const formData = new FormData(); 
    formData.append("file", inform.file);
    formData.append("id", inform.id);
    return  this.registeresquest.POST(RoutersLink.imgUpdate, formData)
  }

  isAuth(): boolean{
    return true
  }
}
