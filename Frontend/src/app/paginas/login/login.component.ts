import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Formulario de login
  formularioLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]), // Validación de email
    password: new FormControl('', [Validators.required]) // Validación de contraseña
  });

  // Formulario de registro
  formularioRegistro = new FormGroup({
    name: new FormControl('', [Validators.required]), // Validación de nombre
    email: new FormControl('', [Validators.required, Validators.email]), // Validación de email
    password: new FormControl('', [Validators.required]), // Validación de contraseña
    confirmPassword: new FormControl('', [Validators.required]) // Confirmar contraseña
  });

  // Manejar el submit de login
  handleLoginSubmit() {
    if (this.formularioLogin.valid) {
      console.log('Esta es la información obtenida del formulario de login: ', this.formularioLogin.value);
      // Aquí iría la lógica para hacer la llamada al servicio de login
    } else {
      console.log('Formulario de login inválido');
    }
  }

  // Manejar el submit de registro
  handleRegisterSubmit() {
    if (this.formularioRegistro.valid) {
      console.log('Esta es la información obtenida del formulario de registro: ', this.formularioRegistro.value);
      // Aquí iría la lógica para hacer la llamada al servicio de registro
    } else {
      console.log('Formulario de registro inválido');
    }
  }
}