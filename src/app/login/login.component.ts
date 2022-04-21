import { Component, OnInit } from '@angular/core';
//Importamos los modulos y servicios para el formulario
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // Creamos la propiedad que almacena al formulario
  form: FormGroup;
  //Inyectamos el servicio FormBuilder para construir nuestro formulario
  constructor(private formBuilder: FormBuilder) {
    // Asignamos a la propiedad el 'grupo' que contiene los distintos FormControl, mediante el método 'formBuilder'
    // Agregamos también las VALIDACIONES a cada formControl.
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
}
