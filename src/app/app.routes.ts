import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/layout/shell.component').then((m) => m.ShellComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        title: 'Yugtek Technologies | AI, Cloud, Web and Mobile Software Development',
        loadChildren: () => import('./features/home/home.routes').then((m) => m.HOME_ROUTES)
      },
      {
        path: 'login',
        title: 'Login | Yugtek Technologies',
        loadComponent: () => import('./features/auth/pages/login.page').then((m) => m.LoginPage)
      },
      {
        path: 'customers',
        canMatch: [authGuard],
        title: 'Customers | Yugtek Technologies',
        loadChildren: () => import('./features/customers/customers.routes').then((m) => m.CUSTOMERS_ROUTES)
      }
    ]
  },
  {
    path: '**',
    title: 'Page Not Found | Yugtek Technologies',
    loadComponent: () => import('./shared-ui/empty-state/empty-state.component').then((m) => m.EmptyStateComponent)
  }
];
