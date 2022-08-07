import { Component, OnInit } from '@angular/core';
import { experienciaService } from 'src/app/servicios/experiencia.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Experiencia } from '../../interfaces/experiencia/experiencia.component';

@Component({
  selector: 'app-exp-lab',
  templateUrl: './exp-lab.component.html',
  styleUrls: ['./exp-lab.component.css']
})
export class ExpLabComponent implements OnInit {
  public experiencia!: Experiencia[];
  roles!: string[];
  isAdmin: boolean = false;

  constructor(private experienciaService:experienciaService) { }

  ngOnInit(): void {
    this.getExperiencia();
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
}

