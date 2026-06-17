import { Routes } from '@angular/router';
import { CustomersApiService } from './data-access/customers-api.service';
import { CustomersStore } from './data-access/customers.store';
import { CustomerRepository } from './domain/customer.repository';

export const CUSTOMERS_ROUTES: Routes = [
  {
    path: '',
    providers: [
      CustomersStore,
      { provide: CustomerRepository, useClass: CustomersApiService }
    ],
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/customers-list.page').then((m) => m.CustomersListPage)
      },
      {
        path: ':id',
        loadComponent: () => import('./pages/customer-detail.page').then((m) => m.CustomerDetailPage)
      }
    ]
  }
];
