import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component')
      .then(c => c.HomeComponent)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/ui/profile.component')
      .then(r => r.ProfileComponent)
  },
  {path: '**', redirectTo: ''},
];
