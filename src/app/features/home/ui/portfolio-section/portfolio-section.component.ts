import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PortfolioItem } from '../../domain/home.models';

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="portfolio" class="section portfolio-section">
      <div class="section-heading reveal">
        <p class="eyebrow">Portfolio</p>
        <h2>Selected success stories.</h2>
        <p>Representative projects showing how Yugtek turns business goals into usable, scalable digital systems.</p>
      </div>

      <div class="portfolio-grid reveal-group">
        <article class="surface-card portfolio-card" *ngFor="let item of portfolio()">
          <p>{{ item.category }}</p>
          <h3>{{ item.title }}</h3>
          <span>{{ item.description }}</span>
          <div class="tag-row"><b *ngFor="let tech of item.tech">{{ tech }}</b></div>
        </article>
      </div>
    </section>
  `,
  styles: [`
    .portfolio-grid {
      width: min(1180px, 100%);
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .portfolio-card {
      min-height: 252px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: clamp(1.25rem, 3vw, 1.9rem);
    }

    .portfolio-card > p { color: var(--accent-strong); text-transform: uppercase; letter-spacing: .14em; font-size: .75rem; font-weight: 850; margin: 0; }
    .portfolio-card > span { color: var(--muted); line-height: 1.7; }
    .tag-row { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
    .tag-row b { color: var(--text); background: color-mix(in srgb, var(--accent) 10%, transparent); padding: .42rem .6rem; border-radius: 999px; font-size: .76rem; }

    @media (max-width: 980px) {
      .portfolio-grid { grid-template-columns: 1fr; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioSectionComponent {
  readonly portfolio = input.required<PortfolioItem[]>();
}
