import { Injectable } from '@angular/core';
import {IAuthenticationService} from "./IAuthentication-service";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import { SignUpModel} from "../../login/login.component";

// contient également une méthode register() qui prend un SignUpModel en argument.
// Cette méthode envoie une requête HTTP POST à un serveur pour enregistrer un nouvel utilisateur. Le SignUpModel est défini dans votre composant LoginComponent.
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements IAuthenticationService {

  constructor(private httpClient: HttpClient) { }

  authenticate(username: string, password: string): Observable<boolean> {
    return this.httpClient.post<any>("http://localhost:8080/login", JSON.stringify({username, password}), {
      headers: {
        "content-type": "application/json"
      },
      withCredentials: true,
      observe: "response"
    }).pipe(
      map(response => {
        if (response.status === 200) {
          localStorage.setItem('loggedIn', "true");
          return true;
        }
        return false;
      }))
  }

  register(signUpModel: SignUpModel): Observable<boolean> {

    return this.httpClient.post<any>("http://localhost:8080/register", signUpModel, {
      headers: {
        "content-type": "application/json"
      },
      withCredentials: true,
      observe: "response"
    }).pipe(
      map(response => {
        if (response.status === 200) {
          return true;
        }
        return false;
      }))
  }
}

