import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  openSubMenu(menuId: string) {
    const menu = document.getElementById(menuId);
    if (menu) {
      let menuEl = menu as HTMLElement;
      if (menuEl.style.display === "none") {
        menuEl.style.display = "block";
      } else {
        menuEl.style.display = "none";
      }
    }

  }

  openMenu() {
    const nav = document.querySelector("nav");


    if (nav!.className === "topnav") {
      nav!.className += " responsive";
    } else {
      nav!.className = "topnav";
    }

    // prevent this hanging open or needing to be clicked twice upon loading the page
    const menus = document.querySelectorAll(".dropdown-content");
    if (menus) {
      menus.forEach(menu => {
        (menu as HTMLElement).style.display = "none"
      });

    }
  }


}
