import { useEffect, useState } from 'react';
import Navbar, { type Page } from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Collection from '@/pages/Collection';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import { useReveal } from '@/hooks/useReveal';

export default function App() {
  const [page, setPage] = useState<Page>('home');

  useReveal();

  const navigate = (next: Page) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Re-run reveal observer whenever the page changes so new elements animate in.
  useEffect(() => {
    window.requestAnimationFrame(() => {
      const els = document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)');
      els.forEach((el) => el.classList.remove('is-visible'));
    });
  }, [page]);

  return (
    <div className="min-h-screen bg-ink-900">
      <Navbar current={page} onNavigate={navigate} />
      <main>
        {page === 'home' && <Home onNavigate={navigate} />}
        {page === 'collection' && <Collection />}
        {page === 'about' && <About />}
        {page === 'contact' && <Contact />}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
