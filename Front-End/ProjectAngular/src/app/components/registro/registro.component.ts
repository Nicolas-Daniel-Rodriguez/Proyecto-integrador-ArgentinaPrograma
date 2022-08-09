import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../servicios/token.service';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { Router } from '@angular/router';
import { NuevoUsuario } from '../../interfaces/nuevo-usuario/nuevo-usuario.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

  export class RegistroComponent implements OnInit {

    nuevoUsuario!: NuevoUsuario;
    nombre!: string;
    nombreUsuario!: string;
    email!: string;
    password!: string;
    errMsj!: string;
    isLogged = false;
  
    constructor(
      private tokenService: TokenService,
      private AutenticacionService: AutenticacionService,
      private router: Router,
    ) { }
  
    ngOnInit() {
      if (this.tokenService.getToken()) {
        this.isLogged = true;
      }
    }
  
    onRegister(): void {
      this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password);
      this.AutenticacionService.nuevo(this.nuevoUsuario).subscribe(
        data => {
          console.log("Cuenta Creada");
          this.router.navigate(['/login']);
        },
        err => {
          this.errMsj = err.error.mensaje;
          console.log(err.error.message);
        }
      );
    }
  
  }