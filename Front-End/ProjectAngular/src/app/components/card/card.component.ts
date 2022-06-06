import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  bbdd:any;
  modalContact:boolean =false;  
  
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe( data => {
      this.bbdd=data;
    } )
    this.datosPortfolio.$contac.subscribe((valor) => {this.modalContact= valor})
  }

  openContact(){
    this.modalContact = true;
  }
}
