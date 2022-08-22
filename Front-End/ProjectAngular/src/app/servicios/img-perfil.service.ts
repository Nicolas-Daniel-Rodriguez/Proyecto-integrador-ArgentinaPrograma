import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ImgPerfil } from '../interfaces/img-perfil/img-perfil.component';

@Injectable()
export class ImgPerfilService {
private apiBaseUrl = "http://localhost:8080" 

constructor(private http: HttpClient) { }

  public getImgPerfil(): Observable<ImgPerfil[]>{
    return this.http.get<ImgPerfil[]>(`${this.apiBaseUrl}/ver/imgperfil`);
  }

  public nuevaImgPerfil(imgPerfil: ImgPerfil): Observable<ImgPerfil> {
    return this.http.post<ImgPerfil>(`${this.apiBaseUrl}/nueva/imgperfil`, imgPerfil);
  } 

  public modificarImgPerfil(imgPerfilId: number, imgPerfil:ImgPerfil): Observable<ImgPerfil> {
    return this.http.put<ImgPerfil>(`${this.apiBaseUrl}/modificar/imgperfil/${imgPerfilId}`, imgPerfil);
  }

  public eliminarImgPerfil(imgPerfilId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiBaseUrl}/eliminar/imgperfil/${imgPerfilId}`);
  }
}