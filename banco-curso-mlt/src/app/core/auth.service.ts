import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  loginUser(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/signin`, credentials, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  signUp(user: { firstName: string; lastName: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}

