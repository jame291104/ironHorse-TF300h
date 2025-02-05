import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavBarComponent } from '../../componentes/nav-bar/nav-bar.component';
import { ArticleCardComponent } from '../../componentes/single-components/article-card/article-card.component';
import { FooterComponent } from '../../componentes/footer/footer.component';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [NavBarComponent,FooterComponent, ArticleCardComponent,RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
//prueba//