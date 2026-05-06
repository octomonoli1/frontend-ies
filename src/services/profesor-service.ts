import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profesor } from '../model/profesor';

@Injectable({
  providedIn: 'root',
})
export class ProfesorService {
  
  private baseUrl = 'http://localhost:8080/profesor';

  constructor(
    private _httpClient: HttpClient
  ){};

  getProfesor(): Observable<Profesor[]>{
    return this._httpClient.get<Profesor[]>(this.baseUrl);
  }

}
