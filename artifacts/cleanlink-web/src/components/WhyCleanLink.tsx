import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Star, Wallet, Check } from 'lucide-react';
import mockupImg from '@/assets/app-mockup.jpg';

export default function WhyCleanLink() {
  return (
    <section id="trust" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-primary/15 rounded-full blur-3xl -z-10" />
              <img 
                src={mockupImg} 
                alt="CleanLink App Mockup" 
                className="w-full h-auto rounded-[2rem] shadow-2xl border-8 border-white/60"
              />
              
              {/* Glass floating rating badge */}
              <div className="absolute top-10 -right-8 bg-white/30 backdrop-blur-xl border border-white/50 p-4 rounded-xl shadow-[0_8px_32px_rgba(27,54,112,0.15)] flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center text-primary border border-primary/20">
                  <Star size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-sm font-bold text-secondary">4.9/5 Average</p>
                  <p className="text-xs text-muted-foreground">From 1000+ reviews</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-secondary mb-6">
              Safety and trust built into every booking
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Inviting someone into your home is a big deal. We don't take it lightly. Our platform is built on rigorous checks and transparent reviews.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4 p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_4px_24px_rgba(27,54,112,0.07)] hover:shadow-[0_8px_32px_rgba(27,54,112,0.12)] transition-shadow duration-300">
                <div className="w-12 h-12 bg-secondary/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-secondary shrink-0 border border-secondary/10">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Criminal Background Checks</h3>
                  <p className="text-muted-foreground">Every cleaner on our platform undergoes a thorough verification process before they can accept a single booking.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_4px_24px_rgba(27,54,112,0.07)] hover:shadow-[0_8px_32px_rgba(27,54,112,0.12)] transition-shadow duration-300">
                <div className="w-12 h-12 bg-secondary/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-secondary shrink-0 border border-secondary/10">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Distance-Based Matching</h3>
                  <p className="text-muted-foreground">We connect you with cleaners in your area, reducing transport costs and ensuring punctuality.</p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_4px_24px_rgba(27,54,112,0.07)] hover:shadow-[0_8px_32px_rgba(27,54,112,0.12)] transition-shadow duration-300">
                <div className="w-12 h-12 bg-secondary/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-secondary shrink-0 border border-secondary/10">
                  <Wallet size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-2">Secure Digital Payments</h3>
                  <p className="text-muted-foreground">No more rushing to the ATM. Pay securely via card or manual EFT with proof upload. Cleaners get paid fairly and reliably.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}