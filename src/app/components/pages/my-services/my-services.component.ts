import { Component, OnInit } from '@angular/core';
import { MyServicesService } from 'src/app/services/my-services.service';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.css']
})
export class MyServicesComponent implements OnInit {
  servicesData: any[]= []
  constructor(
    private myServices: MyServicesService
  ) { }

  ngOnInit(): void {
    this.getServices()
  }
  getServices(){
    this.servicesData = this.myServices.serviceDetails
  }

}
