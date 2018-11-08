import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eventos } from '../models/eventos';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private baseUrl: string = 'http://localhost:8888/sigecu/eventos';

  constructor(private http: HttpClient) { }

  getEvento(id: number){
    return this.http.get<Eventos>(this.baseUrl+'/'+ id);
  }

  /*createEvento(evento: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, evento);
  }
 
  updateEvento(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
  deleteEvento(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
 
  getEventosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }*/

}


/**
https://grokonez.com/spring-framework/spring-data/spring-boot-angular-6-example-spring-data-jpa-rest-mysql-crud-example
https://developer.okta.com/blog/2018/08/22/basic-crud-angular-7-and-spring-boot-2
https://www.devglan.com/angular/angular-6-example

 */