import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AcercaDe } from '../interfaces/acerca-de/acerca-de.component';

@Injectable()
export class acercaDeService {
private apiBaseUrl = environment.apiBaseUrl  

constructor(private http: HttpClient) { }

  public getAcercaDe(): Observable<AcercaDe[]>{
    return this.http.get<AcercaDe[]>(`${this.apiBaseUrl}/ver/acercade`);
  }

  public nuevaAcercaDe(acercaDe: AcercaDe): Observable<AcercaDe> {
    return this.http.post<AcercaDe>(`${this.apiBaseUrl}/nueva/acercade`, acercaDe);
  } 

  public modificarAcercaDe(acercaDeId: number, acercaDe:AcercaDe): Observable<AcercaDe> {
    return this.http.put<AcercaDe>(`${this.apiBaseUrl}/modificar/acercade/${acercaDeId}`, acercaDe);
  }

  public eliminarAcercaDe(acercaDeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/eliminar/acercade/${acercaDeId}`);
  }
}