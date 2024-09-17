import { Component } from '@angular/core';
import { NavbarComponent } from '../../layouts/agent_layouts/navbar/navbar.component';
import { SidebarComponent } from '../../layouts/agent_layouts/sidebar/sidebar.component';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent
  ],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent {

}
