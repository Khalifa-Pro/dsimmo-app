import { Component } from '@angular/core';
import { NavbarComponent } from '../../layouts/agent_layouts/navbaragent/navbaragent.component';
import { SidebarComponent } from '../../layouts/agent_layouts/sidebaragent/sidebaragent.component';
import { DemandeLocation } from '../../models/DemandeLocation';
import { DemanderLocationService } from '../../services/DemandeLocation.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-demandes',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    CommonModule,
    RouterModule
  ],
  templateUrl: './demandes.component.html',
  styleUrl: './demandes.component.css'
})
export class DemandesComponent {

  demandeLocs: Array<DemandeLocation> = [];
  
  constructor(
    private demandeLocService: DemanderLocationService,
    private routeAct: ActivatedRoute
  ) {}

  demandeLocationId: number;
  demandeLocDetails: DemandeLocation;

  ngOnInit(): void {
    this.demandesLocation();
    this.demandeLocationId = +this.routeAct.snapshot.paramMap.get('id');
  }

  // Méthode pour charger les appartements
  demandesLocation(): void {
    this.demandeLocService.liste()
    .subscribe(
      (data: DemandeLocation[]) => {
        this.demandeLocs = data; // Stocker les appartements récupérés
        console.log(this.demandeLocs);
        
      },
      (error) => {
        console.error('Erreur lors du chargement des appartements', error);
      }
    );
  }

  /***
   * Details demande de location
   */
  detailsDemandeLocation(){
    this.demandeLocService.detailsDemandeLocation(this.demandeLocationId)
    .subscribe({
      next: (data) => {
        this.demandeLocDetails = data;
      },
      error: (err) => {
        console.log(err.error);
        
      }
    })
  }

}
