import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import cleanerImg from '@/assets/cleaner-portrait.jpg';

const benefits = [
  "Set your own hours and rates",
  "Build a trusted profile with verified reviews",
  "Secure payments — no chasing clients for cash",
  "Access to local jobs without high transport costs"
];

export default function ForCleaners() {
  return (
    <section id="for-cleaners" className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white/10 border border-white/20 rounded-[3rem] p-8 md:p-16 backdrop-blur-2xl shadow-[0_8px_64px_rgba(0,0,0,0.3)] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm mb-8 border border-white/20">
              For Professionals
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight">
              Turn your skills into a <span className="text-primary">sustainable business.</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
              We are formalizing the informal sector. Join CleanLink for just R100/year and get access to background checks, digital profiles, and a stream of local clients.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Check size={14} />
                  </div>
                  <span className="text-gray-200">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button className="h-14 px-8 text-lg font-semibold rounded-full bg-primary text-white hover:bg-primary/90 w-full sm:w-auto">
              Start Earning
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src={cleanerImg} 
              alt="Professional Cleaner" 
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-xl font-serif font-medium text-white italic">
                "CleanLink gave me the dignity of a verified profile. Now clients trust me before I even walk through the door."
              </p>
              <p className="mt-4 text-primary font-semibold">— Thandiwe M., Durban</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}