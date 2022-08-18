import { Component, OnInit } from '@angular/core';
import { proyectosService } from 'src/app/servicios/proyectos.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Proyectos } from '../../interfaces/proyectos/proyectos.component';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
  

  formProy!: FormGroup;
  
  constructor(private proyectosService:proyectosService, private tokenService: TokenService, private formBuilder:FormBuilder) {
    this.formProy = this.formBuilder.group({
      titulo: ['', [Validators.maxLength(100),Validators.required]],
      descripcion: ['', [Validators.maxLength(1500),Validators.required]],
      logoProy: ['', [Validators.maxLength(100)]],
      link: ['', [Validators.maxLength(100),Validators.required]],
      imgDemo: ['', [Validators.maxLength(100)]],
    }); 
   }

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

  
  public nuevoProyecto(addForm: any):void {
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
      this.formProy.reset();
    }
    if (mode === 'editar') {
      this.editProyecto = proyecto;
      button.setAttribute('data-target', '#modificarProyectoModal');
      this.formProy.reset();
    }
    if (mode === 'eliminar') {
      this.elimProyecto = proyecto;
      button.setAttribute('data-target', '#eliminarProyectoModal');
    }
    container?.appendChild(button);
    button.click();
  }

  get tituloF(){
    return this.formProy.get("titulo");
  }
  get descripcionF(){
    return this.formProy.get("descripcion");
  }
  get logoProyF(){
    return this.formProy.get("logoProy");
  }
  get linkF(){
    return this.formProy.get("link");
  }
  get imgDemoF(){
    return this.formProy.get("imgDemo");
  }
}
