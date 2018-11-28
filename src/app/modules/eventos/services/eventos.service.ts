import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Evento } from '../models/evento';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api-response';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private baseUrl: string = 'http://localhost:8888/sigecu/eventos';

  constructor(private http: HttpClient) { }

  getEventoById(idEventos: number) {
    return this.http.get<Evento>(this.baseUrl+'/'+ idEventos);
  }
  /*getEventoById(id: number){
    return this.http.get(`${this.baseUrl}/${id}`);
  }*/

  /*getEventosList() {
    return this.http.get<Evento[]>(this.baseUrl);
  }*/
  getEventosList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  createEvento(evento: Evento) {
    return this.http.post(this.baseUrl, evento);
  }
  /*createEvento(evento: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, evento);
  }*/
  
  updateEvento(evento: Evento): Observable<any> {
    return this.http.put(this.baseUrl +'/'+ evento.idEventos, evento);
  }
  /*updateEvento(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }*/
  
  deleteEvento(idEventos: number) {
    return this.http.delete(this.baseUrl +'/'+ idEventos);
  }
  /*deleteEvento(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }*/

}


/**
https://www.devglan.com/angular/angular-7-crud-example
https://grokonez.com/spring-framework/spring-data/spring-boot-angular-6-example-spring-data-jpa-rest-mysql-crud-example
https://developer.okta.com/blog/2018/08/22/basic-crud-angular-7-and-spring-boot-2

 */