import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../../interfaces/persona/persona.component';
import { personaService } from 'src/app/servicios/persona.service';
import { TokenService } from '../../servicios/token.service';
import { FormControl } from '@angular/forms';
import { acercaDeService } from '../../servicios/acerca-de.service';
import { ImgPortadaService } from '../../servicios/img-portada.service';
import { ImgPerfilService } from '../../servicios/img-perfil.service';
import { AcercaDe } from '../../interfaces/acerca-de/acerca-de.component';
import { ImgPerfil } from 'src/app/interfaces/img-perfil/img-perfil.component';
import { ImgPortada } from 'src/app/interfaces/img-portada/img-portada.component';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercadeComponent implements OnInit {
  isLogged = false;
  public personas!: Persona[];
  public editPersona!: Persona;
  public acercaDe!: AcercaDe[];
  public editAcercaDe!: AcercaDe;
  public imgPerfil!: ImgPerfil[];
  public editImgPerfil!: ImgPerfil;
  public imgPortada!: ImgPortada[];
  public editImgPortada!: ImgPortada;
  roles!: string[];
  
  modalContact: boolean = false;

  name = new FormControl(''); 

  constructor(private personaService: personaService, 
              private tokenService: TokenService,
              private acercaDeService: acercaDeService,
              private imgPerfilService: ImgPerfilService,
              private imgPortadaService: ImgPortadaService) {}

  ngOnInit() {
    this.getPersonas();
    this.getAcercaDe();
    this.getImgPerfil();
    this.getImgPortada();
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

  public getAcercaDe(): void {
    this.acercaDeService.getAcercaDe().subscribe(
      (response: AcercaDe[]) => {
        this.acercaDe = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public modificarAcercaDe(id : number, acercaDe: AcercaDe):void {
    this.acercaDeService.modificarAcercaDe(id, acercaDe).subscribe(
    (response: AcercaDe) => {
      this.getAcercaDe();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
   )
  }

  public onOpenModalAcercaDe(acercaDe: AcercaDe, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'editar') {
      this.editAcercaDe = acercaDe;
      button.setAttribute('data-target', '#modificarAcercaDeModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public getImgPerfil(): void {
    this.imgPerfilService.getImgPerfil().subscribe(
      (response: ImgPerfil[]) => {
        this.imgPerfil = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public modificarImgPerfil(id : number, imgPerfil: ImgPerfil):void {
    this.imgPerfilService.modificarImgPerfil(id, imgPerfil).subscribe(
    (response: ImgPerfil) => {
      this.getImgPerfil();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
   )
  }

  public onOpenModalImgPerfil(imgPerfil: ImgPerfil, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'editar') {
      this.editImgPerfil = imgPerfil;
      button.setAttribute('data-target', '#modificarImgPerfilModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public getImgPortada(): void {
    this.imgPortadaService.getImgPortada().subscribe(
      (response: ImgPortada[]) => {
        this.imgPortada = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public modificarImgPortada(id : number, imgPortada: ImgPortada):void {
    this.imgPortadaService.modificarImgPortada(id, imgPortada).subscribe(
    (response: ImgPortada) => {
      this.getImgPortada();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
   )
  }

  public onOpenModalImgPortada(imgPortada: ImgPortada, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'editar') {
      this.editImgPortada = imgPortada;
      button.setAttribute('data-target', '#modificarImgPortadaModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
