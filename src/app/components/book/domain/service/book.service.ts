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
        {book_id: 1, book_name: 'Du même bois',book_image: 'assets/pictures/Du-meme-bois.jpg',book_author: '', book_edition: '', book_resume: '', book_isbn: '',book_review: ''},
        {book_id: 2, book_name: 'La louisiane',book_image: 'assets/pictures/La-Louisiane.jpg',book_author: '', book_edition: '', book_resume: '', book_isbn: '',book_review: ''},
        {book_id: 3, book_name: 'La vie heureuse',book_image: 'assets/pictures/La-vie-heureuse.jpg',book_author: '', book_edition: '', book_resume: '', book_isbn: '',book_review: ''},
        {book_id: 4, book_name: 'Les Yeux de Mona',book_image: 'assets/pictures/Les-Yeux-de-Mona.jpg',book_author: '', book_edition: '', book_resume: '', book_isbn: '',book_review: ''},
        {book_id: 5, book_name: 'Un soir d\'éte',book_image: 'assets/pictures/Un-soir-d-ete.jpg',book_author: '', book_edition: '', book_resume: '', book_isbn: '',book_review: ''},
        {book_id: 6, book_name: 'Du même bois',book_image: 'assets/pictures/Du-meme-bois.jpg',book_author: '', book_edition: '', book_resume: '', book_isbn: '',book_review: ''},
        {book_id: 7, book_name: 'Du même bois',book_image: 'assets/pictures/Du-meme-bois.jpg',book_author: '', book_edition: '', book_resume: '', book_isbn: '',book_review: ''},
        {book_id: 8, book_name: 'Du même bois',book_image: 'assets/pictures/Du-meme-bois.jpg',book_author: '', book_edition: '', book_resume: '', book_isbn: '',book_review: ''},
        {book_id: 9, book_name: 'Du même bois',book_image: 'assets/pictures/Du-meme-bois.jpg',book_author: '', book_edition: '', book_resume: '', book_isbn: '',book_review: ''},
        {book_id: 10, book_name: 'Du même bois',book_image: 'assets/pictures/Du-meme-bois.jpg',book_author: '', book_edition: '', book_resume: '', book_isbn: '',book_review: ''},
    ]
  constructor(private http: HttpClient) { }

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
