import { ShoppingBag } from 'lucide-react';
import type { Watch } from '@/data/watches';

type WatchCardProps = {
  watch: Watch;
  index?: number;
};

export default function WatchCard({ watch, index = 0 }: WatchCardProps) {
  return (
    <article
      className="card-lux reveal group flex flex-col overflow-hidden"
      style={{ transitionDelay: `${(index % 4) * 90}ms` }}
    >
      <div className="relative aspect-square overflow-hidden bg-ink-800">
        <img
          src={watch.image}
          alt={watch.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent opacity-60" />

        {watch.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ink-900">
            {watch.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gold/80">
          {watch.tagline}
        </p>
        <h3 className="mt-2 font-serif text-2xl font-semibold">{watch.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
          {watch.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="font-serif text-2xl font-semibold text-gold">
            ${watch.price.toLocaleString()}
          </span>
          <button className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-gold transition-all duration-300 hover:bg-gold hover:text-ink-900">
            <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
            Buy Now
          </button>
        </div>
      </div>
    </article>
  );
}
