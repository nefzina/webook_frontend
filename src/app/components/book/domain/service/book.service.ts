import { Injectable } from '@angular/core';
import {Book} from "../models/book";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookList: Book[] | undefined;

    mockBooks = [
        {id: 1, name: 'Du même bois',image: 'assets/pictures/Du-meme-bois.jpg',author: '', edition: '', resume: '', isbn: '',review: ''},
        {id: 2, name: 'La louisiane',image: 'assets/pictures/La-Louisiane.jpg',author: '', edition: '', resume: '', isbn: '',review: ''},
        {id: 3, name: 'La vie heureuse',image: 'assets/pictures/La-vie-heureuse.jpg',author: '', edition: '', resume: '', isbn: '',review: ''},
        {id: 4, name: 'Les Yeux de Mona',image: 'assets/pictures/Les-Yeux-de-Mona.jpg',author: '', edition: '', resume: '', isbn: '',review: ''},
        {id: 5, name: 'Un soir d\'éte',image: 'assets/pictures/Un-soir-d-ete.jpg',author: '', edition: '', resume: '', isbn: '',review: ''},
        {id: 6, name: 'Du même bois',image: 'assets/pictures/Du-meme-bois.jpg',author: '', edition: '', resume: '', isbn: '',review: ''},
        {id: 7, name: 'Du même bois',image: 'assets/pictures/Du-meme-bois.jpg',author: '', edition: '', resume: '', isbn: '',review: ''},
        {id: 8, name: 'Du même bois',image: 'assets/pictures/Du-meme-bois.jpg',author: '', edition: '', resume: '', isbn: '',review: ''},
        {id: 9, name: 'Du même bois',image: 'assets/pictures/Du-meme-bois.jpg',author: '', edition: '', resume: '', isbn: '',review: ''},
        {id: 10, name: 'Du même bois',image: 'assets/pictures/Du-meme-bois.jpg',author: '', edition: '', resume: '', isbn: '',review: ''},
    ]
  constructor(private http: HttpClient) { }

  getBookById(id: number) {
      return this.mockBooks.find(book => book.id === id);
  }

  getBookList(config: string): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:8080').pipe(
      tap((bookList) => console.table(bookList)),
      catchError((error) => {
        console.log(error);
        return of([]);
      })
    );
  }

}
