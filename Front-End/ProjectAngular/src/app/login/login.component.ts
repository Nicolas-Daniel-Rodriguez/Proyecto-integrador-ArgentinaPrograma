import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
//Importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup } from '@angular/forms';
import {Validators} from "@angular/forms"
import { Router } from '@angular/router';
import { AutenticacionService } from './../servicios/autenticacion.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  constructor(private modalSS:PortfolioService, private FormBuilder:FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router) {
    this.form=this.FormBuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]],
        /*falta completar correctamente*/
        deviceInfo:this.FormBuilder.group({
          deviceId:["17867822222"],
          deviceType: ["DEVICE_TYPE_ANDROID"],
          notificationToken: ["656555656sgsgdsf3"]
        })
         


      }
    )
  }
  

  ngOnInit(): void {
  }

  get Email()
  {
    return this.form.get('email');
  }

  get Password()
  {
    return this.form.get('password');
  }

  closeModal(){
    this.modalSS.$modal.emit(false);
  }

  onEnviar(event:Event){
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA" + JSON.stringify(data));
      this.ruta.navigate(['/portafolio']);
    })
  }
}
