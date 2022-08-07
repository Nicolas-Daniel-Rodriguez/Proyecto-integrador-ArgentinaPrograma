import { Component, OnInit } from '@angular/core';
import { habilidadesService } from 'src/app/servicios/habilidades.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Habilidades } from '../../interfaces/habilidades/habilidades.component';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  public habilidades!: Habilidades[];
  roles!: string[];
  isAdmin: boolean = false;

  constructor(private habilidadesService:habilidadesService) { }

  ngOnInit(): void {
    this.getHabilidades();
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
}
