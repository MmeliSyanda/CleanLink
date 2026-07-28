import React from 'react';
import { motion } from 'framer-motion';
import { Search, CalendarCheck, CreditCard, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: <Search size={28} />,
    title: "Find your match",
    description: "Browse verified cleaners in your local KZN area based on distance, ratings, and services offered."
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
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-secondary mb-4">
            How CleanLink Works
          </h2>
          <p className="text-lg text-muted-foreground">
            We've digitized the process of finding reliable help, making it simpler, safer, and entirely transparent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-100 -z-10" />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center text-primary mb-6 shadow-sm group-hover:border-primary group-hover:bg-primary/5 transition-colors relative">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}