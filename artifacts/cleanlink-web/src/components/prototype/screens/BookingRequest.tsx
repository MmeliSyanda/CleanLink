import React from 'react';
import { ChevronLeft, Calendar, Clock, MapPin, Home } from 'lucide-react';

interface Props {
  onNavigate: (screenId: string) => void;
}

export default function BookingRequest({ onNavigate }: Props) {
  return (
    <div className="h-full w-full bg-white overflow-y-auto pb-32">
      <div className="bg-[#1B3670] p-6 text-white">
        <button
          onClick={() => onNavigate('cleaner-dashboard')}
          className="mb-4"
          data-testid="button-back"
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold">Booking Request</h1>
      </div>

      <div className="p-6 space-y-6">
        {/* Client Info */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-white font-bold text-xl">
            TN
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#1B3670]">Thandi Nkosi</h2>
            <p className="text-sm text-gray-600">Residential Property</p>
          </div>
        </div>

        {/* Service Details */}
        <div className="bg-gray-50 rounded-xl p-4 space-y-3">
          <div className="flex items-center gap-3">
            <Home size={20} className="text-gray-400 shrink-0" />
            <div>
              <p className="text-xs text-gray-500">Service Type</p>
              <p className="font-semibold text-[#1B3670]">Domestic Cleaning</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Calendar size={20} className="text-gray-400 shrink-0" />
            <div>
              <p className="text-xs text-gray-500">Date & Time</p>
              <p className="font-semibold text-[#1B3670]">Wednesday, 14 February 2024 • 9:00 AM</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock size={20} className="text-gray-400 shrink-0" />
            <div>
              <p className="text-xs text-gray-500">Duration</p>
              <p className="font-semibold text-[#1B3670]">3 hours</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin size={20} className="text-gray-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-gray-500">Address</p>
              <p className="font-semibold text-[#1B3670]">123 Main Road, Durban North, KZN</p>
            </div>
          </div>
        </div>

        {/* Special Instructions */}
        <div>
          <h3 className="text-sm font-bold text-[#1B3670] mb-2">Special Instructions</h3>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-gray-700 text-sm">
              Please focus on kitchen and bathrooms. Two small dogs on the property (friendly).
            </p>
          </div>
        </div>

        {/* Payment Info */}
        <div className="bg-[#76C442]/10 rounded-xl p-4 border border-[#76C442]/20">
          <h3 className="text-sm font-bold text-[#1B3670] mb-3">Payment Breakdown</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Client pays</span>
              <span className="font-semibold text-[#1B3670]">R540</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Platform fee (15%)</span>
              <span className="font-semibold text-red-600">-R81</span>
            </div>
            <div className="h-px bg-gray-300 my-2" />
            <div className="flex justify-between">
              <span className="text-base font-bold text-[#1B3670]">You receive</span>
              <span className="text-2xl font-bold text-[#76C442]">R459</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 space-y-3">
        <button
          onClick={() => onNavigate('active-job')}
          className="w-full bg-[#76C442] text-white font-bold py-4 rounded-xl hover:bg-[#5da331] transition-colors"
          data-testid="button-accept"
        >
          Accept Booking
        </button>
        <button
          onClick={() => onNavigate('cleaner-dashboard')}
          className="w-full border-2 border-red-300 text-red-600 font-bold py-4 rounded-xl hover:bg-red-50 transition-colors"
          data-testid="button-decline"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
