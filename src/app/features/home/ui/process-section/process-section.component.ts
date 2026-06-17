import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ProcessStep } from '../../domain/home.models';

@Component({
  selector: 'app-process-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section process-section">
      <div class="section-heading reveal">
        <p class="eyebrow">Process</p>
        <h2>A focused delivery workflow.</h2>
        <p>Clear stages, transparent communication, and steady iteration from first conversation to launch.</p>
      </div>

      <div class="process-grid reveal-group">
        <article class="surface-card process-card" *ngFor="let step of process()">
          <strong>{{ step.step }}</strong>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </article>
      </div>
    </section>
  `,
  styles: [`
    .process-grid {
      width: min(1180px, 100%);
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
    }

    .process-card { padding: clamp(1.25rem, 3vw, 1.9rem); }
    .process-card strong { color: var(--accent-strong); font-size: 2.3rem; opacity: .72; }

    @media (max-width: 980px) {
      .process-grid { grid-template-columns: repeat(2, 1fr); }
    }

    @media (max-width: 720px) {
      .process-grid { grid-template-columns: 1fr; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessSectionComponent {
  readonly process = input.required<ProcessStep[]>();
}
