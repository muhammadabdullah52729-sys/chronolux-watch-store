import { useEffect } from 'react';

/**
 * Adds an IntersectionObserver that toggles the `is-visible` class on every
 * element with the `reveal` class as it scrolls into the viewport. Re-runs
 * whenever `dep` changes so newly-rendered page content gets observed.
 */
export function useReveal(dep: unknown = 0) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [dep]);
}
