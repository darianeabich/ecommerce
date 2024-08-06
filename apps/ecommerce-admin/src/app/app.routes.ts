import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('@ecommerce/home-admin').then((c) => c.homeAdminRoutes),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@ecommerce/auth-form').then((c) => c.authFormRoutes),
  },
];
