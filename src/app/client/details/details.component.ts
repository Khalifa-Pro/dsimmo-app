import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AppartementService } from '../../services/Appartement.service';
import { Appartement } from '../../models/Appartement';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  appartementId: number;
  app: Appartement;

  constructor(
    private route: ActivatedRoute,
    private appService: AppartementService
  ) {}

  ngOnInit() {
    // Récupérer l'ID depuis les paramètres de la route
    this.appartementId = +this.route.snapshot.paramMap.get('id');
    this.getDetailsApp();

  }

  /***
   * Details Appartelent
   */
  getDetailsApp(){
    this.appService.detailsAppartement(this.appartementId)
    .subscribe({
      next: (data) => {
        this.app = data;
        console.log("VIDEO: "+this.app.videos);
        
      },
      error: (err) => {
        console.log(err.error);
      }
    })
  }

}
