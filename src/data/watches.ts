export type Watch = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
};

const px = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`;

export const watches: Watch[] = [
  {
    id: 'noir-chronograph',
    name: 'Noir Chronograph',
    tagline: 'Black Dial · Steel',
    description: 'A bold black-dial chronograph with a brushed steel bracelet built for the modern executive.',
    price: 1290,
    image: px(13212338),
    badge: 'Bestseller',
  },
  {
    id: 'heritage-gold',
    name: 'Heritage Gold',
    tagline: 'Gold · Leather',
    description: '18k gold-plated case paired with a hand-stitched leather strap for timeless sophistication.',
    price: 2450,
    image: px(12934247),
    badge: 'Limited',
  },
  {
    id: 'maritime-blue',
    name: 'Maritime Blue',
    tagline: 'Blue Dial · Steel',
    description: 'A deep navy dial with a polished steel body, inspired by oceanic exploration.',
    price: 1690,
    image: px(4600998),
  },
  {
    id: 'aviator-heritage',
    name: 'Aviator Heritage',
    tagline: 'Leather · Vintage',
    description: 'A vintage-inspired aviator watch with a warm leather strap and luminous markers.',
    price: 980,
    image: px(11818546),
  },
  {
    id: 'regatta-rose',
    name: 'Regatta Rose',
    tagline: 'Rose Gold · Black',
    description: 'Rose gold accents over a matte black dial for a confident, contemporary statement.',
    price: 2150,
    image: px(14377200),
    badge: 'New',
  },
  {
    id: 'classic-noir',
    name: 'Classic Noir',
    tagline: 'Leather · Minimal',
    description: 'A minimalist black dial on a supple leather strap, crafted for understated elegance.',
    price: 1120,
    image: px(1265619),
  },
  {
    id: 'silver-eclipse',
    name: 'Silver Eclipse',
    tagline: 'Silver · Steel',
    description: 'A monochrome stainless steel timepiece with a reflective finish and refined proportions.',
    price: 1390,
    image: px(125779),
  },
  {
    id: 'imperial-gold',
    name: 'Imperial Gold',
    tagline: 'Gold · Diamond',
    description: 'A diamond-studded bezel in luxurious gold for those who demand the extraordinary.',
    price: 3890,
    image: px(35991466),
    badge: 'Exclusive',
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Alexander Whitmore',
    role: 'Investment Banker, London',
    quote:
      'The Heritage Gold exceeded every expectation. The craftsmanship is extraordinary and it commands attention in every boardroom. ChronoLux has earned a customer for life.',
    rating: 5,
  },
  {
    name: 'Sofia Marchetti',
    role: 'Creative Director, Milan',
    quote:
      'I searched for months for the perfect timepiece. The Regatta Rose is a work of art — elegant, precise, and unmistakably luxurious. The service was impeccable.',
    rating: 5,
  },
  {
    name: 'James Okonkwo',
    role: 'Architect, New York',
    quote:
      'From the unboxing to the weight on the wrist, everything feels considered. The Noir Chronograph is my daily companion and it has only grown more beautiful.',
    rating: 5,
  },
];
