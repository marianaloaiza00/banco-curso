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

  onSubmit() {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.authService.loginUser(credentials).subscribe((response) => {
        const accessToken = response.accessToken;
        localStorage.setItem('accessToken', accessToken);
      });
    } else {
      alert('Por favor, completa todos los campos requeridos.');
    }
  }

  public navigateSignUp(): void {
    this.router.navigate(['/signup']);
  }

  public goHome(): void {
    this.router.navigate(['/home']);
  }
}
