import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/service/auth.service';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;

      this.authService.login(credentials).pipe(
        catchError(error => {
          if (error.status === 400) {
            this.errorMessage = 'Revise su contraseña o correo electrónico.';
          } else {
            this.errorMessage = 'Ocurrió un error inesperado. Por favor, inténtelo de nuevo más tarde.';
          }
          return of(null);
        })
      ).subscribe({
        next: (response) => {
          if (response && response.accessToken) {
            localStorage.setItem('token', response.accessToken);
            this.router.navigate(['/accounts']);
          }
        }
      });
    }
  }

  goSignUp(): void {
    this.router.navigate(['/signup']);
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }
}
