import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponentComponent } from '../page-one-component/page-one-component.component';
import { PageTwoComponentComponent} from '../page-two-component/page-two-component.component';
import { PageAboutComponentComponent} from '../page-about-component/page-about-component.component';

const routes: Routes= [ 
  {path:"Inicio", component:PageOneComponentComponent},
  {path:"Contacto", component:PageTwoComponentComponent},
  {path:"Sobre-Nosotros", component:PageAboutComponentComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
