import { Observable } from 'rxjs';
import { Customer } from './customer.model';

export abstract class CustomerRepository {
  abstract getCustomers(): Observable<Customer[]>;
  abstract getCustomerById(id: string): Observable<Customer>;
}
