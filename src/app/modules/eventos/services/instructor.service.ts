import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Instructor } from '../models/instructor';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  private baseUrl: string = 'http://localhost:8888/sigecu/instructores';

  constructor(private http: HttpClient) { }

  getInstructoresList(){
    return this.http.get<Instructor[]>(this.baseUrl);
  }
}
