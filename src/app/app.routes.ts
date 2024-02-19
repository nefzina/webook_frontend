import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {PageBookComponent} from "./pages/page-book/page-book.component";

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'page-book', component: PageBookComponent},
];
