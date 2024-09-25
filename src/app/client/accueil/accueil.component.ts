import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../layouts/navbar/navbar.component';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { RouterLink } from '@angular/router';
import { AppartementService } from '../../services/Appartement.service';
import { Appartement } from '../../models/Appartement';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    RouterLink,
    CommonModule
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit {

  constructor(
    private appService: AppartementService
  ){}

  apps: Array<Appartement> = [];
  appDetails: Appartement;

  ngOnInit(): void {
    this.appsDispo();
  }

  appsDispo(){
    this.appService.liste()
    .subscribe({
      next: (data) => {
        this.apps = data;
      },
      error: (err) => {
        console.log(err.error);
      }
    })
  }

  /***
   * details Appartement
   */
  detailsAppartement(id:number){
    this.appService.detailsAppartement(id)
    .subscribe({
      next: (data) => {
        this.appDetails = data;
      },
      error:(err) => {
        console.log(err.error);
        
      }
    })
  }

  

}
