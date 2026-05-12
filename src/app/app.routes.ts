import { Routes } from '@angular/router';
import { Alumnos } from '../components/alumnos/alumnos';
import { Asignaturas } from '../components/asignaturas/asignaturas';
import { Landing } from '../components/landing/landing';
import { Matriculas } from '../components/matriculas/matriculas';
import { Profesores } from '../components/profesores/profesores';

export const routes: Routes = [
    {path: '', component: Landing},
    {path: 'inicio', component: Landing},
    {path: 'alumnos', component: Alumnos},
    {path: 'profesores', component: Profesores},
    {path: 'asignaturas', component: Asignaturas},
    {path: 'matriculas', component: Matriculas}
];
