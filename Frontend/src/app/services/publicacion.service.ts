import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/publicacion';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

    //1. INYECCIÓN DE DEPENDENCIAS ---------------------------------------
    private _httpClient = inject(HttpClient);

    // 2. RUTA DE CONEXIÓN CON EL BACKEND ---------------------------------
    private URL_PRODUCTOS = 'http://localhost:9000/publicaciones';
}
