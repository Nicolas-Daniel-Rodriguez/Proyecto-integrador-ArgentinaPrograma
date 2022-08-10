import { Component, OnInit } from '@angular/core';
import { personaService } from 'src/app/servicios/persona.service';
import { Persona } from '../../interfaces/persona/persona.component';
import { HttpErrorResponse } from '@angular/common/http';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged = false;
  public personas!: Persona[];
  roles!: string[];
  isAdmin: boolean = false;
  modalSwitch:boolean = false;
  bbdd:any;

  constructor(private personaService:personaService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getPersonas();
    this.personaService.$modal.subscribe((valor) => {this.modalSwitch= valor})
    this.personaService.getPersonas().subscribe( data => {
      this.bbdd=data;})
      if(this.tokenService.getToken()){
        this.isLogged=true;
      }else{
        this.isLogged = false;
      }
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

  openModal(){
    this.modalSwitch = true;
  }

  onLogout():void{
    this.tokenService.logOut();
    window.location.reload();
  }
}
