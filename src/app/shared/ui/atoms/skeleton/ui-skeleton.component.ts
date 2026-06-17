import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'ui-skeleton',
  standalone: true,
  template: `
    <span
      class="ui-skeleton"
      [class.circle]="variant() === 'circle'"
      [style.width]="width()"
      [style.height]="height()"
      aria-hidden="true">
    </span>
  `,
  styleUrl: './ui-skeleton.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiSkeletonComponent {
  readonly width = input('100%');
  readonly height = input('1rem');
  readonly variant = input<'line' | 'block' | 'circle'>('line');
}
