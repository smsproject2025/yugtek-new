import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Service } from '../../domain/home.models';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="section services-section">
      <div class="section-heading reveal">
        <p class="eyebrow">Services</p>
        <h2>Technology services for modern business.</h2>
        <p>From AI automation to enterprise platforms, we deliver systems that are reliable, usable, and tied to business outcomes.</p>
      </div>

      <div class="services-grid reveal-group">
        <article class="surface-card service-card" *ngFor="let service of services()">
          <div class="icon-badge">{{ service.icon }}</div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <ul>
            <li *ngFor="let feature of service.features">{{ feature }}</li>
          </ul>
        </article>
      </div>
    </section>
  `,
  styles: [`
    .services-section {
      background:
        linear-gradient(180deg, color-mix(in srgb, var(--text-strong) 3%, transparent), transparent),
        var(--page-soft);
    }

    .services-grid {
      width: min(1180px, 100%);
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }

    .service-card { padding: clamp(1.25rem, 3vw, 1.9rem); }
    .service-card ul { list-style: none; padding: 0; margin: 1.4rem 0 0; display: grid; gap: .65rem; }
    .service-card li { color: var(--muted); padding-left: 1.3rem; position: relative; }

    .service-card li::before {
      content: "";
      position: absolute;
      left: 0;
      top: .72rem;
      width: 7px;
      height: 7px;
      border-radius: 999px;
      background: var(--accent-strong);
    }

    @media (max-width: 980px) {
      .services-grid { grid-template-columns: repeat(2, 1fr); }
    }

    @media (max-width: 720px) {
      .services-grid { grid-template-columns: 1fr; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesSectionComponent {
  readonly services = input.required<Service[]>();
}
