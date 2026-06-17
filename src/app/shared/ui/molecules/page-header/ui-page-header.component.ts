import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ui-page-header',
  standalone: true,
  template: `
    <header class="ui-page-header">
      <p>{{ eyebrow() }}</p>
      <h1>{{ title() }}</h1>
      @if (description()) {
        <span>{{ description() }}</span>
      }
    </header>
  `,
  styleUrl: './ui-page-header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiPageHeaderComponent {
  readonly eyebrow = input('');
  readonly title = input.required<string>();
  readonly description = input('');
}
