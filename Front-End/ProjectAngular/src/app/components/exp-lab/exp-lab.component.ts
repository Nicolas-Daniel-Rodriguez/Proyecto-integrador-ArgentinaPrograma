import { Component, OnInit } from '@angular/core';
import { experienciaService } from 'src/app/servicios/experiencia.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Experiencia } from '../../interfaces/experiencia/experiencia.component';
import { TokenService } from 'src/app/servicios/token.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

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


  formExp!: FormGroup;
  
  constructor(private experienciaService:experienciaService, private tokenService: TokenService, private formBuilder:FormBuilder) { 
    this.formExp = this.formBuilder.group({
      titulo: ['', [Validators.maxLength(50),Validators.required]],
      fechaInicio: ['', [Validators.required]],
      fechaFin: ['',[Validators.required]],
      descripcion: ['', [Validators.maxLength(500),Validators.required]],
      imgExp: ['', [Validators.maxLength(100)]],
    }); 
  }

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

  public nuevaExperiencia(addForm: any):void {
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
      this.formExp.reset();
    }
    if (mode === 'editar') {
      this.editExperiencia = experiencia;
      button.setAttribute('data-target', '#modificarExperienciaModal');
      this.formExp.reset();
    }
    if (mode === 'eliminar') {
      this.elimExperiencia = experiencia;
      button.setAttribute('data-target', '#eliminarExperienciaModal');
    }
    container?.appendChild(button);
    button.click();
  }

  get tituloF(){
    return this.formExp.get("titulo");
  }
  get FechaInicioF(){
    return this.formExp.get("fechaInicio");
  }
  get FechaFinF(){
    return this.formExp.get("fechaFin");
  }
  get descripcionF(){
    return this.formExp.get("descripcion");
  }
  get imgExpF(){
    return this.formExp.get("imgExp");
  }
}

