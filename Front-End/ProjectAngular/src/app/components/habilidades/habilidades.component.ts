import { Component, OnInit } from '@angular/core';
import { habilidadesService } from 'src/app/servicios/habilidades.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Habilidades } from '../../interfaces/habilidades/habilidades.component';
import { FormControl, NgForm } from '@angular/forms';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  public habilidades!: Habilidades[];
  public editHabilidad!: Habilidades;
  public elimHabilidad!: Habilidades;
  isLogged = false;
  roles!: string[];

  name = new FormControl(''); 
  
  constructor(private habilidadesService:habilidadesService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getHabilidades();
    this.roles = this.tokenService.getAuthorities();
    if(this.tokenService.getToken()){
      this.isLogged = true; 
    } else {
      this.isLogged = false;
    }
  }

  public getHabilidades(): void {
    this.habilidadesService.getHabilidades().subscribe(
      (response: Habilidades[]) => {
        this.habilidades = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  
  public nuevaHabilidad(addForm: NgForm):void {
    document.getElementById('nueva-habilidad-modal')?.click();
    this.habilidadesService.nuevaHabilidad(addForm.value).subscribe(
      (response: Habilidades) => {
        this.getHabilidades();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    )
    
  }

  public modificarHabilidad(id : number, habilidad: Habilidades):void {
      this.habilidadesService.modificarHabilidad(id,habilidad).subscribe(
      (response: Habilidades) => {
        this.getHabilidades();
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    
  }

  public eliminarHabilidad(id: number):void {
    this.habilidadesService.eliminarHabilidad(id).subscribe(
    (response: void) => {
      this.getHabilidades();
      
    },
    (error: HttpErrorResponse) => {
      console.log(error.message);
    }
  )
  
}

  public onOpenModal(habilidad: Habilidades, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'nuevo') {
      button.setAttribute('data-target', '#nuevaHabilidadModal');
    }
    if (mode === 'editar') {
      this.editHabilidad = habilidad;
      button.setAttribute('data-target', '#modificarHabilidadModal');
    }
    if (mode === 'eliminar') {
      this.elimHabilidad = habilidad;
      button.setAttribute('data-target', '#eliminarHabilidadModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
