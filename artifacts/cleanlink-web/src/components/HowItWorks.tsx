import React from 'react';
import { motion } from 'framer-motion';
import { Search, CalendarCheck, CreditCard, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: <Search size={28} />,
    title: "Find your match",
    description: "Browse verified cleaners in your area."
  },
  {
    icon: <CalendarCheck size={28} />,
    title: "Book digitally",
    description: "Select a date and time that suits you. Our real-time calendar ensures no double bookings."
  },
  {
    icon: <CreditCard size={28} />,
    title: "Pay securely",
    description: "Pay via card or manual EFT. We hold the funds securely until the job is completed."
  },
  {
    icon: <Sparkles size={28} />,
    title: "Enjoy a clean space",
    description: "Come back to a spotless home or office. Rate your cleaner to help the community."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1B3670 0%, #0f2147 60%, #163060 100%)' }}>
      {/* Ambient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-0 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4">
            How We Work
          </h2>
          <p className="text-lg text-white/60">
            A digitized process of finding a reliable domestic worker.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-white/10 -z-0" />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Glass icon circle */}
              <div className="w-24 h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-primary mb-6 shadow-[0_8px_32px_rgba(0,0,0,0.2)] group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300 relative">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}