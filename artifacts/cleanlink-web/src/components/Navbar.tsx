import React from 'react';
import { Button } from '@/components/ui/button';
import logoImg from '@assets/WhatsApp_Image_2026-07-28_at_13.43.09_1785239013382.jpeg';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logoImg} alt="CleanLink Logo" className="h-10 w-auto object-contain" />
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
          <a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#trust" className="hover:text-primary transition-colors">Trust & Safety</a>
          <a href="#for-cleaners" className="hover:text-primary transition-colors">For Cleaners</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="font-semibold text-secondary">Log In</Button>
          <Button className="bg-primary text-primary-foreground font-semibold px-6 hover:bg-primary/90 shadow-sm rounded-full">
            Book a Cleaner
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-secondary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 p-6 flex flex-col gap-4 shadow-lg">
          <a href="#how-it-works" className="text-foreground font-medium py-2" onClick={() => setIsMenuOpen(false)}>How it Works</a>
          <a href="#services" className="text-foreground font-medium py-2" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#trust" className="text-foreground font-medium py-2" onClick={() => setIsMenuOpen(false)}>Trust & Safety</a>
          <a href="#for-cleaners" className="text-foreground font-medium py-2" onClick={() => setIsMenuOpen(false)}>For Cleaners</a>
          <div className="h-px bg-gray-100 my-2" />
          <Button variant="outline" className="w-full font-semibold border-secondary text-secondary">Log In</Button>
          <Button className="w-full bg-primary text-primary-foreground font-semibold">Book a Cleaner</Button>
        </div>
      )}
    </nav>
  );
}