import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../layouts/auth-layout/auth-layout').then(
        (module) => module.AuthLayout,
      ),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./login/login').then((module) => module.Login),
      },
      {
        path: 'signup',
        loadComponent: () =>
          import('./signup/signup').then((module) => module.Signup),
      },
      { path: 'registro', redirectTo: 'signup', pathMatch: 'full' },
    ],
  },
];
