import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../layouts/agent_layouts/navbaragent/navbaragent.component';
import { SidebarComponent } from '../../layouts/agent_layouts/sidebaragent/sidebaragent.component';
import { ActivatedRoute } from '@angular/router';
import { DemandeLocation } from '../../models/DemandeLocation';
import { DemanderLocationService } from '../../services/DemandeLocation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    CommonModule
  ],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent implements OnInit {

  Locs: Array<DemandeLocation> = [];
  
  constructor(
    private demandeLocService: DemanderLocationService,
  ) {}

  demandeLocationId: number;
  demandeLocDetails: DemandeLocation;

  ngOnInit(): void {
    this.Locations();
    //this.demandeLocationId = +this.routeAct.snapshot.paramMap.get('id');
  }

  // Méthode pour charger les locations
  Locations(): void {
    this.demandeLocService.locations()
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
