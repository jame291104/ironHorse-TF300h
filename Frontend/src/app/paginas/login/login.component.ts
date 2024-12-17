import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioLogin: FormGroup;
  formularioRegistro: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.formularioLogin = this.initLoginForm();
    this.formularioRegistro = this.initRegisterForm();
  }

  ngOnInit(): void {}

  // Inicialización del formulario de login
  private initLoginForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Inicialización del formulario de registro
  private initRegisterForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  // Manejo del formulario de inicio de sesión
  handleLoginSubmit(): void {
    if (this.formularioLogin.invalid) {
      this.toastr.error('Por favor, completa los campos correctamente.');
      return;
    }

    const { email, password } = this.formularioLogin.value;
    const credenciales = { emailLogin: email, passwordLogin: password };

    this.loginService.inicioSesion(credenciales).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.token);
        this.toastr.success('Inicio de sesión exitoso.');
        this.loginService.redireccionar();
      },
      error: (err) => {
        this.toastr.error('Error al iniciar sesión. Verifica tus credenciales.');
        console.error(err);
      }
    });
  }

  // Manejo del formulario de registro
  handleRegisterSubmit(): void {
    if (this.formularioRegistro.invalid) {
      this.toastr.error('Por favor, completa los campos correctamente.');
      return;
    }

    const { name, email, password, confirmPassword } = this.formularioRegistro.value;

    if (password !== confirmPassword) {
      this.toastr.error('Las contraseñas no coinciden.');
      return;
    }

    const nuevoUsuario = { name, email, password };

    
    this.toastr.success('Registro exitoso. Ahora puedes iniciar sesión.');
    this.formularioRegistro.reset();
  }
}
