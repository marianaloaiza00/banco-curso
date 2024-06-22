import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

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

  public login() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;

      this.authService.login(credentials).subscribe({
        next: (response) => {
          if (response.accessToken) {
            localStorage.setItem('token', response.accessToken);
            this.router.navigate(['/accounts']);
          }
        },
        error: (error) => {
          console.error('Intenta de nuevo', error);
        }
      });
    }
  }

  public navigateSignUp(): void {
    this.router.navigate(['/signup']);
  }

  public goHome(): void {
    this.router.navigate(['/home']);
  }
}
