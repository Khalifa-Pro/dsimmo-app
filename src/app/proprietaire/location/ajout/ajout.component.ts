import { Component } from '@angular/core';
import { NavbarComponent } from '../../../layouts/prop_layouts/navbar/navbar.component';
import { SidebarComponent } from '../../../layouts/prop_layouts/sidebar/sidebar.component';

@Component({
  selector: 'app-ajout',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent
  ],
  templateUrl: './ajout.component.html',
  styleUrl: './ajout.component.css'
})
export class AjoutComponent {

}
