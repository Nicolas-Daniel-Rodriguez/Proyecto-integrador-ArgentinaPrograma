import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  /* en el json va a ir una url de la base de datos */
  obtenerDatos():Observable<any> {  
    return this.http.get('./assets/data/data.json');
  }

  /* observable switch */
  $modal = new EventEmitter<any>();

  /* observable Contact Modal */
  $contac = new EventEmitter<any>();
}
