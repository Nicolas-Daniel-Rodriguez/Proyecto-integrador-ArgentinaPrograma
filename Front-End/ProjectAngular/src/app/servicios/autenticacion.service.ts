import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDTO } from '../interfaces/jwt-dto/jwt-dto.component';
import { LoginUsuario } from '../interfaces/login-usuario/login-usuario.component';
import { NuevoUsuario } from '../interfaces/nuevo-usuario/nuevo-usuario.component';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  
  url = environment.apiAuthUrl;;

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.url + 'nuevoUsuario', nuevoUsuario);
    
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO>{
    return this.httpClient.post<JwtDTO>(this.url + 'login', loginUsuario);
    
  }
}
