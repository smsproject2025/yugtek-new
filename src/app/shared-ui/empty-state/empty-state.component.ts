import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="empty-state">
      <p>404</p>
      <h1>Page not found</h1>
      <a routerLink="/home">Return home</a>
    </main>
  `,
  styles: [`
    .empty-state {
      min-height: 100vh;
      display: grid;
      place-content: center;
      gap: 1rem;
      padding: 2rem;
      text-align: center;
      background: var(--ui-bg);
      color: var(--ui-text);
    }

    p {
      margin: 0;
      color: var(--ui-primary);
      font-weight: 900;
    }

    h1 {
      margin: 0;
    }

    a {
      color: var(--ui-accent);
      font-weight: 800;
      text-decoration: none;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyStateComponent {}
