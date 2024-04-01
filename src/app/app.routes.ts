import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    // Com loadChildren ou loadComponent
    // loadComponent: () => import('@ecommerce/home').then((c) => c.HomeComponent),
    loadChildren: () => import('@ecommerce/home').then((c) => c.homeRoutes),
  },
];
