import { Component, OnInit } from '@angular/core';
import { personaService } from 'src/app/servicios/persona.service';
import { Persona } from '../../interfaces/persona/persona.component';
import { HttpErrorResponse } from '@angular/common/http';
import { ImgPerfil } from 'src/app/interfaces/img-perfil/img-perfil.component';
import { ImgPerfilService } from 'src/app/servicios/img-perfil.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public personas!: Persona[];
  public imgperfil!: ImgPerfil[];
  roles!: string[];
  isAdmin: boolean = false;
  modalContact:boolean =false;  
  
  constructor(private personaService:personaService,
              private imgPerfilService: ImgPerfilService) { }

  ngOnInit(): void {
    this.getPersonas();
    this.getImgPerfil();
    this.personaService.$contac.subscribe((valor) => {this.modalContact= valor})
  }

  openContact(){
    this.modalContact = true;
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

  public getImgPerfil(): void {
    this.imgPerfilService.getImgPerfil().subscribe(
      (response: ImgPerfil[]) => {
        this.imgperfil = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
