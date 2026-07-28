import React from 'react';
import logoImg from '@assets/WhatsApp_Image_2026-07-28_at_13.43.09_1785239013382.jpeg';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <img src={logoImg} alt="CleanLink" className="h-12 w-auto mb-6" />
            <p className="text-muted-foreground mb-6">
              Formalizing the informal sector. Connecting households and businesses with trusted, verified cleaners in KZN.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-secondary hover:bg-primary hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-secondary mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Find a Cleaner</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Become a Cleaner</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">How it Works</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-secondary mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Trust & Safety</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-secondary mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={20} className="text-primary shrink-0 mt-0.5" />
                <span>Durban, KwaZulu-Natal<br/>South Africa</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail size={20} className="text-primary shrink-0" />
                <a href="mailto:hello@cleanlink.co.za" className="hover:text-primary transition-colors">hello@cleanlink.co.za</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone size={20} className="text-primary shrink-0" />
                <span>0800 CLEANLINK</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CleanLink. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span>Built with trust in SA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}