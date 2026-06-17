import { UiIconName } from '../../../shared/ui/atoms/icon/ui-icon.component';

export interface NavItem { label: string; href: string; icon: UiIconName; }
export interface Stat { icon: string; value: string; label: string; }
export interface Feature { title: string; description: string; }
export interface Service { icon: string; title: string; description: string; features: string[]; }
export interface PortfolioItem { title: string; category: string; description: string; tech: string[]; }
export interface ProcessStep { step: string; title: string; description: string; }
export interface Testimonial { name: string; role: string; content: string; rating: number; }
export interface ContactForm { name: string; email: string; company: string; message: string; }
export interface ChatMessage { role: 'bot' | 'user'; text: string; }
