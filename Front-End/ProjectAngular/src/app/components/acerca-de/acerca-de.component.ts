import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../../interfaces/persona/persona.component';
import { personaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercadeComponent implements OnInit {
  public personas!: Persona[];
  roles!: string[];
  isAdmin: boolean = false;
  modalContact: boolean = false;

  constructor(private personaService: personaService) {}

  ngOnInit() {
    this.getPersonas();
    this.personaService.$contac.subscribe((valor) => {
      this.modalContact = valor;
    });
  }

  openContact() {
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
