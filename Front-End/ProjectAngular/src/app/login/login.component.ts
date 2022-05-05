import { Component, OnInit } from '@angular/core';
//Importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  //Inyectamos en el constructor el FormBuilder
  constructor(private formBuilder: FormBuilder) {
    //Creamos el grupo de controles para el formulario de login
    this.form= this.formBuilder.group(
      {
        password:["",[]],
        mail:["", []]
      }
    )
   }

  ngOnInit(): void {
  }

}
