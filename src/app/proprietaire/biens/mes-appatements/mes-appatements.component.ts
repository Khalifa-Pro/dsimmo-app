import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../layouts/prop_layouts/navbarprop/navbarprop.component';
import { SidebarComponent } from '../../../layouts/prop_layouts/sidebarprop/sidebar.component';
import { Appartement } from '../../../models/Appartement';
import { AuthService } from '../../../auth/auth.service';
import { AppartementService } from '../../../services/Appartement.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mes-appatements',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    CommonModule,
    RouterModule
  ],
  templateUrl: './mes-appatements.component.html',
  styleUrl: './mes-appatements.component.css'
})
export class MesAppatementsComponent implements OnInit {

  Locs: Array<Appartement> = [];
  
  constructor(
    private appartService: AppartementService,
    private authService: AuthService
  ) {}


  appart: Appartement;

  ngOnInit(): void {
    const proprietaireId = this.authService.getIdProprietaire();
    console.log("ID_PROP: "+proprietaireId);
    
    if (proprietaireId) {
      this.Locations(proprietaireId); // Charger les appartements de ce propriétaire
    } else {
      console.error('Utilisateur non authentifié ou ID non disponible.');
    }
  }

  // Méthode pour charger les locations
  Locations(id: number): void {
    this.appartService.mesAppartements(id)
    .subscribe(
      (data: Appartement[]) => {
        this.Locs = data; // Stocker les appartements récupérés
        console.log(this.Locs);
        
      },
      (error) => {
        console.error('Erreur lors du chargement des appartements', error);
      }
    );
  }

}
