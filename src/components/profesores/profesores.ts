import { Component } from '@angular/core';
import { Profesor } from '../../model/profesor';
import { ProfesorService } from '../../services/profesor-service';

@Component({
  selector: 'app-profesores',
  imports: [],
  templateUrl: './profesores.html',
  styleUrl: './profesores.css',
})
export class Profesores {
  
  profesor: Profesor[] = [];
  
  constructor(
    private profesorService: ProfesorService
  ){};

  ngOnInit(): void {
    this.profesorService.getProfesor().subscribe(data => {
      this.profesor = data;
    })
  }

}
