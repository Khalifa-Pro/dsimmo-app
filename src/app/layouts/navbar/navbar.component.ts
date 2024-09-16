import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  underLocation(){
    window.scrollTo(100,100);
  }

  underVente(){
    window.scrollTo(0,1500);
  }

  underContact(){
    window.scrollTo(0,3000);
  }

}
