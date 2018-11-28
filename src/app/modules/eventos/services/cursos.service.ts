import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private baseUrl: string = 'http://localhost:8888/sigecu/cursos';

  constructor(private http: HttpClient) { }

  getCursosList(){
    return this.http.get<Curso[]>(this.baseUrl);
  }
}
