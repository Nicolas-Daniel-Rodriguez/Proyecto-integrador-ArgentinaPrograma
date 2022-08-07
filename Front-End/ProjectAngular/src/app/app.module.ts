import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routes/app-routes';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from "./login/login.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { AcercadeComponent } from './components/acerca-de/acerca-de.component';
import { ExpLabComponent } from './components/exp-lab/exp-lab.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CardComponent } from './components/card/card.component';
import { personaService } from './servicios/persona.service';
import { educacionService } from './servicios/educacion.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AcercadeComponent,
    ExpLabComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ContactoComponent,
    CardComponent
  ],
  providers: [personaService, educacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
