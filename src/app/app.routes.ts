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
import { DemanderLocationComponent } from './client/demander-location/demander-location.component';
import { ContratComponent } from './agent/contrat/contrat.component';
import { authGuard } from './auth/auth.guard';
import { MesAppatementsComponent } from './proprietaire/biens/mes-appatements/mes-appatements.component';

export const routes: Routes = [

    // Routes de client
    {
        path: '',
        redirectTo: '/accueil-dsimmo',
        pathMatch: 'full' // Assurez-vous que 'pathMatch' soit 'full'
    },
    {
        path: 'accueil-dsimmo',
        component: AccueilComponent
    },
    {
        path:'details-bien-immo/:id',
        component: DetailsComponent
    },
    {
        path: 'demander-location/:id',
        component: DemanderLocationComponent
    },

    // Route de creation contrat de location
    {
        path: 'creer-contrat-location/:idApp/:idProp/:emailClient',
        component: ContratComponent,
        canActivate:[authGuard]
    },

    // Routes de proprietaire
    {
        path: 'liste-location',
        component: ListeComponent,
        canActivate:[authGuard]
    },
    {
        path: 'mes-biens',
        component: MesAppatementsComponent,
        canActivate:[authGuard]
    },
    {
        path: 'ajout-appartement',
        component:AjoutComponent,
        canActivate:[authGuard]
    },
    // Route de agent
    {
        path: 'agent-location',
        component: LocationComponent,
        canActivate:[authGuard]
    },
    {
        path: 'demandes-location-agent',
        component: DemandesComponent,
        canActivate:[authGuard]
    },
    {
        path: 'locations-agent',
        component: LocationsComponent,
        canActivate:[authGuard]
    },
    // Authentification
    {
        path: 'comptes',
        component: ComptesComponent,
        canActivate:[authGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate:[authGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
