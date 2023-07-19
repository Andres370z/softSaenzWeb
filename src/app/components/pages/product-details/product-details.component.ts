import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsDetailsService } from 'src/app/services/products-details.service';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import Swal from 'sweetalert2'
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
    private myFormBuilder: FormBuilder
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
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.minLength(10)]],
      about: ['', [Validators.required]]
    })

    this.getDetails()
  }
  sendForm() {
    console.log(this.form)
    


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
        this.sendForm
      }
    })
  }
}
