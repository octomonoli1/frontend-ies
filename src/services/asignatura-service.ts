import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asignatura } from '../model/asignatura';

@Injectable({
  providedIn: 'root',
})
export class AsignaturaService {
    
  private baseUrl = 'http://localhost:8080/asignatura';

  constructor(
    private _httpClient: HttpClient
  ){};

  getAsignaturas(): Observable<Asignatura[]>{
    return this._httpClient.get<Asignatura[]>(this.baseUrl);
  }

}
