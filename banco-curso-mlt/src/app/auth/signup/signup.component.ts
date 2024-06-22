import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignUpComponent {
  signUpForm: FormGroup;
  accessToken: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const user = this.signUpForm.value;
      this.authService.signUp(user).subscribe((response) => {
        this.accessToken = response.accessToken;
        localStorage.setItem('accessToken', this.accessToken);
      });
    } else {
      alert('Por favor, completa todos los campos requeridos.');
    }
  }
  public goHome(): void {
    this.router.navigate(['/home']);
  }
}
