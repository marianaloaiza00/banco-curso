import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
import { authReducer } from './store/auth.reducer';
import { AuthEffects } from './store/auth.effects';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  exports: [
    LoginComponent,
    SignUpComponent
  ]
})
export class AuthModule { }
