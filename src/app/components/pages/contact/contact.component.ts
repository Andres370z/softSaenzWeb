import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsDetailsService } from 'src/app/services/products-details.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public form: FormGroup
  constructor(
    private route: ActivatedRoute,
    private serviceDetail: ProductsDetailsService,
    private myFormBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initial()
  }
  sendForm(){
    console.log(this.form);
  }
  initial(){
    this.form = this.myFormBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required, Validators.minLength(10)]],
      theme: ['', [Validators.required]],
      about: ['',[Validators.required]]
    })
    
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


}
