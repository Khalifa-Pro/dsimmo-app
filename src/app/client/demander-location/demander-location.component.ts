import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DemanderLocationService } from '../../services/DemandeLocation.service';
import { Client } from '../../models/Client';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-demander-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './demander-location.component.html',
  styleUrl: './demander-location.component.css'
})
export class DemanderLocationComponent implements OnInit {

  constructor(
    private demandeLocationService: DemanderLocationService,
    private route: Router,
    private routeAct: ActivatedRoute,
    private toastr: ToastrService
  ){}

  appartementId: number;

  ngOnInit(): void {
    this.appartementId = +this.routeAct.snapshot.paramMap.get('id');
  }

  /**
   * Toastr
   */

  showSuccess()
  {
    this.toastr.success(
      "Votre demande a été bien envoyé!\n Vous allez recevoir par email votre contrat.", "Succès", {
          positionClass : "toast-top-right",
    });
  }

  showError() {
    this.toastr.error(
      "Une erreur est survenue lors de la demande!\n Vueillez réessayer", "Erreur", {
          positionClass : "toast-center-center",
    });
  }



  /***
   * Methode de soummision de'inscription
   */
  public demandeForm = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  });
  
  public onSubmit() {
    if (this.demandeForm.valid) {
      const client: Client = this.demandeForm.value as Client;  // Cast des valeurs du formulaire en `Client`
      this.demandeLocationService.faireDemande(client, this.appartementId)
        .subscribe({
          next: (data: any) => {
            console.log(data);
            console.log("SUCCES!");
            this.route.navigateByUrl('/accueil-dsimmo');
            this.showSuccess();
          },
          error: (err) => {
            console.log(err.error);
            this.showError();
          }
        });
    }
  }
  
  

}
