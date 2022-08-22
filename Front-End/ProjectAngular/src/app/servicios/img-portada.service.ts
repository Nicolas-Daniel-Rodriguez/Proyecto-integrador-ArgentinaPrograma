import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ImgPortada } from '../interfaces/img-portada/img-portada.component';

@Injectable()
export class ImgPortadaService {
private apiBaseUrl = "https://intense-woodland-84122.herokuapp.com"  

constructor(private http: HttpClient) { }

  public getImgPortada(): Observable<ImgPortada[]>{
    return this.http.get<ImgPortada[]>(`${this.apiBaseUrl}/ver/imgportada`);
  }

  public nuevaImgPortada(imgPortada: ImgPortada): Observable<ImgPortada> {
    return this.http.post<ImgPortada>(`${this.apiBaseUrl}/nueva/imgportada`, imgPortada);
  } 

  public modificarImgPortada(imgPortadaId: number, imgPortada:ImgPortada): Observable<ImgPortada> {
    return this.http.put<ImgPortada>(`${this.apiBaseUrl}/modificar/imgportada/${imgPortadaId}`, imgPortada);
  }

  public eliminarImgPortada(imgPortadaId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/eliminar/imgportada/${imgPortadaId}`);
  }
}