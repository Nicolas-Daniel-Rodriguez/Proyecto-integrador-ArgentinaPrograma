import { Component, OnInit } from '@angular/core';
//Importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup } from '@angular/forms';
import {Validators} from "@angular/forms"

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
        username:["", [Validators.required,Validators.minLength(5),Validators.maxLength(12)]],
        password:["",[Validators.required,Validators.minLength(8)]],
        mail:["", [Validators.required,Validators.email]]
      }
    )
   }

   get Password(){
    return this.form.get("password");
  }
 
  get Mail(){
   return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false
  }

  onEnviar(event: Event){
    //Detenemos la propagacion o ejecucion del comportamiento Submit de un form.
    event.preventDefault;

    if(this.form.valid){
      //Llamamos a nuestro servicio para enviar los datos al servidor.
      //También podriamos ejecutar alguna lógica extra.
      alert("Todo salio bien al enviar el formulario!")
    } else {
      //Corremos todas las validaciones para que se ejecuten todos los mensajes de error en el template.
      this.form.markAllAsTouched();
    }
  }

  ngOnInit(): void {
  }

}
