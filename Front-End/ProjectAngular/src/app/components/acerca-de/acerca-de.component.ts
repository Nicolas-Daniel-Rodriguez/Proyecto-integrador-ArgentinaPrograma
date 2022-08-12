import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../../interfaces/persona/persona.component';
import { personaService } from 'src/app/servicios/persona.service';
import { TokenService } from '../../servicios/token.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercadeComponent implements OnInit {
  isLogged = false;
  public personas!: Persona[];
  public editPersona!: Persona;
  roles!: string[];
  
  modalContact: boolean = false;

  name = new FormControl(''); 

  constructor(private personaService: personaService, 
              private tokenService: TokenService) {}

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

  public modificarPersona(id : number, persona: Persona):void {
    this.personaService.modificarPersona(id,persona).subscribe(
    (response: Persona) => {
      this.getPersonas();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
   )
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

  public onOpenModal(persona: Persona, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'editar') {
      this.editPersona = persona;
      button.setAttribute('data-target', '#modificarPersonaModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
