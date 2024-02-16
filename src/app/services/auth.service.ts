import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface LoginResponse {
  token?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }
}


 // register(username: string, email: string, password: string) {
    // URL de l' API
  //  return this.http.post('#', { username, email, password });
  //}
//}
