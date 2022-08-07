import { Component, OnInit } from '@angular/core';
import { personaService } from 'src/app/servicios/persona.service';
import { Persona } from '../../interfaces/persona/persona.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public personas!: Persona[];
  roles!: string[];
  isAdmin: boolean = false;
  modalSwitch:boolean = false;
  bbdd:any;

  constructor(private personaService:personaService) { }

  ngOnInit(): void {
    this.getPersonas();
    this.personaService.$modal.subscribe((valor) => {this.modalSwitch= valor})
    this.personaService.getPersonas().subscribe( data => {
      this.bbdd=data;})
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

  openModal(){
    this.modalSwitch = true;
  }

}
