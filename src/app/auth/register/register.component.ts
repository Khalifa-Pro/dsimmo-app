import { Component } from '@angular/core';
import { NavbarComponent } from '../../layouts/admin_layouts/navbaradmin/navbaradmin.component';
import { SidebarComponent } from '../../layouts/admin_layouts/sidebaradmin/sidebaradmin.component';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(
    private authService: AuthService,
    private route: Router
  ){}


  /***
   * Methode de soummision de'inscription
   */
  public signupForm = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    adresse: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    profil: new FormControl('', [Validators.required])
  });
  
  public onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      this.authService.register(this.signupForm.value)
        .subscribe({
          next: (data: any) => {
            console.log(data);
            console.log("SUCCES!");
            this.route.navigateByUrl('/comptes');
          },
          error: (err) => {
            console.log(err.error);
          }
        });
    }
      
  }
  

}
