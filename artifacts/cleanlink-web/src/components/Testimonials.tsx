import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    location: "Umhlanga Ridge",
    text: "Finding a reliable cleaner used to be a nightmare of WhatsApp messages and cash withdrawals. CleanLink changed everything. My cleaner is amazing and paying digitally is so easy.",
    rating: 5
  },
  {
    name: "Sipho Ndlovu",
    location: "Durban North",
    text: "We use CleanLink for our small office. The background checks give us incredible peace of mind. Highly recommend their service.",
    rating: 5
  },
  {
    name: "Michelle Peters",
    location: "Westville",
    text: "The distance-based matching is genius. My cleaner lives just 10 minutes away, which means she never struggles with transport to get here.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f0f7e8 0%, #e8f3ff 50%, #f0f7e8 100%)' }}>
      {/* Ambient blobs */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-secondary mb-4">
            Hear from our community
          </h2>
          <p className="text-lg text-muted-foreground">
            We are building trust across KwaZulu-Natal, one spotless home at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-3xl shadow-[0_8px_32px_rgba(27,54,112,0.1)] hover:shadow-[0_16px_48px_rgba(27,54,112,0.15)] transition-shadow duration-300 relative"
            >
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-secondary leading-relaxed mb-8 relative z-10">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm border border-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-secondary">{t.name}</h4>
                  <p className="text-sm text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}