import React from 'react';
import { ChevronDown, Upload } from 'lucide-react';

interface Props {
  onNavigate: (screenId: string) => void;
}

export default function CleanerRegistration({ onNavigate }: Props) {
  return (
    <div className="h-full w-full bg-white overflow-y-auto pb-24">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-[#1B3670] mb-2">Cleaner Registration</h1>
        <p className="text-gray-600 text-sm mb-6">Join our platform as a professional cleaner</p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-[#1B3670] mb-2">Full Name</label>
            <input
              type="text"
              placeholder="e.g. Nombuso Dlamini"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#76C442]"
              data-testid="input-fullname"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1B3670] mb-2">SA ID Number</label>
            <input
              type="text"
              placeholder="0000000000000"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#76C442]"
              data-testid="input-id-number"
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
            <label className="block text-sm font-semibold text-[#1B3670] mb-2">Email</label>
            <input
              type="email"
              placeholder="nombuso@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#76C442]"
              data-testid="input-email"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1B3670] mb-2">Profile Photo</label>
            <button
              className="w-full border-2 border-dashed border-gray-300 rounded-xl p-4 flex items-center justify-center gap-2 hover:border-[#76C442] transition-colors"
              data-testid="button-upload-photo"
            >
              <Upload size={20} className="text-gray-400" />
              <span className="text-sm font-semibold text-gray-600">Upload Photo</span>
            </button>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1B3670] mb-2">Service Types</label>
            <div className="space-y-2">
              {['Domestic Cleaning', 'Office Cleaning'].map((service) => (
                <label key={service} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="w-5 h-5 rounded border-gray-300 text-[#76C442] focus:ring-[#76C442]"
                    data-testid={`checkbox-${service.toLowerCase().replace(' ', '-')}`}
                  />
                  <span className="text-gray-700">{service}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1B3670] mb-2">Hourly Rate (ZAR)</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 font-semibold">R</span>
              <input
                type="number"
                placeholder="180"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#76C442]"
                data-testid="input-rate"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1B3670] mb-2">Availability</label>
            <div className="grid grid-cols-4 gap-2">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                <button
                  key={day}
                  className="px-3 py-2 border-2 border-gray-300 rounded-lg text-sm font-semibold text-gray-600 hover:border-[#76C442] hover:bg-[#76C442]/5 transition-colors"
                  data-testid={`button-day-${day.toLowerCase()}`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <button
          onClick={() => onNavigate('criminal-check')}
          className="w-full bg-[#76C442] text-white font-bold py-4 rounded-xl hover:bg-[#5da331] transition-colors"
          data-testid="button-continue"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
