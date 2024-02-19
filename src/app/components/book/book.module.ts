import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookService} from "./book.service";
import {MockBookService} from "./mock-book.service";
import {RouterModule, Routes} from "@angular/router";
import {BookDetailComponent} from "./book-detail/book-detail.component";

const bookRoutes: Routes = [
  { path: 'book', component: BookDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(bookRoutes)
  ],
  providers: [
    { provide: BookService, useClass: MockBookService}
  ]
})
export class BookModule { }
