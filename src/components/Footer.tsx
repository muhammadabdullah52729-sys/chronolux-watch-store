import { Watch, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import type { Page } from './Navbar';

type FooterProps = {
  onNavigate: (page: Page) => void;
};

const quickLinks: { id: Page; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'collection', label: 'Collection' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const socials = [
  { Icon: Instagram, label: 'Instagram', href: '#' },
  { Icon: Facebook, label: 'Facebook', href: '#' },
  { Icon: Twitter, label: 'Twitter', href: '#' },
  { Icon: Youtube, label: 'YouTube', href: '#' },
];

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-ink-800">
      <div className="container-lux py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold">
                <Watch className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <span className="font-serif text-2xl font-semibold tracking-wide">
                Chrono<span className="text-gold">Lux</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Crafting timeless timepieces for the modern lifestyle. Where precision meets elegance.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="section-eyebrow mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-sm text-white/60 transition-colors duration-300 hover:text-gold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="section-eyebrow mb-5">Support</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="transition-colors hover:text-gold">
                <a href="#">Shipping & Returns</a>
              </li>
              <li className="transition-colors hover:text-gold">
                <a href="#">2-Year Warranty</a>
              </li>
              <li className="transition-colors hover:text-gold">
                <a href="#">Care Guide</a>
              </li>
              <li className="transition-colors hover:text-gold">
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="section-eyebrow mb-5">Follow Us</h4>
            <div className="flex gap-3">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:text-gold"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-white/50">
              service@chronolux.com
              <br />
              +1 (800) 555-0199
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} ChronoLux. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-gold">Privacy</a>
            <a href="#" className="transition-colors hover:text-gold">Terms</a>
            <a href="#" className="transition-colors hover:text-gold">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
