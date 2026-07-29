import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface Props {
  onNavigate: (screenId: string) => void;
}

export default function BookingConfirmed({ onNavigate }: Props) {
  return (
    <div className="h-full w-full bg-white flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', duration: 0.6 }}
        className="mb-6"
      >
        <CheckCircle2 size={80} className="text-[#76C442]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-[#1B3670] mb-2">Booking Confirmed!</h1>
        <p className="text-gray-600 mb-6">Your cleaning service has been scheduled</p>

        <div className="bg-gray-50 rounded-xl p-6 mb-4 text-left">
          <div className="text-center mb-4">
            <span className="text-sm text-gray-600">Reference Number</span>
            <p className="text-xl font-bold text-[#76C442]">CL240214-001</p>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Cleaner</span>
              <span className="font-semibold text-[#1B3670]">Nombuso Dlamini</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date & Time</span>
              <span className="font-semibold text-[#1B3670]">Wed, 14 Feb • 9:00 AM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Duration</span>
              <span className="font-semibold text-[#1B3670]">3 hours</span>
            </div>
            <div className="h-px bg-gray-300 my-2" />
            <div className="flex justify-between">
              <span className="font-bold text-[#1B3670]">Total Paid</span>
              <span className="text-lg font-bold text-[#76C442]">R540</span>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="w-full space-y-3">
        <button
          onClick={() => onNavigate('rate-review')}
          className="w-full bg-[#76C442] text-white font-bold py-4 rounded-xl hover:bg-[#5da331] transition-colors"
          data-testid="button-view-booking"
        >
          View Booking
        </button>
        <button
          onClick={() => onNavigate('client-home')}
          className="w-full border-2 border-gray-300 text-[#1B3670] font-bold py-4 rounded-xl hover:bg-gray-50 transition-colors"
          data-testid="button-back-home"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
