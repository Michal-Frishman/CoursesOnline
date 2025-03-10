import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { partUser, role, User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = "http://localhost:3000/api/auth";
  constructor(private http: HttpClient) { }
  signIn(details: partUser) {
    return this.http.post<any>(`${this.apiUrl}/login`, details);
  }
  signUp(details: User) {
    return this.http.post<any>(`${this.apiUrl}/register`, details);
  }
}
