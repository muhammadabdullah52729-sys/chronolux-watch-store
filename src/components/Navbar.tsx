import { useEffect, useState } from 'react';
import { Menu, X, Watch } from 'lucide-react';

export type Page = 'home' | 'collection' | 'about' | 'contact';

type NavbarProps = {
  current: Page;
  onNavigate: (page: Page) => void;
};

const links: { id: Page; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'collection', label: 'Collection' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ current, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (page: Page) => {
    onNavigate(page);
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-ink-900/80 py-3 backdrop-blur-xl'
          : 'border-b border-transparent py-5'
      }`}
    >
      <nav className="container-lux flex items-center justify-between">
        <button
          onClick={() => go('home')}
          className="group flex items-center gap-2.5"
          aria-label="ChronoLux home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-ink-900">
            <Watch className="h-5 w-5" strokeWidth={1.5} />
          </span>
          <span className="font-serif text-2xl font-semibold tracking-wide">
            Chrono<span className="text-gold">Lux</span>
          </span>
        </button>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className={`relative text-sm font-medium uppercase tracking-widest transition-colors duration-300 ${
                  current === link.id ? 'text-gold' : 'text-white/80 hover:text-gold'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${
                    current === link.id ? 'w-full' : 'w-0'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-gold hover:text-gold md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-lux flex flex-col gap-1 pt-4 pb-6">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium uppercase tracking-widest transition-colors ${
                  current === link.id
                    ? 'bg-gold/10 text-gold'
                    : 'text-white/80 hover:bg-white/5 hover:text-gold'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
