import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    // URL de l'API à mettre
    return this.http.post('#', { username, password });
  }

  register(username: string, email: string, password: string) {
    // URL de l' API
    return this.http.post('#', { username, email, password });
  }
}

