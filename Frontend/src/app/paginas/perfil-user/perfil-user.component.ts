import { Component } from '@angular/core';
import { NavBarComponent } from '../../componentes/nav-bar/nav-bar.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-perfil-user',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './perfil-user.component.html',
  styleUrl: './perfil-user.component.css'
})
export class PerfilUserComponent {

}
