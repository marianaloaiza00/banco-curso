import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/service/auth.service';
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
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const user = this.signUpForm.value;
      this.authService.signUp(user).subscribe((response) => {
        this.accessToken = response.accessToken;
        localStorage.setItem('token', this.accessToken);
        this.router.navigate(['/home']);
      });
    }
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  goLogin() {
    this.router.navigate(['/login']);
  }
}
