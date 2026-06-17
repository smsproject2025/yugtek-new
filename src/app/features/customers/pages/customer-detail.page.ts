import { ChangeDetectionStrategy, Component, inject, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomersStore } from '../data-access/customers.store';

@Component({
  selector: 'app-customer-detail-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="customer-detail">
      <a routerLink="/customers">Back to customers</a>

      @if (store.loading()) {
        <p>Loading customer...</p>
      } @else if (store.selectedCustomer(); as customer) {
        <section>
          <p>{{ customer.status }}</p>
          <h1>{{ customer.fullName }}</h1>
          <span>{{ customer.email }}</span>
        </section>
      }
    </main>
  `,
  styles: [`
    .customer-detail {
      min-height: 100vh;
      padding: clamp(2rem, 6vw, 5rem);
      background: var(--ui-bg);
      color: var(--ui-text);
    }

    section {
      margin-top: 3rem;
      max-width: 760px;
      padding: 2rem;
      border: 1px solid var(--ui-border);
      border-radius: var(--ui-radius-md);
      background: var(--ui-surface);
      box-shadow: var(--ui-shadow-sm);
    }

    p {
      color: var(--ui-primary);
      font-weight: 800;
      text-transform: uppercase;
    }

    h1 {
      margin: 0 0 1rem;
      font-size: clamp(2.25rem, 6vw, 4rem);
    }

    a {
      color: var(--ui-accent);
      font-weight: 800;
      text-decoration: none;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDetailPage implements OnInit {
  readonly id = input.required<string>();
  readonly store = inject(CustomersStore);

  ngOnInit(): void {
    this.store.loadCustomer(this.id());
  }
}
