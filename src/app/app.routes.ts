import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent} from "./pages/home/home.component";
import { LoginComponent } from './pages/auth/login/login.component';
import {HeaderComponent} from "./components/header/header.component";


export const routes: Routes = [

  {
    path:'login',
    component: LoginComponent
  },


  {
    path:'register',
    component: LoginComponent
  },
  {
    path:'',
    component: HomeComponent,
    children: [
      {
        path:'dashboard',
        component:HeaderComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



