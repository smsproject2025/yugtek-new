import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UiIconComponent } from '../../../../shared/ui/atoms/icon/ui-icon.component';
import { ChatMessage } from '../../domain/home.models';

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [CommonModule, FormsModule, UiIconComponent],
  template: `
    <div class="chat-widget" [class.open]="chatOpen()">
      <button class="chat-nudge" *ngIf="chatPromptVisible() && !chatOpen()" type="button" (click)="openChat()" aria-label="Open Yugtek chat assistant">
        <ui-icon name="message-circle" />
        <span>How can I assist you?</span>
      </button>

      <section class="chat-window" *ngIf="chatOpen()" aria-label="Yugtek chat assistant">
        <header>
          <div>
            <span class="chat-status"><ui-icon name="message-circle" /></span>
            <p>Yugtek Assist</p>
          </div>
          <button type="button" (click)="closeChat()" aria-label="Close chat"><ui-icon name="x" /></button>
        </header>

        <div class="chat-messages" aria-live="polite">
          <article *ngFor="let message of chatMessages()" [class.user]="message.role === 'user'">
            {{ message.text }}
          </article>
        </div>

        <form class="chat-input" (ngSubmit)="sendChatMessage()">
          <input name="chatMessage" [(ngModel)]="chatDraft" placeholder="Type your message" autocomplete="off" aria-label="Chat message" />
          <button type="submit" aria-label="Send chat message"><ui-icon name="send" /></button>
        </form>
      </section>

      <button class="chat-button" type="button" (click)="chatOpen() ? closeChat() : openChat()" [attr.aria-expanded]="chatOpen()" aria-label="Toggle Yugtek chat assistant">
        <ui-icon [name]="chatOpen() ? 'x' : 'message-circle'" />
      </button>
    </div>
  `,
  styles: [`
    .chat-widget { position: fixed; right: clamp(1rem, 3vw, 1.75rem); bottom: clamp(1rem, 3vw, 1.75rem); z-index: 120; display: grid; justify-items: end; gap: .8rem; }
    .chat-button, .chat-nudge, .chat-window header button, .chat-input button { border: 0; cursor: pointer; font: inherit; }
    .chat-button { min-width: 68px; min-height: 56px; display: inline-flex; align-items: center; justify-content: center; gap: .45rem; border-radius: 999px; color: var(--neutral-50); background: var(--neutral-900); border: 1px solid color-mix(in srgb, var(--accent) 38%, transparent); box-shadow: 0 18px 42px rgba(6, 17, 25, .2); font-weight: 850; transition: transform .22s ease, box-shadow .22s ease, background .22s ease, border-color .22s ease; }
    .chat-button ui-icon { --icon-size: 1.35rem; }
    .chat-button:hover { transform: translateY(-3px); background: var(--neutral-800); border-color: color-mix(in srgb, var(--accent-strong) 52%, transparent); box-shadow: 0 22px 52px rgba(6, 17, 25, .28); }
    .chat-nudge, .chat-window { border: 1px solid var(--border-strong); border-radius: 8px; background: rgba(255, 255, 255, .97); box-shadow: 0 24px 70px rgba(6, 17, 25, .16); }
    .chat-nudge { max-width: min(260px, calc(100vw - 2rem)); padding: .85rem 1rem; color: #061119; animation: chatPop .42s ease both, chatPulse 2.2s ease-in-out .42s infinite; }
    .chat-nudge { display: inline-flex; align-items: center; gap: .55rem; }
    .chat-nudge span, .chat-input button { font-weight: 850; }
    .chat-window { width: min(360px, calc(100vw - 2rem)); overflow: hidden; color: #123445; transform-origin: right bottom; animation: chatWindowIn .28s ease both; }
    .chat-window header, .chat-window header div { display: flex; align-items: center; }
    .chat-window header { min-height: 64px; justify-content: space-between; gap: 1rem; padding: .9rem 1rem; color: #fff; background: var(--neutral-900); }
    .chat-window header div { gap: .7rem; }
    .chat-window header p { margin: 0; color: #fff; font-weight: 400; }
    .chat-window header button { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 999px; color: #fff; background: rgba(255, 255, 255, .14); font-weight: 850; }
    .chat-window header button ui-icon { --icon-size: 1.25rem; }
    .chat-status { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 999px; color: #061119; background: var(--accent-strong); box-shadow: 0 0 0 5px rgba(78, 227, 177, .18); }
    .chat-status ui-icon { --icon-size: 1.25rem; }
    .chat-messages { min-height: 220px; max-height: 320px; display: grid; align-content: start; gap: .75rem; padding: 1rem; overflow-y: auto; background: linear-gradient(180deg, rgba(18, 184, 214, .08), transparent 55%), #f6fbfc; }
    .chat-messages article { width: fit-content; max-width: 88%; padding: .75rem .85rem; border: 1px solid rgba(14, 91, 115, .16); border-radius: 8px; color: #061119; background: #ffffff; box-shadow: 0 10px 26px rgba(14, 91, 115, .08); line-height: 1.45; font-weight: 400; animation: chatMessageIn .22s ease both; }
    .chat-messages article.user { justify-self: end; color: #061119; background: color-mix(in srgb, var(--accent-strong) 72%, white); border-color: color-mix(in srgb, var(--accent-strong) 46%, transparent); }
    .chat-input { display: grid; grid-template-columns: 1fr auto; gap: .6rem; padding: .85rem; border-top: 1px solid var(--border); background: #fff; }
    .chat-input input { min-width: 0; border: 1px solid var(--border-strong); border-radius: 8px; color: #061119; background: #f6fbfc; padding: .8rem .85rem; outline: none; }
    .chat-input input::placeholder { color: #5d7b8c; opacity: 1; }
    .chat-input input:focus { border-color: color-mix(in srgb, var(--accent) 70%, transparent); box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 12%, transparent); }
    .chat-input button { display: inline-flex; align-items: center; gap: .4rem; border-radius: 8px; padding: .8rem .9rem; color: var(--neutral-50); background: var(--neutral-900); border: 1px solid color-mix(in srgb, var(--accent) 36%, transparent); }

    @keyframes chatPop {
      from { opacity: 0; transform: translateY(12px) scale(.96); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    @keyframes chatPulse {
      0%, 100% { box-shadow: 0 18px 52px var(--shadow); }
      50% { box-shadow: 0 18px 52px color-mix(in srgb, var(--accent) 26%, transparent); }
    }

    @keyframes chatWindowIn {
      from { opacity: 0; transform: translateY(16px) scale(.94); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    @keyframes chatMessageIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 720px) {
      .chat-window { width: calc(100vw - 2rem); }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatWidgetComponent implements OnInit, OnDestroy {
  readonly chatOpen = signal(false);
  readonly chatPromptVisible = signal(false);
  readonly chatMessages = signal<ChatMessage[]>([
    { role: 'bot', text: 'Hi, I am Yugtek Assist. How can I assist you today?' }
  ]);

  chatDraft = '';
  private chatPromptTimer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.chatPromptTimer = setTimeout(() => this.chatPromptVisible.set(true), 5000);
  }

  ngOnDestroy(): void {
    if (this.chatPromptTimer) clearTimeout(this.chatPromptTimer);
  }

  openChat(): void {
    if (this.chatPromptTimer) clearTimeout(this.chatPromptTimer);
    this.chatOpen.set(true);
    this.chatPromptVisible.set(false);
  }

  closeChat(): void {
    this.chatOpen.set(false);
  }

  sendChatMessage(): void {
    const message = this.chatDraft.trim();
    if (!message) return;

    this.chatMessages.update((messages) => [
      ...messages,
      { role: 'user', text: message },
      { role: 'bot', text: 'Thanks. Our team can help with that. Please share your email or use the contact form so we can follow up.' }
    ]);
    this.chatDraft = '';
  }
}
