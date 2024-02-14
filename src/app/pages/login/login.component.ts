
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


  constructor(private router: Router){}


  // Méthode pour gérer l'inscription
  onRegister() {
    if (this.form.valid) { // Vérifie si le formulaire est valide
      const signUpModel = new SignUpModel();
      const txtControl = this.form.get('txt');
      const emailControl = this.form.get('email');
      const passwordControl = this.form.get('password');

      // Vérifie si les contrôles existent et ont des valeurs
      if (txtControl && emailControl && passwordControl) {
        if (txtControl.value !== null && emailControl.value !== null && passwordControl.value !== null) {
          signUpModel.txt = txtControl.value;
          signUpModel.email = emailControl.value;
          signUpModel.password = passwordControl.value;

          console.log(signUpModel);

          this.router.navigate(['/home']); // Navigue vers la page d'accueil
        } else {
          console.error('Form controls do not have values'); // Affiche une erreur si les contrôles n'ont pas de valeurs
        }
      } else {
        console.error('Form controls do not exist'); // Affiche une erreur si les contrôles n'existent pas
      }
    } else {
      console.error('Form is not valid'); // Affiche une erreur si le formulaire n'est pas valide
    }
  }

  // Méthode pour gérer la connexion
  onLogin() {
    if (this.form.valid) {
      const loginModel = new LoginModel();
      const emailControl = this.form.get('email');
      const passwordControl = this.form.get('password');

      // Vérifie si les contrôles existent et ont des valeurs
      if (emailControl && passwordControl) {
        if (emailControl.value !== null && passwordControl.value !== null) {
          loginModel.email = emailControl.value;
          loginModel.password = passwordControl.value;

          console.log(loginModel);

          this.router.navigate(['/home']);
        } else {
          console.error('Form controls do not have values'); // Affiche une erreur si les contrôles n'ont pas de valeurs
        }
      } else {
        console.error('Form controls do not exist'); // Affiche une erreur si les contrôles n'existent pas
      }
    } else {
      console.error('Form is not valid'); // Affiche une erreur si le formulaire n'est pas valide
    }
  }
}

export class SignUpModel  {
  txt: string;
  email: string;
  password: string;

  constructor() {
    this.txt = "";
    this.email = "";
    this.password= ""
  } // Initialise txt, email et password à une chaîne vide
}


export class LoginModel  {
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.password= ""
  }
}
