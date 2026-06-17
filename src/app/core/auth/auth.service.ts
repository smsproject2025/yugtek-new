import { computed, Injectable, signal } from '@angular/core';

export interface AuthUser {
  id: string;
  name: string;
  roles: readonly string[];
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly userState = signal<AuthUser | null>(null);

  readonly user = this.userState.asReadonly();
  readonly isAuthenticated = computed(() => this.userState() !== null);

  hasRole(role: string): boolean {
    return this.userState()?.roles.includes(role) ?? false;
  }

  signIn(email: string): void {
    this.userState.set({
      id: 'demo-user',
      name: email.split('@')[0] || 'Yugtek User',
      roles: ['admin']
    });
  }

  signOut(): void {
    this.userState.set(null);
  }
}
