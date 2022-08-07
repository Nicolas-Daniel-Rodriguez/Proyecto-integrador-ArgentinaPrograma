import { Component, OnInit } from '@angular/core';
import { personaService } from 'src/app/servicios/persona.service';
import { Persona } from '../../interfaces/persona/persona.component';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public personas!: Persona[];
  roles!: string[];
  isAdmin: boolean = false;
  modalContact:boolean =false;  
  
  constructor(private personaService:personaService) { }

  ngOnInit(): void {
    this.getPersonas();
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
}
