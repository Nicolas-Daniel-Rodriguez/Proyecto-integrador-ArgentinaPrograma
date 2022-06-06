import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
//Importamos las librerias de formulario que vamos a necesitar
import { FormBuilder, FormGroup } from '@angular/forms';
import {Validators} from "@angular/forms"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private modalSS:PortfolioService) {
  }
  

  ngOnInit(): void {
  }

  closeModal(){
    this.modalSS.$modal.emit(false);
  }
}
