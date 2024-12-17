import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private toastr: ToastrService) {}

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
      this.toastr.success('Inicio de sesión exitoso', '¡Éxito!');
    } else {
      console.log('Formulario de login inválido');
      this.toastr.error('Por favor complete todos los campos correctamente', 'Error en inicio de sesión');
    }
  }

  // Manejar el submit de registro
  handleRegisterSubmit() {
    const { password, confirmPassword } = this.formularioRegistro.value;

    if (this.formularioRegistro.invalid) {
      console.log('Formulario de registro inválido');
      this.toastr.error('Por favor complete todos los campos correctamente', 'Error en registro');
      return;
    }

    if (password !== confirmPassword) {
      console.log('Las contraseñas no coinciden');
      this.toastr.error('Las contraseñas no coinciden', 'Error en registro');
      return;
    }

    console.log('Esta es la información obtenida del formulario de registro: ', this.formularioRegistro.value);
    this.toastr.success('Registro exitoso', '¡Éxito!');
  }
}
