import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiIconComponent } from '../../../../shared/ui/atoms/icon/ui-icon.component';
import { ContactForm } from '../../domain/home.models';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, FormsModule, UiIconComponent],
  template: `
    <section id="contact" class="section contact-section">
      <div class="section-heading reveal">
        <p class="eyebrow">Contact</p>
        <h2>Let&rsquo;s build something valuable.</h2>
        <p>Tell us what you want to improve, automate, modernize, or launch. We will help shape the right path forward.</p>
      </div>

      <div class="contact-layout">
        <div class="surface-card contact-info reveal">
          <h3>Start your digital transformation</h3>
          <p>Share a few details and the Yugtek team can map the right product, platform, or automation approach.</p>
          <a href="mailto:hello@yugtek.com"><ui-icon name="mail" />hello@yugtek.com</a>
          <a href="tel:+919999999999"><ui-icon name="phone" />+91 99999 99999</a>
        </div>

        <form class="surface-card contact-form reveal" (ngSubmit)="submitContact()" aria-label="Contact Yugtek Technologies">
          <label>Name<input name="name" [(ngModel)]="contactForm.name" placeholder="Your name" autocomplete="name" /></label>
          <label>Email<input name="email" type="email" [(ngModel)]="contactForm.email" placeholder="you@example.com" autocomplete="email" /></label>
          <label>Company<input name="company" [(ngModel)]="contactForm.company" placeholder="Company name" autocomplete="organization" /></label>
          <label>Message<textarea name="message" [(ngModel)]="contactForm.message" rows="5" placeholder="Tell us about your project"></textarea></label>
          <button class="primary-button" type="submit"><ui-icon name="send" />Send Message</button>
          <p class="form-status" *ngIf="formStatus()">{{ formStatus() }}</p>
        </form>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      background:
        linear-gradient(180deg, color-mix(in srgb, var(--accent-2) 8%, transparent), transparent 34rem),
        var(--page);
    }

    .contact-layout {
      position: relative;
      width: min(1180px, 100%);
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1.05fr .95fr;
      gap: clamp(2rem, 6vw, 5rem);
      align-items: center;
    }

    .contact-info, .contact-form { padding: clamp(1.25rem, 3vw, 1.9rem); }
    .contact-info a { display: inline-flex; align-items: center; gap: .5rem; color: var(--accent-strong); margin: 1rem 1.25rem 0 0; font-weight: 850; text-decoration: none; }
    .contact-info a:hover { color: var(--text-strong); }
    .contact-form { display: grid; gap: 1rem; }
    .contact-form label { display: grid; gap: .55rem; color: var(--text); font-weight: 750; }

    .contact-form input, .contact-form textarea {
      width: 100%;
      border: 1px solid var(--border-strong);
      background: color-mix(in srgb, var(--surface-strong) 74%, transparent);
      border-radius: 8px;
      color: var(--text);
      padding: .95rem 1rem;
      outline: none;
      font: inherit;
    }

    .contact-form input:focus, .contact-form textarea:focus {
      border-color: color-mix(in srgb, var(--accent) 70%, transparent);
      box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 10%, transparent);
    }

    .form-status { margin: 0; color: var(--success); }

    @media (max-width: 980px) {
      .contact-layout { grid-template-columns: 1fr; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactSectionComponent {
  readonly formStatus = signal('');
  contactForm: ContactForm = { name: '', email: '', company: '', message: '' };

  submitContact(): void {
    const { name, email, message } = this.contactForm;
    if (!name.trim() || !email.trim() || !message.trim()) {
      this.formStatus.set('Please fill in your name, email, and message.');
      return;
    }

    this.formStatus.set('Thanks. Your message has been captured and is ready for backend integration.');
    this.contactForm = { name: '', email: '', company: '', message: '' };
  }
}
