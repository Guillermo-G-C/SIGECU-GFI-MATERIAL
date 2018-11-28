import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lugar } from '../models/lugar';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  private baseUrl: string = 'http://localhost:8888/sigecu/lugares';

  constructor(private http: HttpClient) { }

  getLugaresList() {
    return this.http.get<Lugar[]>(this.baseUrl);
  }
}
