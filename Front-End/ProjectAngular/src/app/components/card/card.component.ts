import { Component, OnInit } from '@angular/core';
import { personaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  bbdd:any;
  modalContact:boolean =false;  
  
  constructor(private personaService:personaService) { }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe( data => {
      this.bbdd=data;
    } )
    this.personaService.$contac.subscribe((valor) => {this.modalContact= valor})
  }

  openContact(){
    this.modalContact = true;
  }
}
