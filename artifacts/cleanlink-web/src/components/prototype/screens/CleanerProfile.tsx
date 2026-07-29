import React from 'react';
import { ShieldCheck, Star, ChevronLeft } from 'lucide-react';

interface Props {
  onNavigate: (screenId: string) => void;
}

export default function CleanerProfile({ onNavigate }: Props) {
  const days = ['Mon 12', 'Tue 13', 'Wed 14', 'Thu 15', 'Fri 16', 'Sat 17', 'Sun 18'];

  return (
    <div className="h-full w-full bg-white overflow-y-auto">
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-[#76C442] to-[#5da331]" />
        <button
          onClick={() => onNavigate('client-home')}
          className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
          data-testid="button-back"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-[#76C442] to-[#5da331] border-4 border-white flex items-center justify-center text-white font-bold text-2xl">
          ND
        </div>
      </div>

      <div className="pt-16 px-6 pb-24">
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <h1 className="text-2xl font-bold text-[#1B3670]">Nombuso Dlamini</h1>
            <ShieldCheck size={24} className="text-[#76C442]" />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#76C442]/10 rounded-full text-sm font-semibold text-[#76C442] mb-3">
            Background Checked
          </div>
          <div className="flex items-center justify-center gap-2 text-lg">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-[#1B3670]">4.9</span>
            <span className="text-gray-500">(87 reviews)</span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-bold text-[#1B3670] mb-2">About</h2>
          <p className="text-gray-700 leading-relaxed">
            Professional cleaner with 5 years of experience. Specializing in residential and office cleaning. Detail-oriented and reliable.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-bold text-[#1B3670] mb-3">Services Offered</h2>
          <div className="flex flex-wrap gap-2">
            {['Domestic Cleaning', 'Office Cleaning', 'Deep Cleaning', 'Move-in/out'].map((service) => (
              <span
                key={service}
                className="px-3 py-1.5 bg-gray-100 text-sm font-medium text-gray-700 rounded-lg"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-bold text-[#1B3670] mb-3">Availability</h2>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {days.map((day, idx) => (
              <button
                key={day}
                className={`px-4 py-3 rounded-xl text-sm font-semibold whitespace-nowrap ${
                  idx === 2
                    ? 'bg-[#76C442] text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
                data-testid={`day-${idx}`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-sm font-bold text-[#1B3670] mb-2">Rate</h2>
          <p className="text-3xl font-bold text-[#76C442]">R180<span className="text-lg text-gray-500">/hour</span></p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <button
          onClick={() => onNavigate('booking-form')}
          className="w-full bg-[#76C442] text-white font-bold py-4 rounded-xl hover:bg-[#5da331] transition-colors"
          data-testid="button-book-now"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
