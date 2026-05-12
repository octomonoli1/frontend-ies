import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Matricula } from '../../model/matricula';
import { MatriculaService } from '../../services/matricula-service';

@Component({
  selector: 'app-matriculas',
  imports: [CommonModule],
  templateUrl: './matriculas.html',
  styleUrl: './matriculas.css',
})
export class Matriculas {

  matriculas: Matricula[] = [];
    
    constructor(
      private matriculaService: MatriculaService
    ){};
  
    ngOnInit(): void {
      this.matriculaService.getMatriculas().subscribe(data => {
        this.matriculas = data;
      })
    }

}
