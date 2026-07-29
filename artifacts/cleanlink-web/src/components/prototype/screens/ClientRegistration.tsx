import React from 'react';
import { ChevronDown } from 'lucide-react';

interface Props {
  onNavigate: (screenId: string) => void;
}

export default function ClientRegistration({ onNavigate }: Props) {
  return (
    <div className="h-full w-full bg-white overflow-y-auto">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-[#1B3670] mb-2">Create Account</h1>
        <p className="text-gray-600 text-sm mb-6">Join CleanLink as a client</p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#1B3670] mb-2">Full Name</label>
            <input
              type="text"
              placeholder="e.g. Thandi Nkosi"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#76C442]"
              data-testid="input-fullname"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1B3670] mb-2">Email</label>
            <input
              type="email"
              placeholder="thandi@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#76C442]"
              data-testid="input-email"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1B3670] mb-2">Phone</label>
            <input
              type="tel"
              placeholder="+27 82 123 4567"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#76C442]"
              data-testid="input-phone"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1B3670] mb-2">Service Address</label>
            <input
              type="text"
              placeholder="123 Main Road, Durban"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#76C442]"
              data-testid="input-address"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1B3670] mb-2">Property Type</label>
            <div className="relative">
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-xl appearance-none focus:outline-none focus:ring-2 focus:ring-[#76C442] bg-white"
                data-testid="select-property-type"
              >
                <option>Residential</option>
                <option>Office</option>
                <option>Airbnb</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          <button
            onClick={() => onNavigate('client-home')}
            className="w-full bg-[#76C442] text-white font-bold py-4 rounded-xl hover:bg-[#5da331] transition-colors mt-6"
            data-testid="button-create-account"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
