import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {BookService} from "../components/book/domain/service/book.service";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-page-recherche',
  standalone: true,
    imports: [
        RouterLink,
        FormsModule,
        NgForOf,
        MatInputModule,
        MatIconModule,
        MatButtonModule
    ],
  templateUrl: './page-recherche.component.html',
  styleUrl: './page-recherche.component.scss'
})
export class PageRechercheComponent {
    searchText = '';
    books: any[] = [];
    mockBooks: any[]= [];
    categories = ['Historique', 'Aventure', 'Policier', 'Amour', 'Science-fiction', 'Fantasy', 'Fantastique', 'Horreur', 'Nouvelle', 'Biographie', 'Autobiographie', 'Journal', 'Poésie', 'En prose', 'Pastorale', 'Philosophique', 'Sonnet', 'Ode', 'Haïku', 'Théâtral', 'Epistolaire', 'Argumentatif'];
    value = '';
    authors: string[] | undefined;
    Maps: any;

  constructor(private bookService: BookService) {}

  ngOnInit() {
      //this.authors = this.bookService.getAuthors();
    }
  onCategoryChange(value: any) {
    this.sortBooksByCategory(value);
  }

  onAuthorChange(value: any) {
    this.sortBooksByAuthor(value);
  }

  onMapChange(value: any) {
    this.sortBooksByMap(value);
  }

  private sortBooksByCategory(category: any) {
    if (category) {
      this.mockBooks.sort((a, b) => a.category.localeCompare(b.category));
    } else {
      // Si aucune catégorie n'est sélectionnée, réinitialisez l'ordre des livres
      this.resetBookOrder();
    }
  }

  private sortBooksByAuthor(author: any) {
    if (author) {
      this.mockBooks.sort((a, b) => a.author.localeCompare(b.author));
    } else {
      // Si aucune catégorie n'est sélectionnée, réinitialisez l'ordre des livres
      this.resetBookOrder();
    }
  }

  private sortBooksByMap(map: any) {
    if (map) {
      this.mockBooks.sort((a, b) => a.map.localeCompare(b.map));
    } else {
      // Si aucune catégorie n'est sélectionnée, réinitialisez l'ordre des livres
      this.resetBookOrder();
    }
  }

  private resetBookOrder() {

  }
}
