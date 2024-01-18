import { Component } from '@angular/core';
import {Book} from "../../services/book";
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../../services/book.service";
import {Router} from "express";

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  bookList : Book[]|undefined;
  book : Book|undefined;

  constructor(
    private route : ActivatedRoute,
    private bookService: BookService,
    private router: Router
  ) {  }
  ngOnInit(): void {
    this.bookService.getBookList('CONFIG').pipe().subscribe(bookList => this.bookList = bookList);
  }

}
