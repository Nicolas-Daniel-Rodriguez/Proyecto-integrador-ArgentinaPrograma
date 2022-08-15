import { Component, OnInit } from '@angular/core';
import { educacionService } from 'src/app/servicios/educacion.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Educacion } from '../../interfaces/educacion/educacion.component';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
  

  formEd!: FormGroup;
  
  constructor(private educacionService: educacionService, private tokenService: TokenService, private formBuilder:FormBuilder) { 

    this.formEd = this.formBuilder.group({
      titulo: ['', [Validators.maxLength(50),Validators.required]],
      lugarEstudio: ['', [Validators.maxLength(100),Validators.required]],
      fechaInicio: ['', [Validators.required]],
      fechaFin: ['',[Validators.required]],
      certificado: ['', [Validators.maxLength(100)]],
    }); 
  }

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

  public nuevaEducacion(addForm: any):void {
    document.getElementById('nueva-educacion-modal')?.click();
    this.educacionService.nuevaEducacion(addForm.value).subscribe(
      (response: Educacion) => {
        this.getEducacion();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        
      }
    )
    
  }

  public modificarEducacion(id : number, educacion: Educacion):void {
      this.educacionService.modificarEducacion(id,educacion).subscribe(
      (response: Educacion) => {
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
      this.formEd.reset();
    }
    if (mode === 'editar') {
      this.editEducacion = educacion;
      button.setAttribute('data-target', '#modificarEducacionModal');
      this.formEd.reset();
    }
    if (mode === 'eliminar') {
      this.elimEducacion = educacion;
      button.setAttribute('data-target', '#eliminarEducacionModal');
    }
    container?.appendChild(button);
    button.click();
  }

  get tituloF(){
    return this.formEd.get("titulo");
  }
  get lugarEstudioF(){
    return this.formEd.get("lugarEstudio");
  }
  get FechaInicioF(){
    return this.formEd.get("fechaInicio");
  }
  get FechaFinF(){
    return this.formEd.get("fechaFin");
  }
  get CertificadoF(){
    return this.formEd.get("certificado");
  }
}
