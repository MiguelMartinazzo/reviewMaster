import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Injecting the HttpClient
  httpClient = inject(HttpClient);

  //Defining a base URL that contains the URL of our auth backend
  baseUrl = 'http://localhost:3000/api';

  constructor() {}

  //SingUp Method
  signup(data: any) {
    return this.httpClient.post(`${this.baseUrl}/register`, data);
  }

  //Login Method
  login(data: any) {
    return this.httpClient.post(`${this.baseUrl}/login`, data)
      .pipe(tap((result) => {
        localStorage.setItem('authUser', JSON.stringify(result));
      }));
  }

  //Logout Method
  logout() {
    localStorage.removeItem('authUser');
  }
  
  //LoggedIn Method
  isLoggedIn() {
    return localStorage.getItem('authUser') !== null;
  }
}
