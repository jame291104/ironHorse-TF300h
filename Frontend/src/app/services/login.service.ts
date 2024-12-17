// EN ESTE SERVICIO, ESTAREMOS HACIENDO LA LÓGICA PARA GESTIONAR TODO LO RELACIONADO CON EL INICIO DE SESIÓN
  /*
    - Iniciar sesión
    - Obtener el token 
    - Validar roles (si es cliente o administrador)
    - Identificar cuando está logeado o no
    - Cierre de sesión
  */

// inyección de dependencias -> Usar dependencias
import { Injectable, inject } from '@angular/core';
// importar el httpClient para poder hacer peticiones al back
import { HttpClient } from '@angular/common/http';
// importar el router nos va a permitir navegar en nuestro sitio web
import { Router } from '@angular/router';
// importar la dependencia para gestionar mensajes de respuesta
import { ToastrService } from 'ngx-toastr';
// importar la dependencia que nos permite decodificar el token
import { jwtDecode } from "jwt-decode";
// importar la interfaz para poder iniciar sesión
import { Credenciales } from '../interfaces/credenciales';


@Injectable({
  providedIn: 'root'
})


export class LoginService {

  // 1. INYECTAR DEPENDENCIAS -------------------------------------------
  private _httpClient = inject(HttpClient);
  private _router = inject(Router);
  public _toastrService = inject(ToastrService);

  // 2. RUTA DE CONEXIÓN CON EL BACKEND ----------------------------------
  // Esta ruta la sacamos del backend (postman)
  private URL_LOGIN = 'http://localhost:9000/login';

  // 3. INICIAR SESIÓN (petición POST) -----------------------------------

  // Para iniciar sesión, vamos a dar unas credenciales de ingreso, que se estructuraron en la interfaz
  // Credenciales
  inicioSesion(credencialesIngreso:Credenciales){
    // vamos a hacer la petición POST
    // tenemos que pasar la URL y el body
    return this._httpClient.post(this.URL_LOGIN, credencialesIngreso);
  }

  // 4. OBTENER EL TOKEN -------------------------------------------------
  // los tokens se almacenan de forma local -> almacenamiento temporal -> localStorage
  // Si hay token significa que inició Sesión
  // Si NO hay token significa que no inició sesión
  obtenerToken(){
    return localStorage.getItem('token');
  }

  // 5. VALIDAR SI ES O NO ADMINISTRADOR ---------------------------------
  // Esta funcion retorna verdadero si es admin o falso si no lo es
  esAdmin(){
    const token = this.obtenerToken();

    // si hay token, decodifíquelo
    if(token){
      // decodifique la información del token
      const decodificado: any = jwtDecode(token);

    // si es Admin retorna true, si no retorna false
    // condicional ternario
    return decodificado.role === "superadmin" ? true : false;

    }else {
      console.error('No se encontró token')
      return false
    }
  }

  // Vamos a redireccionar a la página de inicio o al panel de administración, dependiendo de si es Admin o no
  redireccionar(){
    // Si es admin -> redireciona a panel de control
    if(this.esAdmin()){
      this._router.navigate(['/admin']);

    }else {
      // Si no -> redireciona a la página de inicio
      this._router.navigate(['/']);
    }
  }

  // 6. SE INICIÓ SATISFACTORIAMENTE O NO SESIÓN --------------------------
  // Nos devuelva falso o verdadero si inicioSesion o no
  estaLogueado(){
    // Si sí hay token devuelva true, si no devuelva false
    return this.obtenerToken() ? true : false;
  }


  // 7. CIERRE DE SESIÓN --------------------------------------------------
  cierreSesion(){
    // mensaje del usuario
    this._toastrService.info('Cierre se sesión exitoso, hasta la próxima!');
    // nos elimina el token del local Storage
    localStorage.removeItem('token');
    //redirecciona a la página de inicio después de cerrar sesión
    this._router.navigate(['/']); 
  }

}
