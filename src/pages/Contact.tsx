import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

const contactInfo = [
  { Icon: Mail, label: 'Email', value: 'service@chronolux.com' },
  { Icon: Phone, label: 'Phone', value: '+1 (800) 555-0199' },
  { Icon: MapPin, label: 'Atelier', value: '12 Rue du Rhône, Geneva, Switzerland' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    window.setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-32">
      <section className="container-lux pb-24 md:pb-32">
        <div className="reveal mb-16 text-center">
          <p className="section-eyebrow mb-5">Get in Touch</p>
          <h1 className="section-title text-balance">
            We'd Love to <span className="gold-text">Hear From You</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Whether you have a question about a timepiece, an order, or simply want to share your
            story — our team is here for you.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Info */}
          <div className="reveal lg:col-span-2">
            <div className="flex flex-col gap-6">
              {contactInfo.map(({ Icon, label, value }) => (
                <div key={label} className="card-lux flex items-start gap-4 p-6">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/50">{label}</p>
                    <p className="mt-1 text-white/90">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-gold/20 bg-gradient-to-br from-gold/10 to-transparent p-6">
              <p className="font-serif text-xl font-semibold text-gold">Concierge Hours</p>
              <p className="mt-2 text-sm text-white/70">
                Monday – Friday: 9:00 – 19:00 CET
                <br />
                Saturday: 10:00 – 17:00 CET
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="reveal lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="card-lux flex flex-col gap-6 p-8 md:p-10"
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-widest text-white/60">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Alexander Whitmore"
                  className="input-lux"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-widest text-white/60">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="alexander@example.com"
                  className="input-lux"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-widest text-white/60">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help…"
                  className="input-lux resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="btn-gold w-full justify-center disabled:opacity-70"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Message Sent
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>

              {submitted && (
                <p className="animate-fade-in text-center text-sm text-gold">
                  Thank you. Our concierge team will respond within 24 hours.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
