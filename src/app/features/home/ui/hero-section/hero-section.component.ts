import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { UiIconComponent } from '../../../../shared/ui/atoms/icon/ui-icon.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, UiIconComponent],
  template: `
    <section id="home" class="section hero-section">
      <div class="motion-grid" aria-hidden="true"></div>
      <div class="particle-field" aria-hidden="true">
        <span *ngFor="let particle of [].constructor(28); let index = index" [style.--i]="index"></span>
      </div>

      <div class="hero-grid">
        <div class="hero-copy reveal">
          <h2 class="hero-headline" data-text="Yugtek Technologies helps businesses to move forward.">Yugtek Technologies helps businesses to move forward.</h2>
          <p class="hero-text">We partner with teams to design secure platforms, automate operations, modernize systems, and launch digital products with measurable impact.</p>

          <div class="hero-actions" aria-label="Primary actions">
            <button class="primary-button" type="button" (click)="sectionSelected.emit('#contact')"><ui-icon name="arrow-right" />Start a Project</button>
            <button class="ghost-button" type="button" (click)="sectionSelected.emit('#portfolio')"><ui-icon name="briefcase" />View Work</button>
          </div>

          <dl class="hero-metrics" aria-label="Yugtek delivery metrics">
            <div><dt>Projects</dt><dd>150+</dd></div>
            <div><dt>Clients</dt><dd>50+</dd></div>
            <div><dt>Deployments</dt><dd>200+</dd></div>
          </dl>
        </div>

        <div class="hero-visual reveal" aria-label="Animated product engineering dashboard">
          <div class="dashboard-frame">
            <div class="dashboard-toolbar">
              <span></span><span></span><span></span>
              <b>delivery.status</b>
            </div>
            <div class="dashboard-content">
              <div class="deploy-card">
                <p>Live Platform</p>
                <strong>99.98%</strong>
                <span>availability</span>
              </div>
              <div class="pipeline-card">
                <span style="--w: 88%"><b></b><em>Discovery</em></span>
                <span style="--w: 76%"><b></b><em>Design</em></span>
                <span style="--w: 92%"><b></b><em>Build</em></span>
                <span style="--w: 68%"><b></b><em>Scale</em></span>
              </div>
              <div class="signal-card">
                <b>AI</b><b>Cloud</b><b>Security</b><b>UX</b>
              </div>
              <div class="code-card" aria-hidden="true">
                <span>const product = build(&#123;</span>
                <span>  secure: true,</span>
                <span>  scalable: true,</span>
                <span>  measurable: true</span>
                <span>&#125;);</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      min-height: 90svh;
      display: grid;
      align-items: center;
      padding-top: 3.5rem;
      background:
        linear-gradient(90deg, rgba(246, 251, 252, .9) 0%, rgba(246, 251, 252, .74) 42%, rgba(246, 251, 252, .24) 100%),
        linear-gradient(180deg, rgba(246, 251, 252, .62), rgba(246, 251, 252, .18) 54%, rgba(246, 251, 252, .88)),
        url('/yt_bg.png') center / cover no-repeat;
    }

    .motion-grid {
      position: absolute;
      inset: 0;
      opacity: .24;
      background-image:
        linear-gradient(color-mix(in srgb, var(--muted-2) 18%, transparent) 1px, transparent 1px),
        linear-gradient(90deg, color-mix(in srgb, var(--muted-2) 18%, transparent) 1px, transparent 1px);
      background-size: 48px 48px;
      mask-image: linear-gradient(180deg, #000, transparent 84%);
      animation: gridDrift 24s linear infinite;
    }

    .particle-field { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }

    .particle-field span {
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 999px;
      background: var(--accent);
      left: calc((var(--i) * 31) % 100 * 1%);
      top: calc((var(--i) * 43) % 100 * 1%);
      opacity: .46;
      animation: particle 9s linear infinite;
      animation-delay: calc(var(--i) * -.42s);
    }

    .hero-grid {
      position: relative;
      width: min(1180px, 100%);
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1.05fr .95fr;
      gap: clamp(2rem, 6vw, 5rem);
      align-items: center;
    }

    .hero-headline {
      position: relative;
      display: inline-block;
      color: #061119;
      padding-top: 3rem;
      text-shadow:
        0 1px 0 rgba(255, 255, 255, .5),
        0 12px 34px rgba(18, 184, 214, .18);
    }

    .hero-headline::before {
      content: attr(data-text);
      position: absolute;
      inset: 3rem 0 0;
      pointer-events: none;
      color: transparent;
      background: linear-gradient(110deg, transparent 0%, transparent 44%, rgba(255, 255, 255, .95) 50%, transparent 56%, transparent 100%);
      background-size: 220% 100%;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      opacity: .92;
      text-shadow: none;
      animation: headlineLightSweep 5.8s ease-in-out infinite;
    }

    .hero-headline::after {
      content: "";
      position: absolute;
      left: 0;
      right: 8%;
      bottom: -.35rem;
      height: 2px;
      border-radius: 999px;
      background: linear-gradient(90deg, transparent, rgba(18, 184, 214, .42), rgba(78, 227, 177, .5), transparent);
      opacity: .72;
      filter: blur(.2px);
    }

    .hero-text {
      font-size: clamp(1.03rem, 1.9vw, 1.22rem);
      max-width: 720px;
      margin: 1.5rem 0 2rem;
      color: var(--neutral-900);
    }

    .hero-actions, .hero-metrics {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .hero-metrics {
      margin: 2.25rem 0 0;
      padding: 0;
    }

    .hero-metrics div {
      min-width: 116px;
      padding: .9rem 1rem;
      border-left: 2px solid color-mix(in srgb, var(--accent-strong) 50%, transparent);
      background: var(--neutral-900);
      border-radius: 8px;
    }

    .hero-metrics dt { color: var(--neutral-100); font-size: .82rem; margin-bottom: .25rem; }
    .hero-metrics dd { color: var(--neutral-50); font-size: 1.7rem; font-weight: 900; margin: 0; }

    .hero-visual { min-height: 520px; display: grid; place-items: start center; padding-top: clamp(1rem, 4vw, 2rem); }

    .dashboard-frame {
      width: min(520px, 100%);
      border: 1px solid rgba(78, 227, 177, .28);
      border-radius: 8px;
      background: linear-gradient(145deg, rgba(6, 17, 25, .94), rgba(8, 25, 35, .9));
      box-shadow: 0 30px 92px rgba(6, 17, 25, .28), 0 0 0 1px rgba(255, 255, 255, .08) inset;
      overflow: hidden;
      transform: translateY(-1.25rem);
      animation: float 6s ease-in-out infinite;
    }

    .dashboard-toolbar {
      display: flex;
      align-items: center;
      gap: .45rem;
      min-height: 42px;
      padding: 0 .95rem;
      border-bottom: 1px solid rgba(78, 227, 177, .18);
      color: #c8f7ff;
      background: linear-gradient(90deg, rgba(18, 184, 214, .18), rgba(78, 227, 177, .08));
    }

    .dashboard-toolbar span {
      width: 10px;
      height: 10px;
      border-radius: 999px;
      background: var(--danger);
    }

    .dashboard-toolbar span:nth-child(2) { background: var(--warning); }
    .dashboard-toolbar span:nth-child(3) { background: var(--success); }
    .dashboard-toolbar b { margin-left: .5rem; font-size: .78rem; font-weight: 500; letter-spacing: .08em; }

    .dashboard-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      padding: 1rem;
    }

    .deploy-card, .pipeline-card, .signal-card, .code-card {
      border: 1px solid rgba(148, 210, 222, .18);
      border-radius: 8px;
      background: rgba(255, 255, 255, .07);
      padding: 1rem;
    }

    .deploy-card p, .deploy-card span { margin: 0; color: #b8d8e0; }
    .deploy-card strong { display: block; margin: .55rem 0 .2rem; font-size: 2.8rem; color: var(--success); line-height: 1; }

    .pipeline-card {
      display: grid;
      gap: 1rem;
      background: linear-gradient(145deg, rgba(18, 184, 214, .14), rgba(78, 227, 177, .08));
    }

    .pipeline-card span {
      display: grid;
      gap: .45rem;
      color: #f6fbfc;
      font-size: .88rem;
      font-weight: 600;
      text-shadow: 0 1px 10px rgba(0, 0, 0, .32);
    }

    .pipeline-card span b {
      position: relative;
      display: block;
      height: 8px;
      border-radius: 999px;
      background: rgba(246, 251, 252, .18);
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .08);
      overflow: hidden;
    }

    .pipeline-card span b::after {
      content: "";
      position: absolute;
      inset: 0 auto 0 0;
      display: block;
      width: var(--w);
      border-radius: 999px;
      background: linear-gradient(90deg, #38d9f2, #12b8d6, #4ee3b1);
      box-shadow: 0 0 18px rgba(18, 184, 214, .36);
      animation: progressIn 1.6s ease both;
    }

    .pipeline-card span em {
      color: #f6fbfc;
      font-style: normal;
      line-height: 1.1;
    }

    .signal-card {
      grid-column: span 2;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: .75rem;
    }

    .signal-card b {
      display: grid;
      place-items: center;
      min-height: 58px;
      border-radius: 8px;
      color: #f6fbfc;
      background: linear-gradient(135deg, rgba(18, 184, 214, .18), rgba(78, 227, 177, .14));
      border: 1px solid rgba(148, 210, 222, .16);
    }

    .code-card {
      grid-column: span 2;
      display: grid;
      gap: .35rem;
      color: #9eefff;
      font-family: var(--ui-font-sans);
      font-size: .82rem;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(.001deg); }
      50% { transform: translateY(-14px) rotate(.001deg); }
    }

    @keyframes gridDrift { to { background-position: 96px 96px; } }

    @keyframes particle {
      0% { transform: translateY(0); opacity: 0; }
      20% { opacity: .62; }
      100% { transform: translateY(-140px); opacity: 0; }
    }

    @keyframes progressIn {
      from { transform: scaleX(.2); transform-origin: left; opacity: .55; }
      to { transform: scaleX(1); transform-origin: left; opacity: 1; }
    }

    @keyframes headlineLightSweep {
      0% { background-position: 160% 50%; opacity: 0; }
      15% { opacity: .75; }
      55% { background-position: -60% 50%; opacity: .75; }
      70%, 100% { background-position: -60% 50%; opacity: 0; }
    }

    @media (max-width: 980px) {
      .hero-grid { grid-template-columns: 1fr; }
      .hero-visual { min-height: 420px; }
    }

    @media (max-width: 720px) {
      .hero-section { padding-top: 7rem; }
      .hero-actions { align-items: stretch; }
      .dashboard-content { grid-template-columns: 1fr; }
      .signal-card, .code-card { grid-column: auto; }
      .signal-card { grid-template-columns: repeat(2, 1fr); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSectionComponent {
  @Output() readonly sectionSelected = new EventEmitter<string>();
}
