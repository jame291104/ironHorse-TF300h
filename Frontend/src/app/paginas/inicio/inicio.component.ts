import { Component } from '@angular/core';
import { NavBarComponent } from '../../componentes/nav-bar/nav-bar.component';
import { ArticlesComponent } from "../admin/articles/articles.component";
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NavBarComponent, ArticlesComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
