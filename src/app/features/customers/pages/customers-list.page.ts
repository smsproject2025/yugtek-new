import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomerCardComponent } from '../ui/customer-card.component';
import { CustomersStore } from '../data-access/customers.store';
import { UiPageHeaderComponent } from '../../../shared/ui/molecules/page-header/ui-page-header.component';
import { UiSkeletonComponent } from '../../../shared/ui/atoms/skeleton/ui-skeleton.component';

@Component({
  selector: 'app-customers-list-page',
  standalone: true,
  imports: [CustomerCardComponent, RouterLink, UiPageHeaderComponent, UiSkeletonComponent],
  template: `
    <main class="customers-page">
      <a class="back-link" routerLink="/home">Back to home</a>
      <ui-page-header
        eyebrow="Enterprise feature example"
        title="Customers"
        description="A lazy-loaded feature route using a feature-scoped Signal store, dumb UI components, and skeleton loading states." />

      <div class="summary-strip ui-fade-in-up">
        <div>
          <strong>{{ store.totalCustomers() }}</strong>
          <span>Total customers</span>
        </div>
        <div>
          <strong>{{ store.activeCustomers().length }}</strong>
          <span>Active accounts</span>
        </div>
      </div>

      @if (store.loading()) {
        <section class="customer-list" aria-label="Loading customers">
          @for (item of skeletonRows; track item) {
            <article class="customer-skeleton">
              <div>
                <ui-skeleton width="86px" height=".75rem" />
                <ui-skeleton width="220px" height="1.25rem" />
                <ui-skeleton width="280px" height=".9rem" />
              </div>
              <ui-skeleton width="74px" height="42px" />
            </article>
          }
        </section>
      } @else if (store.error()) {
        <p class="error-message">{{ store.error() }}</p>
      } @else {
        <section class="customer-list ui-stagger-list" aria-label="Customers">
          @for (customer of store.customers(); track customer.id) {
            <app-customer-card [customer]="customer" />
          }
        </section>
      }
    </main>
  `,
  styles: [`
    .customers-page {
      min-height: 100vh;
      padding: clamp(2rem, 6vw, 5rem);
      background:
        linear-gradient(135deg, color-mix(in srgb, var(--ui-primary) 10%, transparent), transparent 26rem),
        var(--ui-bg);
      color: var(--ui-text);
    }

    .back-link {
      color: var(--ui-accent);
      font-weight: 800;
      text-decoration: none;
    }

    .summary-strip {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem;
      max-width: 820px;
      margin-bottom: 1.5rem;
    }

    .summary-strip div {
      padding: 1.1rem;
      border: 1px solid var(--ui-border);
      border-radius: var(--ui-radius-md);
      background: var(--ui-surface);
      box-shadow: var(--ui-shadow-sm);
    }

    .summary-strip strong {
      display: block;
      color: var(--ui-primary);
      font-size: 2rem;
      line-height: 1;
    }

    .summary-strip span {
      color: var(--ui-muted);
      font-size: .9rem;
    }

    .customer-list {
      display: grid;
      gap: 1rem;
      max-width: 820px;
    }

    .customer-skeleton {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 1.15rem;
      border: 1px solid var(--ui-border);
      border-radius: var(--ui-radius-md);
      background: var(--ui-surface);
      box-shadow: var(--ui-shadow-sm);
    }

    .customer-skeleton > div {
      display: grid;
      gap: .75rem;
      width: min(100%, 360px);
    }

    .error-message {
      max-width: 820px;
      padding: 1rem;
      border: 1px solid color-mix(in srgb, var(--error) 36%, transparent);
      border-radius: var(--ui-radius-md);
      color: #fecdd3;
      background: color-mix(in srgb, var(--error) 12%, transparent);
    }

    @media (max-width: 560px) {
      .summary-strip {
        grid-template-columns: 1fr;
      }

      .customer-skeleton {
        align-items: stretch;
        flex-direction: column;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomersListPage implements OnInit {
  readonly store = inject(CustomersStore);
  readonly skeletonRows = [1, 2, 3];

  ngOnInit(): void {
    this.store.loadCustomers();
  }
}
