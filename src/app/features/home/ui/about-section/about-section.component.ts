import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Feature, Stat } from '../../domain/home.models';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="section about-section">
      <div class="section-heading reveal">
        <p class="eyebrow">About Yugtek</p>
        <h2>Practical innovation, built for growth.</h2>
        <p>Yugtek Technologies is a forward-thinking software company delivering intelligent, scalable, and future-ready technology solutions.</p>
      </div>

      <div class="stats-grid reveal-group">
        <article class="surface-card stat-card" *ngFor="let stat of stats()">
          <div class="icon-badge">{{ stat.icon }}</div>
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </article>
      </div>

      <div class="feature-grid reveal-group">
        <article class="surface-card feature-card" *ngFor="let feature of features()">
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </article>
      </div>
    </section>
  `,
  styles: [`
    .stats-grid, .feature-grid {
      width: min(1180px, 100%);
      margin: 0 auto;
      display: grid;
      gap: 1rem;
    }

    .stats-grid { grid-template-columns: repeat(4, 1fr); margin-bottom: 1rem; }
    .stat-card { padding: 1.45rem; text-align: center; }
    .stat-card .icon-badge { margin-inline: auto; }
    .stat-card strong { color: var(--neutral-50); display: block; font-size: clamp(2rem, 4vw, 2.8rem); margin: .8rem 0 .2rem; }
    .stat-card span { color: var(--neutral-100); }

    .feature-grid { grid-template-columns: repeat(3, 1fr); }
    .feature-card { padding: clamp(1.25rem, 3vw, 1.9rem); }

    @media (max-width: 980px) {
      .stats-grid { grid-template-columns: repeat(2, 1fr); }
      .feature-grid { grid-template-columns: 1fr; }
    }

    @media (max-width: 720px) {
      .stats-grid { grid-template-columns: 1fr; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutSectionComponent {
  readonly stats = input.required<Stat[]>();
  readonly features = input.required<Feature[]>();
}
