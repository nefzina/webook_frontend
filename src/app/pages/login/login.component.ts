
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // Initialisation du formulaire avec des contrôles pour txt, email et password
  form = new FormGroup({
    txt: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });


  constructor(private router: Router) {
  }


  // Méthode pour gérer l'inscription
}
