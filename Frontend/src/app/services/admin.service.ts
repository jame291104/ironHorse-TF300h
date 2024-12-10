import { inject, Injectable } from '@angular/core';
import { Admin } from '../interfaces/admi';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _httpClient = inject(HttpClient);

  private apiUrl = 'http://localhost:9000/adminRoute';

    // Petición POST: Crear un admin
    postAdmin(admin: Admin) {
      return this._httpClient.post(this.apiUrl + '/crear', admin);
    }

// Peticion Get: Obtener
    getAdmin() {
      return this._httpClient.get(this.apiUrl + '/obtener');
    }
  
//Peticion Get : Obtener por Id
getAdminById(id: string) {
  return this._httpClient.get(this.apiUrl + '/obtener/' + id)
}

 // Petición PUT: Actualizar un administrador
 putAdmin(updatedAdmin: Admin, id: string) {
  return this._httpClient.put(this.apiUrl + '/actualizar/' + id, updatedAdmin);
}

  // Petición DELETE: Eliminar un administrador
  deleteAdmin(id: string) {
    return this._httpClient.delete(this.apiUrl + '/eliminar/' + id);
  }

}
