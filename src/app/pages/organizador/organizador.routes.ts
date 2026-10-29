import { Routes } from '@angular/router';

export const ORGANIZADOR_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../layouts/organizador-layout/organizador-layout').then(
        (module) => module.OrganizadorLayout,
      ),
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard').then((module) => module.Dashboard),
      },
    ],
  },
];
