import { Component } from '@angular/core';
import { NavbarComponent } from '../../layouts/agent_layouts/navbar/navbar.component';
import { SidebarComponent } from '../../layouts/agent_layouts/sidebar/sidebar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    RouterLink
  ],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {

}
