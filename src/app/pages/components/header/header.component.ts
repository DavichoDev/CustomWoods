import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToAbout(){ document.getElementById("about").scrollIntoView(); }
  goToHome(){ document.getElementById("home").scrollIntoView(); }
  goToPortafolio(){ document.getElementById("portafolio").scrollIntoView(); }
  goToProducts(){ document.getElementById("products").scrollIntoView(); }
  goToContact(){ document.getElementById("contact").scrollIntoView(); }

}
