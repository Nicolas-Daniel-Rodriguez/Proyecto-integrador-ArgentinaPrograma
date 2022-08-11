import { Component, OnInit } from '@angular/core';
import { proyectosService } from 'src/app/servicios/proyectos.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Proyectos } from '../../interfaces/proyectos/proyectos.component';
import { FormControl, NgForm } from '@angular/forms';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  public proyectos!: Proyectos[];
  public editProyecto!: Proyectos;
  public elimProyecto!: Proyectos;
  isLogged = false;
  roles!: string[];
  

  name = new FormControl(''); 
  
  constructor(private proyectosService:proyectosService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getProyectos();
    this.roles = this.tokenService.getAuthorities();
    if(this.tokenService.getToken()){
      this.isLogged = true; 
    } else {
      this.isLogged = false;
    }
  }

  public getProyectos(): void {
    this.proyectosService.getProyectos().subscribe(
      (response: Proyectos[]) => {
        this.proyectos = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  
  public nuevoProyecto(addForm: NgForm):void {
    document.getElementById('nuevo-proyectos-modal')?.click();
    this.proyectosService.nuevoProyecto(addForm.value).subscribe(
      (response: Proyectos) => {
        this.getProyectos();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    )
    
  }

  public modificarProyecto(id : number, proyecto: Proyectos):void {
      this.proyectosService.modificarProyecto(id,proyecto).subscribe(
      (response: Proyectos) => {
        this.getProyectos();
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    
  }

  public eliminarProyecto(id: number):void {
    this.proyectosService.eliminarProyecto(id).subscribe(
    (response: void) => {
      this.getProyectos();
      
    },
    (error: HttpErrorResponse) => {
      console.log(error.message);
    }
  )
  
}

  public onOpenModal(proyecto: Proyectos, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'nuevo') {
      button.setAttribute('data-target', '#nuevoProyectoModal');
    }
    if (mode === 'editar') {
      this.editProyecto = proyecto;
      button.setAttribute('data-target', '#modificarProyectoModal');
    }
    if (mode === 'eliminar') {
      this.elimProyecto = proyecto;
      button.setAttribute('data-target', '#eliminarProyectoModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
