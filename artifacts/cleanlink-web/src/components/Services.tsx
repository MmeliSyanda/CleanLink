import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import domesticImg from '@/assets/domestic-cleaning.jpg';
import officeImg from '@/assets/office-cleaning.jpg';

const services = [
  {
    title: "Domestic Cleaning",
    image: domesticImg,
    description: "Reliable, thorough cleaning for homes, apartments, and estates. Trust our verified professionals with your most personal space.",
    features: ["Deep cleaning & dusting", "Laundry & ironing", "Kitchen & bathroom sanitation", "Move-in / Move-out cleans"]
  },
  {
    title: "Office Cleaning",
    image: officeImg,
    description: "Maintain a professional, spotless workspace for your team and clients. Flexible scheduling outside of business hours.",
    features: ["Desk & workstation sanitization", "Communal area upkeep", "Waste management", "Restroom maintenance"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-secondary mb-4">
              Services tailored to you
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether it's a cozy flat in Umhlanga or a bustling office in Westville, our network of cleaners has the expertise to handle it.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-shadow"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold font-serif text-secondary mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-8 line-clamp-3">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-secondary font-medium">
                      <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={20} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}