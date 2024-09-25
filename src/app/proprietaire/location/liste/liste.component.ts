import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../layouts/prop_layouts/navbarprop/navbarprop.component';
import { SidebarComponent } from '../../../layouts/prop_layouts/sidebarprop/sidebar.component';
import { RouterLink } from '@angular/router';
import { AppartementService } from '../../../services/Appartement.service'; // Importer le service
import { Appartement } from '../../../models/Appartement'; // Importer le modèle Appartement (si existant)
import { CommonModule } from '@angular/common';
import { DemandeLocation } from '../../../models/DemandeLocation';
import { DemanderLocationService } from '../../../services/DemandeLocation.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    RouterLink,
    CommonModule
  ],
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  Locs: Array<DemandeLocation> = [];
  
  constructor(
    private appartService: AppartementService,
    private authService: AuthService
  ) {}

  demandeLocDetails: DemandeLocation;

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
    this.appartService.appartementsAcceptes(id)
    .subscribe(
      (data: DemandeLocation[]) => {
        this.Locs = data; // Stocker les appartements récupérés
        console.log(this.Locs);
        
      },
      (error) => {
        console.error('Erreur lors du chargement des appartements', error);
      }
    );
  }
}
