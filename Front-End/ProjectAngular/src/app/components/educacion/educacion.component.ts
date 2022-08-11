import { Component, OnInit } from '@angular/core';
import { educacionService } from 'src/app/servicios/educacion.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Educacion } from '../../interfaces/educacion/educacion.component';
import { FormControl, NgForm } from '@angular/forms';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  public educacion!: Educacion[];
  public editEducacion!: Educacion;
  public elimEducacion!: Educacion;
  isLogged = false;
  roles!: string[];
  isAdmin: boolean = false;

  name = new FormControl(''); 
  
  constructor(private educacionService: educacionService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getEducacion();
    this.roles = this.tokenService.getAuthorities();
    if(this.tokenService.getToken()){
      this.isLogged = true; 
    } else {
      this.isLogged = false;
    }
  }

  public getEducacion(): void {
    this.educacionService.getEducacion().subscribe(
      (response: Educacion[]) => {
        this.educacion = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public nuevaEducacion(addForm: NgForm):void {
    document.getElementById('nueva-educacion-modal')?.click();
    this.educacionService.nuevaEducacion(addForm.value).subscribe(
      (response: Educacion) => {
        console.log(response);
        this.getEducacion();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        console.log(addForm.value)
        alert(error.message);
        addForm.reset();
      }
    )
    
  }

  public modificarEducacion(id : number, educacion: Educacion):void {
      this.educacionService.modificarEducacion(id,educacion).subscribe(
      (response: Educacion) => {
        console.log(response);
        this.getEducacion();
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    
  }

  public eliminarEducacion(id: number):void {
    this.educacionService.eliminarEducacion(id).subscribe(
    (response: void) => {
      console.log(response);
      this.getEducacion();
      
    },
    (error: HttpErrorResponse) => {
      console.log(error.message);
    }
  )
  
}

  public onOpenModal(educacion: Educacion, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'nuevo') {
      button.setAttribute('data-target', '#nuevaEducacionModal');
    }
    if (mode === 'editar') {
      this.editEducacion = educacion;
      button.setAttribute('data-target', '#modificarEducacionModal');
    }
    if (mode === 'eliminar') {
      this.elimEducacion = educacion;
      button.setAttribute('data-target', '#eliminarEducacionModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
