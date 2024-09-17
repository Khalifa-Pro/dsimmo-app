import { Component } from '@angular/core';
import { NavbarComponent } from '../../layouts/admin_layouts/navbar/navbar.component';
import { SidebarComponent } from '../../layouts/admin_layouts/sidebar/sidebar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
