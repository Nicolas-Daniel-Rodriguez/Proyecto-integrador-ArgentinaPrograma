import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  bbdd:any;
  ocupacionList:any;
  modalContact:boolean = false;

  constructor(private datosPortfolio:PortfolioService,) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe( data => {
      this.bbdd=data;
      this.ocupacionList=data.ocupacion;
    });
    this.datosPortfolio.$contac.subscribe((valor) => {this.modalContact= valor})
  }

  openContact(){
    this.modalContact = true;
  }
}
