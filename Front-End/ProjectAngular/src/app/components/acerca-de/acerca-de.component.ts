import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../../interfaces/persona/persona.component';
import { personaService } from 'src/app/servicios/persona.service';
import { TokenService } from '../../servicios/token.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercadeComponent implements OnInit {
  isLogged = false;
  personaC : Persona[] = [];

  public personas: Persona[] = [];
  roles!: string[];
  isAdmin: boolean = false;
  modalContact: boolean = false;

  constructor(private personaService: personaService, 
              private tokenService: TokenService,         
              private activRouter : ActivatedRoute) {}

  ngOnInit() {
    this.getPersonas();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.personaService.$contac.subscribe((valor) => {
      this.modalContact = valor;
    });
  }

  openContact() {
    this.modalContact = true;
  }

  editarImgPortadaC() {
    
  }

  editarImgPerfilC() {
    
  }

  editarOcupacionC() {

  }

  editarNombreApellidoC(id: number, personaC: Persona):void {
      
  }

  editarAcercaDeC() {

  }

  public getPersonas(): void {
    this.personaService.getPersonas().subscribe(
      (response: Persona[]) => {
        this.personas = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
