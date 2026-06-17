import { ChangeDetectionStrategy, Component, HostListener, OnDestroy, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AboutSectionComponent } from '../ui/about-section/about-section.component';
import { ChatWidgetComponent } from '../ui/chat-widget/chat-widget.component';
import { ContactSectionComponent } from '../ui/contact-section/contact-section.component';
import { HomeFooterComponent } from '../ui/home-footer/home-footer.component';
import { HomeNavbarComponent } from '../ui/navbar/home-navbar.component';
import { HeroSectionComponent } from '../ui/hero-section/hero-section.component';
import { PortfolioSectionComponent } from '../ui/portfolio-section/portfolio-section.component';
import { ProcessSectionComponent } from '../ui/process-section/process-section.component';
import { ServicesSectionComponent } from '../ui/services-section/services-section.component';
import { TechSectionComponent } from '../ui/tech-section/tech-section.component';
import { TestimonialsSectionComponent } from '../ui/testimonials-section/testimonials-section.component';
import { Feature, NavItem, PortfolioItem, ProcessStep, Service, Stat, Testimonial } from '../domain/home.models';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    AboutSectionComponent,
    ChatWidgetComponent,
    ContactSectionComponent,
    HomeFooterComponent,
    HomeNavbarComponent,
    HeroSectionComponent,
    PortfolioSectionComponent,
    ProcessSectionComponent,
    ServicesSectionComponent,
    TechSectionComponent,
    TestimonialsSectionComponent
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements OnInit, OnDestroy {
  constructor(private readonly title: Title, private readonly meta: Meta) {}

  readonly navItems: NavItem[] = [
    { label: 'Home', href: '#home', icon: 'home' },
    { label: 'About', href: '#about', icon: 'info' },
    { label: 'Services', href: '#services', icon: 'layers' },
    { label: 'Tech', href: '#tech', icon: 'cpu' },
    { label: 'Contact', href: '#contact', icon: 'mail' }
  ];

  readonly stats: Stat[] = [
    { icon: 'PX', value: '150+', label: 'Projects Delivered' },
    { icon: 'CX', value: '50+', label: 'Happy Clients' },
    { icon: 'TX', value: '25+', label: 'Technologies' },
    { icon: 'DX', value: '200+', label: 'Deployments' }
  ];

  readonly features: Feature[] = [
    { title: 'Innovation First', description: 'Pushing boundaries with AI-driven solutions and next-gen architectures.' },
    { title: 'Scalable Architecture', description: 'Enterprise-grade systems designed to grow with your business needs.' },
    { title: 'Digital Transformation', description: 'End-to-end modernization of legacy systems and processes.' }
  ];

  readonly services: Service[] = [
    {
      icon: 'AI',
      title: 'AI & Automation',
      description: 'Intelligent systems that automate repetitive work, unlock data insights, and improve operational efficiency.',
      features: ['AI strategy', 'Workflow automation', 'Predictive analytics', 'Chatbot development']
    },
    {
      icon: 'CL',
      title: 'Cloud Solutions',
      description: 'Cloud-native infrastructure, deployment pipelines, and migration strategies for scalable applications.',
      features: ['AWS and GCP', 'DevOps pipelines', 'Containerization', 'Monitoring']
    },
    {
      icon: 'WD',
      title: 'Web Development',
      description: 'Fast, responsive, and accessible web platforms built with modern frontend and backend technologies.',
      features: ['Enterprise web apps', 'SaaS platforms', 'API integration', 'UI engineering']
    },
    {
      icon: 'MA',
      title: 'Mobile Apps',
      description: 'High-quality mobile experiences for Android, iOS, and cross-platform products.',
      features: ['Native-like UX', 'Secure APIs', 'Offline flows', 'Push notifications']
    },
    {
      icon: 'SC',
      title: 'Cybersecurity',
      description: 'Security-first architecture, audits, and compliance support for critical digital platforms.',
      features: ['Security reviews', 'Auth systems', 'Compliance support', 'Data protection']
    },
    {
      icon: 'DT',
      title: 'Digital Transformation',
      description: 'Modernization of legacy systems, processes, and business workflows with future-ready technology.',
      features: ['Legacy migration', 'Process redesign', 'System integration', 'Performance optimization']
    }
  ];

  readonly technologies = ['React', 'Angular', 'Node.js', 'TypeScript', 'Python', 'AWS', 'GCP', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL', 'Three.js'];

  readonly portfolio: PortfolioItem[] = [
    {
      title: 'AI Business Automation Platform',
      category: 'Artificial Intelligence',
      description: 'A workflow automation platform using predictive models, document intelligence, and real-time dashboards.',
      tech: ['AI', 'Node.js', 'Angular', 'Cloud']
    },
    {
      title: 'Enterprise SaaS System',
      category: 'Web Application',
      description: 'A scalable SaaS product with role-based access, analytics, billing flows, and secure API architecture.',
      tech: ['Angular', 'TypeScript', 'PostgreSQL', 'Docker']
    },
    {
      title: 'FinTech Compliance Portal',
      category: 'Security & Compliance',
      description: 'A secure financial services portal with audit trails, approval workflows, and compliance reporting.',
      tech: ['Security', 'Cloud', 'APIs', 'DevOps']
    },
    {
      title: 'Retail E-commerce Experience',
      category: 'Commerce',
      description: 'A conversion-focused commerce platform with modern UX, product discovery, and optimized checkout.',
      tech: ['Frontend', 'Payments', 'Analytics', 'CMS']
    }
  ];

  readonly process: ProcessStep[] = [
    { step: '01', title: 'Discover', description: 'We analyze business goals, user needs, technical constraints, and success metrics.' },
    { step: '02', title: 'Design', description: 'We shape the architecture, user experience, roadmap, and delivery plan.' },
    { step: '03', title: 'Develop', description: 'We build iteratively with clean code, modern tooling, and transparent progress.' },
    { step: '04', title: 'Deploy', description: 'We launch, monitor, optimize, and support your product for long-term success.' }
  ];

  readonly testimonials: Testimonial[] = [
    {
      name: 'Rajesh Sharma',
      role: 'CTO, TechVentures Inc.',
      content: 'Yugtek transformed our legacy infrastructure into a modern cloud-native architecture. Their AI automation solutions reduced our operational costs by 40%. Exceptional team!',
      rating: 5
    },
    {
      name: 'Priya Patel',
      role: 'CEO, InnovateSoft',
      content: 'The level of expertise and professionalism Yugtek brings is unmatched. They delivered our enterprise SaaS platform ahead of schedule with outstanding quality.',
      rating: 5
    },
    {
      name: 'Amit Kumar',
      role: 'Director, FinTech Solutions',
      content: 'Working with Yugtek on our banking platform was a game-changer. Their security-first approach and scalable architecture helped us pass all compliance audits.',
      rating: 5
    },
    {
      name: 'Sneha Gupta',
      role: 'Product Lead, RetailMax',
      content: 'The e-commerce solution Yugtek built increased our conversion rates by 60%. Their UI/UX team truly understands user psychology and modern design patterns.',
      rating: 5
    }
  ];

  readonly activeTestimonial = signal(0);
  readonly scrolled = signal(false);
  readonly navbarHidden = signal(false);
  readonly navbarHovered = signal(false);
  readonly mouseX = signal(0);
  readonly mouseY = signal(0);

  private testimonialTimer?: ReturnType<typeof setInterval>;
  private navbarTimer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.title.setTitle('Yugtek Technologies | AI, Cloud, Web and Mobile Software Development');
    this.meta.updateTag({
      name: 'description',
      content: 'Yugtek Technologies designs and builds AI automation, cloud platforms, secure web apps, mobile apps, and digital transformation solutions for growing businesses.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Yugtek Technologies, software company, AI automation, cloud solutions, web development, mobile app development, cybersecurity, Angular development'
    });
    this.meta.updateTag({ property: 'og:title', content: 'Yugtek Technologies | AI, Cloud and Software Development' });
    this.meta.updateTag({
      property: 'og:description',
      content: 'Build scalable, secure, and intelligent digital products with Yugtek Technologies.'
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.applyTheme();
    document.documentElement.style.scrollBehavior = 'smooth';
    this.testimonialTimer = setInterval(() => this.nextTestimonial(), 5000);
    this.scheduleNavbarHide();
  }

  ngOnDestroy(): void {
    if (this.testimonialTimer) clearInterval(this.testimonialTimer);
    if (this.navbarTimer) clearTimeout(this.navbarTimer);
    document.documentElement.style.scrollBehavior = 'auto';
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const isScrolled = window.scrollY > 30;
    this.scrolled.set(isScrolled);
    this.navbarHidden.set(false);
    this.scheduleNavbarHide();
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.mouseX.set(event.clientX);
    this.mouseY.set(event.clientY);
  }

  nextTestimonial(): void {
    this.activeTestimonial.update((index) => (index + 1) % this.testimonials.length);
  }

  previousTestimonial(): void {
    this.activeTestimonial.update((index) => (index - 1 + this.testimonials.length) % this.testimonials.length);
  }

  setTestimonial(index: number): void {
    this.activeTestimonial.set(index);
  }

  scrollTo(href: string): void {
    this.navbarHidden.set(false);
    this.scheduleNavbarHide();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  setNavbarHover(isHovered: boolean): void {
    this.navbarHovered.set(isHovered);
    this.navbarHidden.set(false);

    if (this.navbarTimer) clearTimeout(this.navbarTimer);
    if (!isHovered) this.scheduleNavbarHide();
  }

  private applyTheme(): void {
    document.documentElement.dataset['theme'] = 'dark';
    document.documentElement.style.colorScheme = 'dark';
    this.meta.updateTag({ name: 'theme-color', content: '#061119' });
  }

  private scheduleNavbarHide(): void {
    if (this.navbarTimer) clearTimeout(this.navbarTimer);
    this.navbarTimer = setTimeout(() => {
      if (!this.navbarHovered()) this.navbarHidden.set(true);
    }, 5000);
  }
}
