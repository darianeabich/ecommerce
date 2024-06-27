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
  {
    path: 'product',
    loadChildren: () =>
      import('@ecommerce/product-detail').then((c) => c.productDetailRoutes),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('@ecommerce/cart-detail').then((c) => c.cartDetailRoutes),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@ecommerce/auth-form').then((c) => c.authFormRoutes),
  },
];
