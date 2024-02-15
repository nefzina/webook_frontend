import { Injectable } from '@angular/core';
import {Book} from "./book";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookList: Book[] | undefined;
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
