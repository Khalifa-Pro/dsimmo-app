import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-navbarprop',
  standalone: true,
  imports: [],
  templateUrl: './navbarprop.component.html',
  styleUrl: './navbarprop.component.css'
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
