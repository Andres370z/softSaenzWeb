import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
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
    private myFormBuilder: FormBuilder,
    private myHttpService: HttpService
  ) { }

  ngOnInit(): void {
    this.initial()
  }
  sendForm(){
    console.log(this.form);
    let params = {
      name: this.form.value.name,
      email: this.form.value.email,
      asunto: this.form.value.about,
      mensaje: this.form.value.message
    }
    //console.log('Te traigo esto... ',params);
    this.myHttpService.sendForm(params).subscribe(resp =>{
      console.log('Esta es tu respuesta ', resp);
      
    })
  }
  initial(){
    this.form = this.myFormBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['mispruebas3785@gmail.com', [Validators.required, Validators.email]],
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
  sendWhatsApp(){
    const mensajePredeterminado = encodeURIComponent('Hola estoy interesado en ')
    let numberTelephone = ''
    const url = `https://wa.me/${numberTelephone}?text=${mensajePredeterminado}`
    window.open(url, '_blanck')
  }
  cleanForm(){
    this.form.reset()
  }

}
