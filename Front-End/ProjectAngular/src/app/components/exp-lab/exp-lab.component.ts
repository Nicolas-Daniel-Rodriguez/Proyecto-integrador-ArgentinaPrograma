import { Component, OnInit } from '@angular/core';
import { personaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-exp-lab',
  templateUrl: './exp-lab.component.html',
  styleUrls: ['./exp-lab.component.css']
})
export class ExpLabComponent implements OnInit {
  expList: any;
  bbdd:any;

  constructor(private personaService:personaService) { }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe( data => {
      this.bbdd=data;
  })
  }
}

