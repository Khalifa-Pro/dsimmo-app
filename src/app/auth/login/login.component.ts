import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ){}

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
      "Nom d'utilisateur ou mot de passe incorrect!\n Vueillez réessayer", "Erreur", {
          positionClass : "toast-center-center",
    });
  }
  

  /***
   * Ajout d'un groupe de forme
   */
  protected loginForm = new FormGroup({
    username: new FormControl('', [Validators.required,]),
    password: new FormControl('', [Validators.required])
  })

  /***
   * Methode de soumission de connexion
   */
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value)
      .subscribe({
        next: (data: any) => {
          console.log(data);
          localStorage.setItem('user_id', data.user_id);
          // Vérification si l'utilisateur est bien connecté
          if (this.authService.isLoggedIn()) {
            // Supposons que le rôle soit renvoyé par l'API dans `data.role`
            const userRole = data.user_role;
            console.log("PROFIL: "+userRole);

            // Redirection en fonction du rôle
            if (userRole === 'ADMINISTRATEUR') {
              this.router.navigate(['/comptes']);
            } else if (userRole === 'PROPRIETAIRE') {
              this.router.navigate(['/liste-location']);
            } else if (userRole === 'AGENT') {
              this.router.navigate(['/agent-location']);
            } else {
              console.error('Rôle non reconnu');
            }
  
          } else {
            this.showError(); // Gérer les erreurs de connexion ici
          }
        },
        error: (err) => {
          console.error('Login error:', err);
          this.showError(); // Gérer les erreurs de connexion ici
        }
      });
    }
  }
  
  


}
