import { Component, OnInit } from '@angular/core';
import { personaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyList:any;
  bbdd:any;

  constructor(private personaService:personaService) { }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe( data => {
      this.bbdd=data;
    })
  }

}
