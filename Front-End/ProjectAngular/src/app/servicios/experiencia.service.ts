import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../interfaces/experiencia/experiencia.component';



@Injectable()
export class experienciaService {
private apiBaseUrl = "https://nicolas-d-rodriguez.herokuapp.com"  

constructor(private http: HttpClient) { }

  public getExperiencia(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.apiBaseUrl}/ver/experiencia`);
  }

  public nuevaExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(`${this.apiBaseUrl}/nueva/experiencia`, experiencia);
  } 

  public modificarExperiencia(experienciaId: number, experiencia:Experiencia): Observable<Experiencia> {
    return this.http.put<Experiencia>(`${this.apiBaseUrl}/modificar/experiencia/${experienciaId}`, experiencia);
  }

  public eliminarExperiencia(experienciaId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/eliminar/experiencia/${experienciaId}`);
  }

}