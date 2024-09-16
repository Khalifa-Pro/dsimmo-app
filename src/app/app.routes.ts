import { Routes } from '@angular/router';
import { AccueilComponent } from './client/accueil/accueil.component';
import { DetailsComponent } from './client/details/details.component';
import { ListeComponent } from './proprietaire/location/liste/liste.component';
import { AjoutComponent } from './proprietaire/location/ajout/ajout.component';

export const routes: Routes = [

    // Routes de client
    {
        path: '',
        redirectTo: '/accueil-dsimmo', // Redirige vers la route d'accueil
        pathMatch: 'full'
    },
    {
        path: 'accueil-dsimmo',
        component: AccueilComponent
    },
    {
        path:'details-bien-immo',
        component: DetailsComponent
    },

    // Routes de proprietaire
    {
        path: 'liste-location',
        component: ListeComponent
    },
    {
        path: 'ajout-appartement',
        component:AjoutComponent
    }
];
