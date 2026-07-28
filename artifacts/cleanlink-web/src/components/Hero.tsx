import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ShieldCheck, Star } from 'lucide-react';
import heroImg from '@/assets/hero-home.jpg';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-secondary font-semibold text-sm mb-6 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Now launching in Durban, KZN
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif leading-[1.1] text-secondary mb-6 tracking-tight">
            A spotless home. <br />
            <span className="text-primary">A trusted link.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Connect with background-checked, verified professional cleaners in your area. Secure bookings, fair wages, and total peace of mind.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="h-14 px-8 text-lg font-semibold rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
              Find a Cleaner
            </Button>
            <Button variant="outline" className="h-14 px-8 text-lg font-semibold rounded-full border-2 border-secondary text-secondary hover:bg-secondary/5">
              Become a Cleaner
            </Button>
          </div>
          
          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500 overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i}&backgroundColor=e5e7eb`} alt="avatar" />
                </div>
              ))}
            </div>
            <div className="text-sm font-medium text-secondary">
              <div className="flex items-center gap-1 text-yellow-400">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <span className="text-muted-foreground">Loved by 500+ homes in KZN</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* Decorative shapes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10" />
          
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-full rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={heroImg} 
              alt="Pristine living room" 
              className="w-full h-full object-cover"
            />
            
            {/* Floating Trust Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-6 -left-6 md:left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-[220px]"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-secondary">100% Verified</p>
                <p className="text-xs text-muted-foreground">Background checked</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}