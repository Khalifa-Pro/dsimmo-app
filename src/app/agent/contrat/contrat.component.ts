import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contrat } from '../../models/Contrat';
import { ContratService } from '../../services/Contrat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contrat',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './contrat.component.html',
  styleUrl: './contrat.component.css'
})
export class ContratComponent implements OnInit {

  contratForm: FormGroup;
  idApp: number;
  idProp: number;
  emailClient: string;

  constructor(
    private fb: FormBuilder,
    private contratService: ContratService,
    private routeAct: ActivatedRoute,
    private route: Router,
    private toastr: ToastrService
  ) {
    // Initialisation du formulaire avec les champs de l'interface Contrat
    this.contratForm = this.fb.group({
      numero_contrat: ['', Validators.required],
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required],
      type: ['', Validators.required],
      montant: [0, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    this.idApp = +this.routeAct.snapshot.paramMap.get('idApp');
    this.idProp = +this.routeAct.snapshot.paramMap.get('idProp');
    this.emailClient = this.routeAct.snapshot.paramMap.get('emailClient');
  }

  showSuccess()
  {
    this.toastr.success(
      "Le contrat a été créé et envoyé avec succès", "Succès", {
          positionClass : "toast-top-right",
    });
  }

  showError() {
    this.toastr.error(
      "Nom d'utilisateur ou mot de passe incorrect!\n Vueillez réessayer", "Erreur", {
          positionClass : "toast-center-center",
    });
  }

  onSubmit() {
    if (this.contratForm.valid) {
      // Création d'un objet contrat à partir des informations du formulaire
      const nouveauContrat: Contrat = this.contratForm.value;

      // Appel du service pour créer le contrat
      this.contratService.creerContrat(nouveauContrat,this.idApp,this.idProp,this.emailClient)
      .subscribe({
        next: (data: any) => {
          console.log('Contrat créé avec succès:', data);
          this.route.navigateByUrl('/demandes-location-agent');
          this.showSuccess();

        },
        error: (err) => {
          console.log('Erreur lors de la création du contrat:', err);
          this.showError();
        }
      });
    } else {
      console.log('Formulaire invalide');
      this.showError();
    }
  }

}

