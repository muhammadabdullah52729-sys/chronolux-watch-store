import { ArrowRight, ShieldCheck, Truck, Award, Lock, Star, Quote } from 'lucide-react';
import type { Page } from '@/components/Navbar';
import WatchCard from '@/components/WatchCard';
import { watches, testimonials } from '@/data/watches';

type HomeProps = {
  onNavigate: (page: Page) => void;
};

const features = [
  {
    Icon: Award,
    title: 'Premium Quality',
    text: 'Each timepiece is crafted from the finest materials with meticulous attention to detail.',
  },
  {
    Icon: Truck,
    title: 'Free Shipping',
    text: 'Complimentary insured delivery worldwide on every order, no minimum required.',
  },
  {
    Icon: ShieldCheck,
    title: '2 Year Warranty',
    text: 'Every watch is backed by a comprehensive two-year international warranty.',
  },
  {
    Icon: Lock,
    title: 'Secure Payment',
    text: 'Bank-grade encrypted checkout ensures your transactions are always protected.',
  },
];

export default function Home({ onNavigate }: HomeProps) {
  const featured = watches.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/12934247/pexels-photo-12934247.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Luxury watch"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/85 via-ink-900/70 to-ink-900" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900/90 via-ink-900/40 to-transparent" />
        </div>

        <div className="container-lux relative z-10 pt-24">
          <div className="max-w-3xl">
            <p className="animate-fade-down section-eyebrow mb-6 [animation-delay:200ms] opacity-0">
              The Art of Timekeeping
            </p>
            <h1 className="animate-fade-up font-serif text-5xl font-medium leading-[1.05] text-balance md:text-7xl lg:text-8xl [animation-delay:400ms] opacity-0">
              Premium Watches For
              <br />
              <span className="gold-text">Modern Lifestyle</span>
            </h1>
            <p className="animate-fade-up mt-8 max-w-xl text-lg leading-relaxed text-white/75 [animation-delay:700ms] opacity-0">
              Discover timeless elegance with our luxury watch collection crafted for professionals and
              style enthusiasts.
            </p>
            <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-4 [animation-delay:900ms] opacity-0">
              <button onClick={() => onNavigate('collection')} className="btn-gold">
                Shop Collection
                <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={() => onNavigate('about')} className="btn-outline">
                Our Story
              </button>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 md:flex">
          <span className="text-[10px] uppercase tracking-ultra">Scroll</span>
          <span className="h-12 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* Features */}
      <section className="container-lux py-24 md:py-32">
        <div className="reveal mb-16 text-center">
          <p className="section-eyebrow mb-4">Why Choose ChronoLux</p>
          <h2 className="section-title text-balance">
            A Commitment to <span className="gold-text">Excellence</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ Icon, title, text }, i) => (
            <div
              key={title}
              className="card-lux reveal group p-8 text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 text-gold transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-ink-900">
                <Icon className="h-7 w-7" strokeWidth={1.5} />
              </span>
              <h3 className="font-serif text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured collection */}
      <section className="container-lux pb-24 md:pb-32">
        <div className="reveal mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <p className="section-eyebrow mb-4">Featured Timepieces</p>
            <h2 className="section-title text-balance">
              Curated <span className="gold-text">Favorites</span>
            </h2>
          </div>
          <button
            onClick={() => onNavigate('collection')}
            className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-gold transition-colors hover:text-gold-light"
          >
            View All
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((watch, i) => (
            <WatchCard key={watch.id} watch={watch} index={i} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-white/10 bg-ink-800/50 py-24 md:py-32">
        <div className="container-lux">
          <div className="reveal mb-16 text-center">
            <p className="section-eyebrow mb-4">Client Voices</p>
            <h2 className="section-title text-balance">
              Trusted by <span className="gold-text">Connoisseurs</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className="card-lux reveal flex flex-col p-8"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <Quote className="h-8 w-8 text-gold/40" strokeWidth={1} />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/80">
                  "{t.quote}"
                </blockquote>
                <div className="mt-6 flex items-center gap-1 text-gold">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-gold" strokeWidth={0} />
                  ))}
                </div>
                <figcaption className="mt-4 border-t border-white/10 pt-4">
                  <p className="font-serif text-lg font-semibold">{t.name}</p>
                  <p className="text-xs uppercase tracking-widest text-white/50">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="container-lux py-24 md:py-32">
        <div className="reveal relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-ink-800 to-ink-900 px-8 py-16 text-center md:px-16 md:py-24">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="relative z-10">
            <h2 className="section-title text-balance">
              Begin Your <span className="gold-text">Legacy</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/70">
              Explore the full collection and find the timepiece that defines your journey.
            </p>
            <button onClick={() => onNavigate('collection')} className="btn-gold mt-8">
              Explore Collection
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
