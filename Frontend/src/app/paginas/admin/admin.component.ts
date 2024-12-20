import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet,RouterLink], //TENEMOS QUE PONER TOOD LO QUE IMPORTAMOS Y NECESITAMOS EN HTML
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  
  goToCreateArticle() {
    window.location.href = "http://localhost:5173/create-article-view?token=" + localStorage.getItem("token")
  }
}
