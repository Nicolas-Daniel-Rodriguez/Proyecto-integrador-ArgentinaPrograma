import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Habilidades } from '../interfaces/habilidades/habilidades.component';



@Injectable()
export class habilidadesService {
private apiBaseUrl = "https://nicolas-d-rodriguez.herokuapp.com"  

constructor(private http: HttpClient) { }

  public getHabilidades(): Observable<Habilidades[]>{
    return this.http.get<Habilidades[]>(`${this.apiBaseUrl}/ver/habilidades`);
  }

  public nuevaHabilidad(habilidades: Habilidades): Observable<Habilidades> {
    return this.http.post<Habilidades>(`${this.apiBaseUrl}/nueva/habilidad`, habilidades);
  } 

  public modificarHabilidad(habilidadesId: number, habilidades:Habilidades): Observable<Habilidades> {
    return this.http.put<Habilidades>(`${this.apiBaseUrl}/modificar/habilidad/${habilidadesId}`, habilidades);
  }

  public eliminarHabilidad(habilidadesId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/eliminar/habilidad/${habilidadesId}`);
  }

}