import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbaradmin',
  standalone: true,
  imports: [],
  templateUrl: './navbaradmin.component.html',
  styleUrl: './navbaradmin.component.css'
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
