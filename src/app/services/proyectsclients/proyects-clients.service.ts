import { Injectable } from '@angular/core';
import { RoutersLink } from 'src/app/models/router';
import { HttpsService } from '../https.service';

@Injectable({
  providedIn: 'root'
})
export class ProyectsClientsService {

  constructor(
    private registeresquest: HttpsService,
  ) { }

  create(inform:any){
    return  this.registeresquest.POST(RoutersLink.proyects, inform)
  }

  getProyectsClients(item:string){
    return  this.registeresquest.GET(RoutersLink.proyectsPagination+item)
  }

  getProyectsClientsFull(){
    return  this.registeresquest.GET(RoutersLink.proyects)
  }

}
