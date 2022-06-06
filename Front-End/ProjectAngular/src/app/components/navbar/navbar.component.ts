import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  modalSwitch:boolean = false;
  bbdd:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.$modal.subscribe((valor) => {this.modalSwitch= valor})
    this.datosPortfolio.obtenerDatos().subscribe( data => {
      this.bbdd=data;})
  }

  openModal(){
    this.modalSwitch = true;
  }

}
