import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, input, Output, signal } from '@angular/core';
import { UiIconComponent } from '../../../../shared/ui/atoms/icon/ui-icon.component';
import { NavItem } from '../../domain/home.models';

@Component({
  selector: 'app-home-navbar',
  standalone: true,
  imports: [CommonModule, UiIconComponent],
  template: `
    <nav class="navbar" [class.navbar-scrolled]="scrolled()" [class.navbar-hidden]="hidden()" (mouseenter)="hovered.emit(true)" (mouseleave)="hovered.emit(false)" aria-label="Primary navigation">
      <a class="brand" href="#home" (click)="navigate('#home', $event)" aria-label="Yugtek Technologies home">
        <img src="/logo-with-name.png" alt="Yugtek Technologies logo" />
      </a>

      <div class="nav-actions">
        <button class="menu-button" type="button" (click)="mobileMenuOpen.set(!mobileMenuOpen())" aria-label="Toggle navigation menu" [attr.aria-expanded]="mobileMenuOpen()">
          <span></span><span></span><span></span>
        </button>
      </div>

      <div class="nav-links" [class.open]="mobileMenuOpen()">
        <button *ngFor="let item of items()" type="button" (click)="navigate(item.href)">
          <ui-icon [name]="item.icon" />
          {{ item.label }}
        </button>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      z-index: 100;
      inset: 0 0 auto 0;
      height: 10vh;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 clamp(1rem, 4vw, 4rem);
      background: var(--nav-bg);
      border-bottom: 1px solid var(--nav-border);
      backdrop-filter: blur(16px) saturate(120%);
      transition: background .25s ease, border-color .25s ease, box-shadow .25s ease, opacity .24s ease, transform .24s ease;
    }

    .navbar::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 100%;
      height: 28px;
      pointer-events: none;
      background: linear-gradient(180deg, color-mix(in srgb, var(--neutral-900) 12%, transparent), transparent);
      opacity: .92;
    }

    .navbar-scrolled {
      background: rgba(255, 255, 255, .82);
      border-color: rgba(14, 91, 115, .16);
      box-shadow: 0 16px 42px rgba(6, 17, 25, .12);
      backdrop-filter: blur(20px) saturate(145%);
    }

    .navbar-hidden {
      opacity: 0;
      transform: translateY(-110%);
      pointer-events: none;
    }

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
      width: 250px;
      height: 250px;
      object-fit: contain;
      filter: drop-shadow(0 8px 18px color-mix(in srgb, var(--accent) 26%, transparent));
    }

    .brand h3 {
      transform: translateY(1px);
      font-size: inherit;
      font-weight: inherit;
    }

    .nav-links { order: 2; display: flex; align-items: center; gap: .25rem; margin-left: auto; }
    .nav-actions { order: 3; display: flex; align-items: center; gap: .6rem; margin-left: 1rem; }
    .nav-links button, .menu-button { border: 0; cursor: pointer; font: inherit; }

    .nav-links button {
      display: inline-flex;
      align-items: center;
      gap: .42rem;
      background: transparent;
      color: var(--neutral-900);
      padding: .7rem .95rem;
      border-radius: 999px;
      font-size: .94rem;
      font-weight: 400;
      text-shadow: 0 1px 0 rgba(255, 255, 255, .45);
      box-shadow: none;
      transition: color .2s ease, background .2s ease, box-shadow .2s ease, transform .2s ease;
    }

    .nav-links button ui-icon {
      --icon-size: 1.08rem;
      --icon-stroke-width: 3;
      color: var(--accent-2);
    }

    .nav-links button:hover {
      color: #061119;
      background: rgba(255, 255, 255, .78);
      box-shadow: inset 0 0 0 1px rgba(14, 91, 115, .16), 0 10px 24px rgba(6, 17, 25, .08);
      transform: translateY(-1px);
    }

    .navbar-scrolled .nav-links button {
      background: transparent;
      color: #061119;
      box-shadow: none;
    }

    .navbar-scrolled .nav-links button ui-icon {
      color: #0e5b73;
    }

    .navbar-scrolled .nav-links button:hover {
      background: #ffffff;
      box-shadow: inset 0 0 0 1px rgba(14, 91, 115, .2), 0 12px 28px rgba(6, 17, 25, .1);
    }

    .menu-button {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: var(--surface-soft);
      padding: .75rem;
      border-radius: 8px;
    }

    .menu-button span { width: 22px; height: 2px; background: var(--text); }

    @media (max-width: 720px) {
      .navbar { height: 68px; }
      .menu-button { display: flex; }
      .nav-links {
        position: fixed;
        left: 1rem;
        right: 1rem;
        top: 78px;
        display: none;
        flex-direction: column;
        align-items: stretch;
        padding: .75rem;
        background: var(--menu-bg);
        border: 1px solid var(--border-strong);
        border-radius: 8px;
        backdrop-filter: blur(18px);
      }
      .nav-links.open { display: flex; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeNavbarComponent {
  readonly items = input.required<NavItem[]>();
  readonly scrolled = input(false);
  readonly hidden = input(false);
  readonly mobileMenuOpen = signal(false);

  @Output() readonly sectionSelected = new EventEmitter<string>();
  @Output() readonly hovered = new EventEmitter<boolean>();

  navigate(href: string, event?: Event): void {
    event?.preventDefault();
    this.mobileMenuOpen.set(false);
    this.sectionSelected.emit(href);
  }
}
