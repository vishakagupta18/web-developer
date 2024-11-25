import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuItems = [
    { name: "HOME" , link: "/home" },
    { name: "ABOUT US" , link: "/about-us" },
    { name: "SERVICES" , link: "/services" },
    // { name: "PROJECTS" , link: "/projects" },
    { name: "CONTACT US" , link: "/contact-us" },
    // { name: "BACK OFFICE SERVICES" , link: "/back-office" },
  ]

}
