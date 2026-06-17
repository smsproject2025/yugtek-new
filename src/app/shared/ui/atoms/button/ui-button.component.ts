import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ui-button',
  standalone: true,
  template: `
    <button class="ui-button" [class.secondary]="variant() === 'secondary'" [attr.type]="type()">
      <ng-content />
    </button>
  `,
  styleUrl: './ui-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiButtonComponent {
  readonly variant = input<'primary' | 'secondary'>('primary');
  readonly type = input<'button' | 'submit' | 'reset'>('button');
}
