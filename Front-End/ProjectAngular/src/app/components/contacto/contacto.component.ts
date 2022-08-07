import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { personaService } from '../../servicios/persona.service';
import { Persona } from '../../interfaces/persona/persona.component';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  bbdd:any;
  public personas!: Persona[];
  roles!: string[];
  isAdmin: boolean = false;

  constructor(private personaService:personaService) { }

  ngOnInit(): void {
    this.getPersonas();
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
}
