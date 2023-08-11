import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsDetailsService } from 'src/app/services/products-details.service';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import * as Notiflix from 'notiflix';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private serviceDetail: ProductsDetailsService,
    private myFormBuilder: FormBuilder,
    private myHttpService: HttpService
  ) { }
  getMenuId: any
  menuDta: any
  ngOnInit(): void {
    this.initial()
  }
  getDetails() {
    this.getMenuId = this.route.snapshot.paramMap.get('id')
    console.log(this.getMenuId, 'tu resultado')
    if (this.getMenuId) {
      this.menuDta = this.serviceDetail.productsDetails.filter((value) => {
        return value.id == this.getMenuId
      })
      console.log(this.menuDta, 'este es tu menu Dta');
    }
  }
  initial() {
    this.form = this.myFormBuilder.group({
      name: ['', Validators.required],
      email: ['mispruebas3785@gmail.com', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.minLength(10)]],
      about: ['', [Validators.required]],
      mensaje: [`hola mi nombre es `, [Validators.required]],
    })

    this.getDetails()
  }
  sendForm() {
    //console.log(this.form)
    Notiflix.Loading.standard('cargando')
    let params = {
      name: this.form.value.name,
      email: this.form.value.email,
      asunto: this.form.value.about,
      mensaje: this.form.value.mensaje,
      telephone: this.form.value.telephone,
    }
    console.log('este es tu params',params);
    //llamas al servicio
    this.myHttpService.sendForm(params).subscribe(resp => {
      console.log('esta es tu respuestas desde el servicio',resp);
      
    })
    Notiflix.Loading.remove() 
    this.cleanForm()

  }
  cleanForm() {
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
