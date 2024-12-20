import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';  // Import Router
import { CommonModule } from '@angular/common';  // Import CommonModule
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, CommonModule],  // Add RouterModule here
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  // Variable para manejar el estado de autenticación
  isLogged: boolean = false;
  isHomePage: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {}  // Ensure Router is injected

  ngOnInit(): void {
    // Verificar si el usuario está logueado al cargar el componente
    this.isLogged = this.loginService.estaLogueado();
    
    // Verificar si la ruta actual es 'home'
    this.isHomePage = this.router.url === '/';
  }

  // Método para cerrar sesión
  cerrarSesion(): void {
    this.loginService.cierreSesion();  // Llamar al servicio de cierre de sesión
    this.isLogged = false;  // Actualizar el estado de 'isLogged'
  }
}
