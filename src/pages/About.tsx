import { Check, Target, Eye, Gem } from 'lucide-react';

const stats = [
  { value: '25+', label: 'Years of Craft' },
  { value: '40K+', label: 'Watches Delivered' },
  { value: '120+', label: 'Countries Served' },
  { value: '4.9', label: 'Average Rating' },
];

const values = [
  {
    Icon: Target,
    title: 'Our Mission',
    text: 'To create timepieces that transcend trends — instruments of precision that become lifelong companions and heirlooms.',
  },
  {
    Icon: Eye,
    title: 'Our Vision',
    text: 'To be the most trusted name in accessible luxury, where world-class craftsmanship meets uncompromising service.',
  },
  {
    Icon: Gem,
    title: 'Our Promise',
    text: 'Every ChronoLux watch is assembled by master horologists and tested to exacting standards before it reaches your wrist.',
  },
];

const points = [
  'Swiss-grade automatic movements',
  'Sapphire crystal with anti-reflective coating',
  '316L surgical-grade stainless steel',
  'Hand-stitched Italian leather straps',
  'Water resistance up to 100 meters',
  'Individually numbered editions',
];

export default function About() {
  return (
    <div className="pt-32">
      {/* Intro */}
      <section className="container-lux pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="reveal">
            <p className="section-eyebrow mb-5">Our Story</p>
            <h1 className="section-title text-balance">
              The House of <span className="gold-text">ChronoLux</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Founded in 1999 by a collective of master watchmakers, ChronoLux was born from a
              singular conviction: that true luxury is measured not in price, but in precision,
              permanence, and the quiet confidence of a timepiece worn for a lifetime.
            </p>
            <p className="mt-4 leading-relaxed text-white/60">
              From our atelier to your wrist, every ChronoLux watch carries the weight of decades of
              horological expertise — refined, reimagined, and rendered for the modern world.
            </p>
          </div>

          <div className="reveal relative">
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <img
                src="https://images.pexels.com/photos/4600998/pexels-photo-4600998.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="ChronoLux craftsmanship"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-gold/30 bg-ink-800 px-6 py-5 shadow-xl md:block">
              <p className="font-serif text-3xl font-semibold text-gold">Est. 1999</p>
              <p className="text-xs uppercase tracking-widest text-white/60">Geneva · Switzerland</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 bg-ink-800/50 py-16">
        <div className="container-lux">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="reveal text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="font-serif text-4xl font-semibold text-gold md:text-5xl">{s.value}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-lux py-24 md:py-32">
        <div className="reveal mb-16 text-center">
          <p className="section-eyebrow mb-4">What Drives Us</p>
          <h2 className="section-title text-balance">
            Principles in <span className="gold-text">Motion</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map(({ Icon, title, text }, i) => (
            <div
              key={title}
              className="card-lux reveal p-8"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 text-gold">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <h3 className="font-serif text-2xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="border-t border-white/10 bg-ink-800/50 py-24 md:py-32">
        <div className="container-lux">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="reveal relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-3xl border border-white/10">
                <img
                  src="https://images.pexels.com/photos/14377200/pexels-photo-14377200.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Watch craftsmanship"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>

            <div className="reveal order-1 lg:order-2">
              <p className="section-eyebrow mb-5">Craftsmanship</p>
              <h2 className="section-title text-balance">
                Built Without <span className="gold-text">Compromise</span>
              </h2>
              <p className="mt-6 leading-relaxed text-white/70">
                We refuse shortcuts. Every component is selected, finished, and assembled with an
                obsession for detail that borders on the obsessive.
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                      <Check className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
