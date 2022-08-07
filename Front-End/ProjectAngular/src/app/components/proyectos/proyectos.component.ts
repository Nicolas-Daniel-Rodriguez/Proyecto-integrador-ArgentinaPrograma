import { Component, OnInit } from '@angular/core';
import { proyectosService } from 'src/app/servicios/proyectos.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Proyectos } from '../../interfaces/proyectos/proyectos.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  public proyectos!: Proyectos[];
  roles!: string[];
  isAdmin: boolean = false;

  constructor(private proyectosService:proyectosService) { }

  ngOnInit(): void {
    this.getProyectos();
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
}
