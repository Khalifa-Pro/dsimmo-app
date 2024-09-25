import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbaragent',
  standalone: true,
  imports: [],
  templateUrl: './navbaragent.component.html',
  styleUrl: './navbaragent.component.css'
})
export class NavbarComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  public logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
