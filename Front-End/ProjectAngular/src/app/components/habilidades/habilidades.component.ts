import { Component, OnInit } from '@angular/core';
import { personaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  skillList:any;
  bbdd:any;

  constructor(private personaService:personaService) { }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe( data => {
      this.bbdd=data;
    })
  }

}
