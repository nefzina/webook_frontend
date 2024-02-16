import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {PageBookComponent} from "./pages/page-book/page-book.component";
import {BookDetailComponent} from "./components/book/book-detail/book-detail.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'page-book', component: PageBookComponent},
  { path: 'page-book/:id', component: BookDetailComponent},
];
