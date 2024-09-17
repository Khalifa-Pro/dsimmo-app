import { Component } from '@angular/core';
import { NavbarComponent } from '../../../layouts/prop_layouts/navbar/navbar.component';
import { SidebarComponent } from '../../../layouts/prop_layouts/sidebar/sidebar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    RouterLink
  ],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css'
})
export class ListeComponent {

}
