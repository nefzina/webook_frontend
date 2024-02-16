import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {BookService } from "./services/book.service";
import {config} from "./app.config.server";
import { Book } from './services/book';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, LoginComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ BookService]
})
export class AppComponent implements OnInit {
  title = 'WeBook_front-v2';
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  public ngOnInit() {
  }
}
