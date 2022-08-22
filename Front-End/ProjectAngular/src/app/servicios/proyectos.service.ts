import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyectos } from '../interfaces/proyectos/proyectos.component';



@Injectable()
export class proyectosService {
private apiBaseUrl = "http://localhost:8080" 

constructor(private http: HttpClient) { }

  public getProyectos(): Observable<Proyectos[]>{
    return this.http.get<Proyectos[]>(`${this.apiBaseUrl}/ver/proyectos`);
  }

  public nuevoProyecto(proyectos: Proyectos): Observable<Proyectos> {
    return this.http.post<Proyectos>(`${this.apiBaseUrl}/nuevo/proyecto`, proyectos);
  } 

  public modificarProyecto(proyectosId: number, proyectos:Proyectos): Observable<Proyectos> {
    return this.http.put<Proyectos>(`${this.apiBaseUrl}/modificar/proyecto/${proyectosId}`, proyectos);
  }

  public eliminarProyecto(proyectosId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/eliminar/proyecto/${proyectosId}`);
  }

}
