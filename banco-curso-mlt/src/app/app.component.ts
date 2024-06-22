import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from './auth/store/auth.reducer';
import { selectIsAuthenticated } from './auth/store/auth.selectors';
import * as AuthActions from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  constructor(private store: Store<AuthState>) {
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
  }

  ngOnInit(): void {}

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
