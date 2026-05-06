import { Routes } from '@angular/router';
import { Alumnos } from '../components/alumnos/alumnos';
import { Landing } from '../components/landing/landing';

export const routes: Routes = [
    {path: '', component: Landing},
    {path: 'inicio', component: Landing},
    {path: 'alumnos', component: Alumnos},
];
