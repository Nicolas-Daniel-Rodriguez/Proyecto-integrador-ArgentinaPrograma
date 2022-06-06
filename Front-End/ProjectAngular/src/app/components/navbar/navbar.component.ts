import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  modalSwitch:boolean = false;

  constructor(private modalSS:PortfolioService) { }

  ngOnInit(): void {
    this.modalSS.$modal.subscribe((valor) => {this.modalSwitch= valor})
  }

  openModal(){
    this.modalSwitch = true;
  }

}
