import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="brand"><img src="/yugtek_logo_enhanced.png" alt="Yugtek Technologies logo" /><span>Yugtek Technologies</span></div>
      <p>&copy; 2026 Yugtek Technologies. AI, cloud, web and mobile software development.</p>
    </footer>
  `,
  styles: [`
    .footer {
      padding: 2rem clamp(1rem, 4vw, 4rem);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      border-top: 1px solid var(--border);
      background: var(--page);
    }

    .footer p { margin: 0; }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: .62rem;
      color: var(--text-strong);
      text-decoration: none;
      font-size: 1.08rem;
      font-weight: 600;
      line-height: 1;
      letter-spacing: .01em;
    }

    .brand img {
      width: 38px;
      height: 38px;
      object-fit: contain;
      filter: drop-shadow(0 8px 18px color-mix(in srgb, var(--accent) 26%, transparent));
    }

    @media (max-width: 720px) {
      .footer { flex-direction: column; align-items: flex-start; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeFooterComponent {}
