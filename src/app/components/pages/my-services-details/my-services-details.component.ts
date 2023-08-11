import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { MyServicesService } from 'src/app/services/my-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-services-details',
  templateUrl: './my-services-details.component.html',
  styleUrls: ['./my-services-details.component.css']
})
export class MyServicesDetailsComponent implements OnInit {
  public form: FormGroup
  constructor(
    private route: ActivatedRoute,
    private serviceDetail: MyServicesService,
    private myFormBuilder: FormBuilder,
    private myHttpService: HttpService

  ) { }
  getMenuId: any
  menuDta: any
  ngOnInit(): void {
    this.initial()
  }
  initial(){
    this.form = this.myFormBuilder.group({
      name: ['', [Validators.required]],
      telephone: ['',[Validators.required, Validators.minLength(10)]],
      email: ['mispruebas3785@gmail.com',[Validators.required, Validators.email]],
      about: ['',[Validators.required]],
      message: ['',[Validators.required, Validators.minLength(10)]],
    })
    this.getServiceDetails()
  }
  sendForm(){
    console.log(this.form)
    let params = {
      name: this.form.value.name,
      email: this.form.value.email,
      asunto: this.form.value.about,
      mensaje: this.form.value.message
    }
    console.log('este es tu params',params);
    //llamas al servicio
    this.myHttpService.sendForm(params).subscribe(resp => {
      console.log('esta es tu respuestas desde el servicio',resp);
      
    })
  }
  getServiceDetails(){
    this.getMenuId = this.route.snapshot.paramMap.get('id')
    console.log('este es tu resultado ', this.getMenuId)
    if(this.getMenuId){
      this.menuDta = this.serviceDetail.serviceDetails.filter((value)=>{
        return value.id == this.getMenuId
      })
      console.log(this.menuDta, 'este es tu menu Dta');
    }
  }
  cleanForm(){
    this.form.reset()
  }
  saveData() {
    Swal.fire({
      title: '¿Estas seguro?',
      text: "¿quieres enviar este correo para comunicarte con un asesor?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Enviar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Listo!',
          'En un momento un asesor estara en contacto contigo',
          'success'
        )
        //EJECUTA EL METODO DE ENVIAR CORREO
        this.sendForm()
      }
    })
  }
  sendWhatsApp(){
    const mensajePredeterminado = encodeURIComponent('Hola estoy interesado en ')
    let numberTelephone = ''
    const url = `https://wa.me/${numberTelephone}?text=${mensajePredeterminado}`
    window.open(url, '_blanck')
  }
}
