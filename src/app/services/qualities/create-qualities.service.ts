import { Injectable } from '@angular/core';
import { Qualities } from 'src/app/models/qualities';
import { HttpsService } from '../https.service';
import { Router } from '@angular/router';
import { LocalStoreService } from '../utility/local-store.service';
import { AlertService } from '../utility/alert.service';
import { RoutersLink } from 'src/app/models/router';

@Injectable({
  providedIn: 'root'
})
export class CreateQualitiesService {

  constructor(
    private registeresquest: HttpsService,
    private route: Router, 
    private localStore: LocalStoreService,
    private alert: AlertService
  ) { }

  userRegister: Qualities[] = [
    { name: '', id: 0, img: '' }
  ]
  create(inform:any){
    return  this.registeresquest.POST(RoutersLink.quality, inform)
  }

  getQuality(){
    return  this.registeresquest.GET(RoutersLink.quality)
  }

  getUsers(){
    return this.userRegister.slice()
  }
}
