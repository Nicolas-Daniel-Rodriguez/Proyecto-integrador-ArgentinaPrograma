import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { AcercaDeComponent } from '../components/acerca-de/acerca-de.component';
import { EducacionComponent } from '../components/educacion/educacion.component';
import { ExpLabComponent } from '../components/exp-lab/exp-lab.component';
import { HabilidadesComponent } from '../components/habilidades/habilidades.component'; 
import { ProyectosComponent } from '../components/proyectos/proyectos.component';
import { LoginComponent } from '../login/login.component'

const routes: Routes= [ 
  {path:"Inicio", component:AcercaDeComponent},
  {path:"Exp-Laboral", component:ExpLabComponent},
  {path:"Educacion", component:EducacionComponent},
  {path:"Habilidades", component:HabilidadesComponent},
  {path:"Proyectos", component:ProyectosComponent},
  {path:"Login", component:LoginComponent},
  {path:"Contacto", component:AppComponent},
  {path:"**", pathMatch: 'full', redirectTo: 'Inicio'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
