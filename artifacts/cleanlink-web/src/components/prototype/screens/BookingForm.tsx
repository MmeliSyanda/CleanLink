import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, Plus, Minus } from 'lucide-react';

interface Props {
  onNavigate: (screenId: string) => void;
}

export default function BookingForm({ onNavigate }: Props) {
  const [hours, setHours] = useState(3);
  const rate = 180;
  const total = hours * rate;

  return (
    <div className="h-full w-full bg-white overflow-y-auto pb-24">
      <div className="bg-[#76C442] p-6 text-white">
        <button
          onClick={() => onNavigate('cleaner-profile')}
          className="mb-4"
          data-testid="button-back"
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold mb-2">Book Cleaning Service</h1>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold">
            ND
          </div>
          <div>
            <p className="font-semibold">Nombuso Dlamini</p>
            <p className="text-sm opacity-90">R180/hour</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-5">
        <div>
          <label className="block text-sm font-semibold text-[#1B3670] mb-2">Service Type</label>
          <div className="relative">
            <select
              className="w-full px-4 py-3 border border-gray-300 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-[#76C442] bg-white"
              data-testid="select-service-type"
            >
              <option>Domestic Cleaning</option>
              <option>Office Cleaning</option>
              <option>Deep Cleaning</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#1B3670] mb-2">Date</label>
          <input
            type="date"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#76C442]"
            data-testid="input-date"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#1B3670] mb-2">Start Time</label>
          <input
            type="time"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#76C442]"
            data-testid="input-time"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#1B3670] mb-2">Duration</label>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setHours(Math.max(1, hours - 1))}
              className="w-12 h-12 border-2 border-gray-300 rounded-xl flex items-center justify-center text-[#1B3670] hover:border-[#76C442] transition-colors"
              data-testid="button-decrease-hours"
            >
              <Minus size={20} />
            </button>
            <div className="flex-1 text-center">
              <p className="text-3xl font-bold text-[#1B3670]">{hours}</p>
              <p className="text-sm text-gray-500">hours</p>
            </div>
            <button
              onClick={() => setHours(hours + 1)}
              className="w-12 h-12 border-2 border-gray-300 rounded-xl flex items-center justify-center text-[#1B3670] hover:border-[#76C442] transition-colors"
              data-testid="button-increase-hours"
            >
              <Plus size={20} />
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#1B3670] mb-2">Service Address</label>
          <input
            type="text"
            defaultValue="123 Main Road, Durban"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#76C442]"
            data-testid="input-address"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#1B3670] mb-2">Special Instructions</label>
          <textarea
            placeholder="Any specific requirements..."
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#76C442] resize-none"
            data-testid="input-instructions"
          />
        </div>

        <div className="bg-[#76C442]/10 rounded-xl p-4 border border-[#76C442]/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Rate</span>
            <span className="font-semibold text-[#1B3670]">R{rate}/hour</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Duration</span>
            <span className="font-semibold text-[#1B3670]">{hours} hours</span>
          </div>
          <div className="h-px bg-gray-300 my-3" />
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-[#1B3670]">Total</span>
            <span className="text-2xl font-bold text-[#76C442]">R{total}</span>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <button
          onClick={() => onNavigate('payment')}
          className="w-full bg-[#76C442] text-white font-bold py-4 rounded-xl hover:bg-[#5da331] transition-colors"
          data-testid="button-proceed-payment"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
