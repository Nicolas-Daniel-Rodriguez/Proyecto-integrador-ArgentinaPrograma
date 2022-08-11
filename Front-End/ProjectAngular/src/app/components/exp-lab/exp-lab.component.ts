import { Component, OnInit } from '@angular/core';
import { experienciaService } from 'src/app/servicios/experiencia.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Experiencia } from '../../interfaces/experiencia/experiencia.component';
import { TokenService } from 'src/app/servicios/token.service';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-exp-lab',
  templateUrl: './exp-lab.component.html',
  styleUrls: ['./exp-lab.component.css']
})
export class ExpLabComponent implements OnInit {
  public experiencia!: Experiencia[];
  roles!: string[];
  public editExperiencia!: Experiencia;
  public elimExperiencia!: Experiencia;
  isLogged = false;


  name = new FormControl('');  
  
  constructor(private experienciaService:experienciaService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getExperiencia();
    this.roles = this.tokenService.getAuthorities();
    if(this.tokenService.getToken()){
      this.isLogged = true; 
    } else {
      this.isLogged = false;
    }
  }

  public getExperiencia(): void {
    this.experienciaService.getExperiencia().subscribe(
      (response: Experiencia[]) => {
        this.experiencia = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public nuevaExperiencia(addForm: NgForm):void {
    document.getElementById('nueva-experiencia-modal')?.click();
    this.experienciaService.nuevaExperiencia(addForm.value).subscribe(
      (response: Experiencia) => {
        this.getExperiencia();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    )
    
  }

  public modificarExperiencia(id : number, experiencia: Experiencia):void {
      this.experienciaService.modificarExperiencia(id,experiencia).subscribe(
      (response: Experiencia) => {
        this.getExperiencia();
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    
  }

  public eliminarExperiencia(id: number):void {
    this.experienciaService.eliminarExperiencia(id).subscribe(
    (response: void) => {
      this.getExperiencia();
      
    },
    (error: HttpErrorResponse) => {
      console.log(error.message);
    }
  )
  
}

  public onOpenModal(experiencia: Experiencia, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'nuevo') {
      button.setAttribute('data-target', '#nuevaExperienciaModal');
    }
    if (mode === 'editar') {
      this.editExperiencia = experiencia;
      button.setAttribute('data-target', '#modificarExperienciaModal');
    }
    if (mode === 'eliminar') {
      this.elimExperiencia = experiencia;
      button.setAttribute('data-target', '#eliminarExperienciaModal');
    }
    container?.appendChild(button);
    button.click();
  }
}

