import { Component, OnInit } from '@angular/core';
import { LoginUsuario } from '../interfaces/login-usuario/login-usuario.component';
import { Router } from '@angular/router';
import { AutenticacionService } from './../servicios/autenticacion.service';
import { TokenService } from '../servicios/token.service';
import { personaService } from 'src/app/servicios/persona.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errorMessage!: string


  constructor(
    private modalSS:personaService,
    private tokenService: TokenService,
    private authService: AutenticacionService,
    private router: Router
  ) {
    
  }

  ngOnInit() {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe({
      next: (data) => {
        this.isLogged = true;
        this.isLoginFail = false;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.isLogged = false;
        this.isLoginFail = true;
        console.log(err);
        this.errorMessage = err.error.message;
        console.log(err.error.message);
      }
    })
  }

  closeModal(){
    this.modalSS.$modal.emit(false);
  }
}
