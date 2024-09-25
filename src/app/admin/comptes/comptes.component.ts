import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../layouts/admin_layouts/navbaradmin/navbaradmin.component';
import { SidebarComponent } from '../../layouts/admin_layouts/sidebaradmin/sidebaradmin.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-comptes',
  standalone: true,
  imports: [
    RouterLink,
    NavbarComponent,
    SidebarComponent,
    CommonModule
  ],
  templateUrl: './comptes.component.html',
  styleUrl: './comptes.component.css'
})
export class ComptesComponent implements OnInit {

  constructor(
    private authService: AuthService
  ){}

  users: Array<User> = [];
  
  ngOnInit(): void {
    this.comptes();
  }

  /***
   * liste des users
   */
  comptes(){
    this.authService.users()
    .subscribe({
      next: (data) => {
        this.users = data
        console.log("LISTE: "+data);
      },
      error:(err) =>{
        console.log(err.error);
        
      }
    })
  }

  
  
}
