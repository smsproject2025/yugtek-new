import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, input, Output } from '@angular/core';
import { Testimonial } from '../../domain/home.models';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section testimonials-section">
      <div class="section-heading reveal">
        <p class="eyebrow">Testimonials</p>
        <h2>What clients say.</h2>
      </div>

      <article class="surface-card testimonial-card reveal" aria-live="polite">
        <div class="stars" aria-label="5 star rating"><span *ngFor="let star of stars(active().rating)">&#9733;</span></div>
        <blockquote>&ldquo;{{ active().content }}&rdquo;</blockquote>
        <h3>{{ active().name }}</h3>
        <p>{{ active().role }}</p>
      </article>
      <div class="testimonial-controls" aria-label="Testimonial controls">
        <button type="button" (click)="previous.emit()" aria-label="Previous testimonial">&lsaquo;</button>
        <button *ngFor="let testimonial of testimonials(); let index = index" type="button" [class.active]="index === activeIndex()" (click)="selected.emit(index)" [attr.aria-label]="'Show testimonial ' + (index + 1)"></button>
        <button type="button" (click)="next.emit()" aria-label="Next testimonial">&rsaquo;</button>
      </div>
    </section>
  `,
  styles: [`
    .testimonials-section {
      background:
        linear-gradient(180deg, color-mix(in srgb, var(--text-strong) 3%, transparent), transparent),
        var(--page-soft);
    }

    .testimonial-card {
      width: min(860px, 100%);
      margin: 0 auto;
      padding: clamp(1.7rem, 5vw, 3rem);
      text-align: center;
    }

    .stars { color: var(--warning); font-size: 1.2rem; letter-spacing: .16rem; margin-bottom: 1.3rem; }
    blockquote { color: var(--text); font-size: clamp(1.12rem, 2vw, 1.52rem); line-height: 1.7; margin: 0 0 2rem; font-style: italic; }
    .testimonial-card p { color: var(--accent-strong); margin: .3rem 0 0; }

    .testimonial-controls {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 1.5rem;
    }

    .testimonial-controls button {
      width: 42px;
      height: 42px;
      border: 0;
      cursor: pointer;
      font: inherit;
      border-radius: 8px;
      color: var(--text);
      background: var(--surface-soft);
      border: 1px solid var(--border);
      font-size: 1.35rem;
    }

    .testimonial-controls button:not(:first-child):not(:last-child) {
      width: 12px;
      height: 12px;
      border-radius: 999px;
      font-size: 0;
      padding: 0;
    }

    .testimonial-controls button.active {
      background: var(--accent);
      color: #061119;
      box-shadow: 0 0 16px color-mix(in srgb, var(--accent) 42%, transparent);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestimonialsSectionComponent {
  readonly testimonials = input.required<Testimonial[]>();
  readonly activeIndex = input.required<number>();

  @Output() readonly previous = new EventEmitter<void>();
  @Output() readonly next = new EventEmitter<void>();
  @Output() readonly selected = new EventEmitter<number>();

  active(): Testimonial {
    return this.testimonials()[this.activeIndex()];
  }

  stars(rating: number): number[] {
    return Array.from({ length: rating }, (_, index) => index);
  }
}
