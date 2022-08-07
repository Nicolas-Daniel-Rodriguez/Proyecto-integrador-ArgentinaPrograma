import { Component, OnInit } from '@angular/core';
import { educacionService } from 'src/app/servicios/educacion.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Educacion } from '../../interfaces/educacion/educacion.component';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  public educacion!: Educacion[];
  roles!: string[];
  isAdmin: boolean = false;

  constructor(private educacionService: educacionService) { }

  ngOnInit(): void {
    this.getEducacion();
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
}
