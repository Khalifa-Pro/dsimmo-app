import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../layouts/agent_layouts/navbaragent/navbaragent.component';
import { SidebarComponent } from '../../layouts/agent_layouts/sidebaragent/sidebaragent.component';
import { RouterLink } from '@angular/router';
import { DemanderLocationService } from '../../services/DemandeLocation.service';
import { DemandeStats } from '../../models/DemandeStat';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    RouterLink
  ],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit {

  demandeStats: DemandeStats;

  constructor(
    private demandeService: DemanderLocationService
  ){}

  ngOnInit(): void {
    this.demandes();
  }

  /***
   * Nombre de demandes
   */
  demandes(){
    this.demandeService.nombreDemandes()
    .subscribe({
      next: (data) => {
        this.demandeStats = data;
      }
    })
  }

}
