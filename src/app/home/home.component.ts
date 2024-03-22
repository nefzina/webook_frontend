import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
import {BookService} from "../components/book/domain/service/book.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  mockBooks: any[]= [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.mockBooks = this.bookService.mockBooks;
  }

}
