import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import logoImg from '@assets/WhatsApp_Image_2026-07-28_at_13.43.09_1785239013382.jpeg';

interface Props {
  onNavigate: (screenId: string) => void;
}

export default function SplashScreen({ onNavigate }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNavigate('welcome');
    }, 2000);
    return () => clearTimeout(timer);
  }, [onNavigate]);

  return (
    <div className="h-full w-full bg-gradient-to-br from-[#76C442] to-[#5da331] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <img src={logoImg} alt="CleanLink" className="w-32 h-32 object-contain mb-6" />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-white text-lg font-medium"
        >
          Your trusted cleaning partner
        </motion.p>
      </motion.div>
    </div>
  );
}
