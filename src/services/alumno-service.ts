import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../model/alumno';

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  private baseUrl = 'http://localhost:8080/alumno';

  constructor(
    private _httpClient: HttpClient
  ){};

  getAlumnos(): Observable<Alumno[]>{
    return this._httpClient.get<Alumno[]>(this.baseUrl);
  }
}
