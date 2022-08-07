import { Component } from '@angular/core';
import { fadeAnimation } from './animation';
import { personaService } from './servicios/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation],
  providers: [personaService]
})
export class AppComponent{
  title = 'ProjectAngular';
 constructor(private personaService: personaService){}

 ngOnInit(){
  this.personaService.getPersonas().subscribe((res)=>{
    console.log("res", res);
  })
 }
}

