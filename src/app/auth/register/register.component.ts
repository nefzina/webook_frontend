import { Component } from '@angular/core';
import { AuthenticationService } from '../domain/services/authentication.service';
import { Router } from '@angular/router';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from '@angular/material/grid-list';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatInputModule, FormsModule, MatButtonModule, MatGridListModule],
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = "";
  firstname: string = "";
  lastname: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  zipCode: string = "";
  city: string = "";
  bookPreferences: string = "";

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  register() {
    if (this.password !== this.confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }


    this.authService.register(this.username, this.firstname, this.lastname, this.email, this.password, this.zipCode, this.city, this.bookPreferences).subscribe(
      (isRegistered) => {
        if (isRegistered) {
          this.router.navigate(['/login']);
        } else {
          console.error('Inscription échouée');

        }
      },
      (error) => {
        console.error('Erreur lors de l\'inscription', error);

      }
    );
  }
}
