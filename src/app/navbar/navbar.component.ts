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
}
