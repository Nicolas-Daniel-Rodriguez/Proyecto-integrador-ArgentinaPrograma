import { Component, OnInit } from '@angular/core';
import { personaService } from '../../servicios/persona.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Persona } from '../../interfaces/persona/persona.component';
import { ImgPerfil } from 'src/app/interfaces/img-perfil/img-perfil.component';
import { ImgPerfilService } from 'src/app/servicios/img-perfil.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public personas!: Persona[];
  public imgperfil!: ImgPerfil[];
  roles!: string[];
  isAdmin: boolean = false;

  constructor(private personaService:personaService,
              private imgPerfilService: ImgPerfilService) { }

  ngOnInit(): void {
    this.getPersonas();
    this.getImgPerfil();
  }

  closeContact(){
    this.personaService.$contac.emit(false);
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
