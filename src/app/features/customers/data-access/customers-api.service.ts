import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { API_BASE_URL } from '../../../core/http/api-url.token';
import { Customer, CustomerDto } from '../domain/customer.model';
import { CustomerRepository } from '../domain/customer.repository';
import { customerMapper } from '../domain/customer.mapper';

const DEMO_CUSTOMERS: CustomerDto[] = [
  { id: 'cust-1001', full_name: 'Acme Fintech', email: 'ops@acme.example', status: 'active' },
  { id: 'cust-1002', full_name: 'RetailMax', email: 'hello@retailmax.example', status: 'active' },
  { id: 'cust-1003', full_name: 'CloudWorks Labs', email: 'team@cloudworks.example', status: 'inactive' }
];

@Injectable()
export class CustomersApiService extends CustomerRepository {
  private readonly http = inject(HttpClient);
  private readonly apiBaseUrl = inject(API_BASE_URL);

  getCustomers(): Observable<Customer[]> {
    // Swap the demo stream for this HTTP call when the backend is ready:
    // return this.http.get<CustomerDto[]>(`${this.apiBaseUrl}/customers`).pipe(map((dtos) => dtos.map(customerMapper.fromDto)));
    return of(DEMO_CUSTOMERS.map(customerMapper.fromDto)).pipe(delay(450));
  }

  getCustomerById(id: string): Observable<Customer> {
    // return this.http.get<CustomerDto>(`${this.apiBaseUrl}/customers/${id}`).pipe(map(customerMapper.fromDto));
    const match = DEMO_CUSTOMERS.find((customer) => customer.id === id) ?? DEMO_CUSTOMERS[0];
    return of(customerMapper.fromDto(match)).pipe(delay(300));
  }
}
