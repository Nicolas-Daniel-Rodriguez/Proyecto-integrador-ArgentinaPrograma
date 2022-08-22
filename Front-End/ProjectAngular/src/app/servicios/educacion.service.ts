import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../interfaces/educacion/educacion.component';



@Injectable()
export class educacionService {
private apiBaseUrl = "http://localhost:8080"  

constructor(private http: HttpClient) { }

  public getEducacion(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.apiBaseUrl}/ver/educacion`);
  }

  public nuevaEducacion(educacion: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(`${this.apiBaseUrl}/nueva/educacion`, educacion);
  } 

  public modificarEducacion(educacionId: number, persona:Educacion): Observable<Educacion> {
    return this.http.put<Educacion>(`${this.apiBaseUrl}/modificar/educacion/${educacionId}`, persona);
  }

  public eliminarEducacion(educacionId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/eliminar/educacion/${educacionId}`);
  }

}
