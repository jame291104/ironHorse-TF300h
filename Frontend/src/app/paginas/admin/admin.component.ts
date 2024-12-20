import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "../../componentes/nav-bar/nav-bar.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavBarComponent], //TENEMOS QUE PONER TOOD LO QUE IMPORTAMOS Y NECESITAMOS EN HTML
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
