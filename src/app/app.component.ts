import { Component } from '@angular/core';
//Importamos los modulos y servicios para el formulario
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Creamos la propiedad que almacena al formulario
  form: FormGroup;
  //Inyectamos el servicio FormBuilder para construir nuestro formulario
  constructor(private formBuilder: FormBuilder) {
    // Asignamos a la propiedad el 'grupo' que contiene los distintos FormControl, mediante el método 'formBuilder'
    this.form = this.formBuilder.group({
        username: ['', []],
        email: ['', []],
        password: ['', []],
    })
  }
}
