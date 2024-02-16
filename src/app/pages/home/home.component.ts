import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterLink,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  mockBooks = [
    {id : 1, image: 'assets/pictures/Du-meme-bois.jpg'},
    {id : 2, image: 'assets/pictures/L-Inconnue-du-portrait.jpg'},
    {id : 3, image: 'assets/pictures/La-Louisiane.jpg'},
    {id : 4, image: 'assets/pictures/La-vie-heureuse.jpg'},
    {id : 5, image: 'assets/pictures/Les-Yeux-de-Mona.jpg'},
    {id : 6, image: 'assets/pictures/Un-soir-d-ete.jpg'},
    {id : 7, image: 'assets/pictures/Du-meme-bois.jpg'},
    {id : 8, image: 'assets/pictures/Du-meme-bois.jpg'},
    {id : 9, image: 'assets/pictures/Du-meme-bois.jpg'},
  ]
}
