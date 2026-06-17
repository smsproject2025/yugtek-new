import { computed, inject, Injectable, signal } from '@angular/core';
import { finalize } from 'rxjs';
import { Customer } from '../domain/customer.model';
import { CustomerRepository } from '../domain/customer.repository';

interface CustomersState {
  customers: readonly Customer[];
  selectedCustomer: Customer | null;
  loading: boolean;
  error: string | null;
}

const initialState: CustomersState = {
  customers: [],
  selectedCustomer: null,
  loading: false,
  error: null
};

@Injectable()
export class CustomersStore {
  private readonly repository = inject(CustomerRepository);
  private readonly state = signal<CustomersState>(initialState);

  readonly customers = computed(() => this.state().customers);
  readonly selectedCustomer = computed(() => this.state().selectedCustomer);
  readonly loading = computed(() => this.state().loading);
  readonly error = computed(() => this.state().error);
  readonly activeCustomers = computed(() => this.state().customers.filter((customer) => customer.status === 'active'));
  readonly totalCustomers = computed(() => this.state().customers.length);

  loadCustomers(): void {
    this.patch({ loading: true, error: null });

    this.repository.getCustomers()
      .pipe(finalize(() => this.patch({ loading: false })))
      .subscribe({
        next: (customers) => this.patch({ customers }),
        error: () => this.patch({ error: 'Unable to load customers.' })
      });
  }

  loadCustomer(id: string): void {
    this.patch({ loading: true, error: null });

    this.repository.getCustomerById(id)
      .pipe(finalize(() => this.patch({ loading: false })))
      .subscribe({
        next: (selectedCustomer) => this.patch({ selectedCustomer }),
        error: () => this.patch({ error: 'Unable to load customer details.' })
      });
  }

  private patch(partial: Partial<CustomersState>): void {
    this.state.update((state) => ({ ...state, ...partial }));
  }
}
