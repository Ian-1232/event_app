import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home').then((module) => module.Home),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/auth/auth.routes').then((module) => module.AUTH_ROUTES),
  },
  {
    path: 'organizador',
    loadChildren: () =>
      import('./pages/organizador/organizador.routes').then(
        (module) => module.ORGANIZADOR_ROUTES,
      ),
  },
  {
    path: 'organizer/dashboard',
    redirectTo: 'organizador/dashboard',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '' },
];
