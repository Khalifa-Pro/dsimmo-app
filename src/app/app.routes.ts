import { Routes } from '@angular/router';
import { AccueilComponent } from './client/accueil/accueil.component';
import { DetailsComponent } from './client/details/details.component';
import { ListeComponent } from './proprietaire/location/liste/liste.component';
import { AjoutComponent } from './proprietaire/location/ajout/ajout.component';
import { LocationComponent } from './agent/location/location.component';
import { DemandesComponent } from './agent/demandes/demandes.component';
import { LocationsComponent } from './agent/locations/locations.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ComptesComponent } from './admin/comptes/comptes.component';

export const routes: Routes = [

    // Routes de client
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
    },
    // Route de agent
    {
        path: 'agent-location',
        component: LocationComponent
    },
    {
        path: 'demandes-location-agent',
        component: DemandesComponent
    },
    {
        path: 'locations-agent',
        component: LocationsComponent
    },
    // Authentification
    {
        path: 'comptes',
        component: ComptesComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: '/login', // Redirige vers la route de connexion
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
