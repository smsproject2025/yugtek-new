import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-tech-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="tech" class="section tech-section">
      <div class="section-heading reveal">
        <p class="eyebrow">Tech Stack</p>
        <h2 style="color: var(--neutral-800);">Modern tools, disciplined architecture.</h2>
        <p style="color: var(--neutral-600);">We choose proven frameworks, cloud platforms, and DevOps practices to keep products fast, maintainable, and resilient.</p>
      </div>

      <div class="tech-layout">
        <div class="tech-board reveal">
          <div class="tech-core">Yugtek Stack</div>
          <span *ngFor="let tech of technologies(); let index = index" [style.--index]="index">{{ tech }}</span>
        </div>
        <div class="tech-grid reveal-group">
          <article class="surface-card tech-pill" *ngFor="let tech of technologies()">
            <span></span>{{ tech }}
          </article>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .tech-section {
      background:
        radial-gradient(circle at 18% 22%, rgba(18, 184, 214, .12), transparent 28rem),
        radial-gradient(circle at 78% 72%, rgba(78, 227, 177, .14), transparent 30rem),
        linear-gradient(180deg, #f6fbfc, #eaf5f7);
    }

    .tech-layout {
      position: relative;
      width: min(1180px, 100%);
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1.05fr .95fr;
      gap: clamp(2rem, 6vw, 5rem);
      align-items: center;
    }

    .tech-board {
      --orbit-radius: 205px;
      min-height: 500px;
      position: relative;
      display: grid;
      place-items: center;
      border: 1px solid rgba(14, 91, 115, .18);
      border-radius: 8px;
      background:
        radial-gradient(circle at center, rgba(78, 227, 177, .16), transparent 9rem),
        linear-gradient(color-mix(in srgb, var(--accent) 10%, transparent) 1px, transparent 1px),
        linear-gradient(90deg, color-mix(in srgb, var(--accent) 10%, transparent) 1px, transparent 1px),
        linear-gradient(145deg, rgba(6, 17, 25, .94), rgba(8, 25, 35, .88));
      background-size: 38px 38px;
      box-shadow: 0 30px 80px rgba(6, 17, 25, .16);
      overflow: hidden;
    }

    .tech-board::before, .tech-board::after {
      content: "";
      position: absolute;
      inset: 50%;
      width: 310px;
      height: 310px;
      border-radius: 999px;
      border: 1px solid rgba(78, 227, 177, .24);
      transform: translate(-50%, -50%);
      animation: techRing 12s linear infinite;
    }

    .tech-board::after {
      width: 410px;
      height: 410px;
      border-color: rgba(18, 184, 214, .18);
      animation-duration: 18s;
      animation-direction: reverse;
    }

    .tech-core {
      position: relative;
      z-index: 2;
      width: 158px;
      min-height: 88px;
      display: grid;
      place-items: center;
      border-radius: 8px;
      color: #f6fbfc;
      background: linear-gradient(135deg, rgba(18, 184, 214, .32), rgba(78, 227, 177, .24));
      border: 1px solid rgba(78, 227, 177, .42);
      box-shadow: 0 0 38px rgba(18, 184, 214, .24), inset 0 1px 0 rgba(255, 255, 255, .16);
      font-weight: 700;
      text-align: center;
      animation: techCorePulse 3.4s ease-in-out infinite;
    }

    .tech-board span {
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 2;
      transform: rotate(calc(var(--index) * 30deg)) translateX(var(--orbit-radius)) rotate(calc(var(--index) * -30deg));
      background: rgba(255, 255, 255, .98);
      border: 1px solid rgba(18, 184, 214, .28);
      border-radius: 8px;
      padding: .62rem .78rem;
      color: #061119;
      box-shadow: 0 14px 32px rgba(6, 17, 25, .16);
      font-size: .82rem;
      font-weight: 700;
      animation: techOrbit 3.8s ease-in-out infinite;
      animation-delay: calc(var(--index) * .1s);
    }

    .tech-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: .85rem; }
    .tech-pill {
      padding: 1rem;
      display: flex;
      align-items: center;
      gap: .75rem;
      color: #061119;
      background: rgba(255, 255, 255, .9);
      border-color: rgba(14, 91, 115, .18);
      font-weight: 500;
    }

    .tech-pill:hover {
      color: var(--text-strong);
      background: var(--page);
      border-color: color-mix(in srgb, var(--accent) 62%, transparent);
    }

    .tech-pill span { width: 9px; height: 9px; border-radius: 999px; background: var(--accent); box-shadow: 0 0 16px color-mix(in srgb, var(--accent) 55%, transparent); }

    @keyframes techOrbit {
      0%, 100% {
        opacity: .74;
        transform: rotate(calc(var(--index) * 30deg)) translateX(var(--orbit-radius)) rotate(calc(var(--index) * -30deg));
      }
      50% {
        opacity: 1;
        transform: rotate(calc(var(--index) * 30deg)) translateX(calc(var(--orbit-radius) + 12px)) rotate(calc(var(--index) * -30deg));
      }
    }

    @keyframes techRing {
      from { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
      to { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
    }

    @keyframes techCorePulse {
      0%, 100% { box-shadow: 0 0 32px rgba(18, 184, 214, .2), inset 0 1px 0 rgba(255, 255, 255, .16); }
      50% { box-shadow: 0 0 52px rgba(78, 227, 177, .3), inset 0 1px 0 rgba(255, 255, 255, .2); }
    }

    @media (max-width: 980px) {
      .tech-layout { grid-template-columns: 1fr; }
      .tech-board { --orbit-radius: 160px; }
    }

    @media (max-width: 720px) {
      .tech-grid { grid-template-columns: 1fr; }
      .tech-board { --orbit-radius: 120px; min-height: 380px; }
      .tech-board span { font-size: .72rem; padding: .5rem .58rem; }
      .tech-board::before { width: 230px; height: 230px; }
      .tech-board::after { width: 310px; height: 310px; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TechSectionComponent {
  readonly technologies = input.required<string[]>();
}
