import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../interfaces/persona/persona.component';
import { EventEmitter } from '@angular/core'



@Injectable()
export class personaService {
private apiBaseUrl = "https://nicolas-d-rodriguez.herokuapp.com" 

constructor(private http: HttpClient) { }

  public getPersonas(): Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.apiBaseUrl}/ver/personas`);
  }

  public nuevaPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(`${this.apiBaseUrl}/nueva/persona`, persona);
  } 

  public modificarPersona(personaId: number, persona:Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.apiBaseUrl}/modificar/persona/${personaId}`, persona);
  }

  public eliminarPersona(personaId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/eliminar/${personaId}`);
  }

    /* observable switch */
    $modal = new EventEmitter<any>();

    /* observable Contact Modal */
    $contac = new EventEmitter<any>();
}