import { Component } from '@angular/core';
import { NavbarComponent } from '../../layouts/agent_layouts/navbar/navbar.component';
import { SidebarComponent } from '../../layouts/agent_layouts/sidebar/sidebar.component';

@Component({
  selector: 'app-demandes',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent
  ],
  templateUrl: './demandes.component.html',
  styleUrl: './demandes.component.css'
})
export class DemandesComponent {

}
