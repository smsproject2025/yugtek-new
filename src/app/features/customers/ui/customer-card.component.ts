import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Customer } from '../domain/customer.model';
import { UiButtonComponent } from '../../../shared/ui/atoms/button/ui-button.component';

@Component({
  selector: 'app-customer-card',
  standalone: true,
  imports: [RouterLink, UiButtonComponent],
  template: `
    <article class="customer-card ui-fade-in-up">
      <div class="customer-main">
        <p [class.inactive]="customer().status === 'inactive'">{{ customer().status }}</p>
        <h3>{{ customer().fullName }}</h3>
        <span>{{ customer().email }}</span>
      </div>

      <a [routerLink]="[customer().id]" aria-label="View customer details">
        <ui-button variant="secondary">View</ui-button>
      </a>
    </article>
  `,
  styles: [`
    .customer-card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.25rem;
      padding: 1.15rem;
      border: 1px solid var(--ui-border);
      border-radius: var(--ui-radius-md);
      background: var(--ui-surface);
      color: var(--ui-text);
      box-shadow: var(--ui-shadow-sm);
      transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
    }

    .customer-card:hover {
      transform: translateY(-2px);
      border-color: color-mix(in srgb, var(--ui-primary) 36%, transparent);
      box-shadow: var(--ui-shadow-md);
    }

    p {
      margin: 0 0 .35rem;
      color: var(--ui-primary);
      font-size: .75rem;
      font-weight: 800;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    p.inactive {
      color: var(--warning);
    }

    h3 {
      margin: 0;
      font-size: 1.15rem;
    }

    span {
      color: var(--ui-muted);
    }

    a {
      align-self: center;
      text-decoration: none;
    }

    @media (max-width: 560px) {
      .customer-card {
        align-items: stretch;
        flex-direction: column;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerCardComponent {
  readonly customer = input.required<Customer>();
}
