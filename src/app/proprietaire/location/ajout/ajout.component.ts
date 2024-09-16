import { Component } from '@angular/core';
import { NavbarComponent } from '../../../layouts/user_layouts/navbar/navbar.component';
import { SidebarComponent } from '../../../layouts/user_layouts/sidebar/sidebar.component';

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
