import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { UiIconComponent } from '../../../shared/ui/atoms/icon/ui-icon.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, UiIconComponent],
  templateUrl: './login.page.html',
  styleUrl: './login.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPage {
  readonly error = signal('');
  email = 'demo@yugtek.com';
  password = 'demo1234';

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  submit(): void {
    if (!this.email.trim() || !this.password.trim()) {
      this.error.set('Enter your email and password to continue.');
      return;
    }

    this.auth.signIn(this.email);
    this.router.navigateByUrl('/customers');
  }
}
