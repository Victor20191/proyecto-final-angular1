import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { PersonajesComponent } from './personajes/personajes/personajes.component';
import { CapitulosComponent } from './capitulos/capitulos/capitulos.component';
import { LocacionesComponent } from './locaciones/locaciones/locaciones.component';



export const routes: Routes = [

    {
        path:'',
        component:NavbarComponent
    },
    {
        path:'personajes',
        component:PersonajesComponent
    },
    {
        path:'capitulos',
        component:CapitulosComponent
    },
    {
        path:'locaciones',
        component:LocacionesComponent
    }
];
