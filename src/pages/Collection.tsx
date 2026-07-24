import WatchCard from '@/components/WatchCard';
import { watches } from '@/data/watches';

export default function Collection() {
  return (
    <div className="pt-32">
      {/* Header */}
      <section className="container-lux pb-16 text-center">
        <p className="reveal section-eyebrow mb-5">The Collection</p>
        <h1 className="reveal section-title text-balance">
          Timepieces for the <span className="gold-text">Discerning</span>
        </h1>
        <p className="reveal mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
          Each watch in our collection is a statement of craftsmanship and character. Explore our
          curated selection of eight signature timepieces.
        </p>
      </section>

      {/* Grid */}
      <section className="container-lux pb-24 md:pb-32">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {watches.map((watch, i) => (
            <WatchCard key={watch.id} watch={watch} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
