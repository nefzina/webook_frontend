import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookService} from "../../../services/book.service";
import {MockBookService} from "../../../services/mock-book.service";
import {BookComponent} from "../book.component";
import {RouterModule, Routes} from "@angular/router";

const bookRoutes: Routes = [
  { path: 'book', component: BookComponent }
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
export class BookModuleModule { }
