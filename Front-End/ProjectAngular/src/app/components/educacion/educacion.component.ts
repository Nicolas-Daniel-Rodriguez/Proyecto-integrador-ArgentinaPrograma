import { Component, OnInit } from '@angular/core';
import { personaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacionList: any;
  bbdd:any;

  constructor(private personaService:personaService) { }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe( data => {
      this.bbdd=data;
    })
  }

}
