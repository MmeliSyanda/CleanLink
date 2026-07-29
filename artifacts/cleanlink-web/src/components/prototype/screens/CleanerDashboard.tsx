import React from 'react';
import { Home, Calendar, DollarSign, User, Clock, MapPin } from 'lucide-react';

interface Props {
  onNavigate: (screenId: string) => void;
}

export default function CleanerDashboard({ onNavigate }: Props) {
  return (
    <div className="h-full w-full bg-gray-50 overflow-y-auto pb-20">
      <div className="bg-gradient-to-br from-[#1B3670] to-[#2a4a8f] p-6 text-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-lg">
            ND
          </div>
          <div>
            <h1 className="text-lg font-bold">Nombuso Dlamini</h1>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-400/20 rounded-full text-xs font-semibold">
              <Clock size={12} />
              Pending Verification
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
            <p className="text-2xl font-bold">12</p>
            <p className="text-xs opacity-90">Completed</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
            <p className="text-2xl font-bold">R2,160</p>
            <p className="text-xs opacity-90">This Month</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20">
            <p className="text-2xl font-bold">4.9</p>
            <p className="text-xs opacity-90">Rating</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-4">
          <h2 className="text-lg font-bold text-[#1B3670] mb-3">Incoming Requests</h2>
          <button
            onClick={() => onNavigate('booking-request')}
            className="w-full bg-white rounded-2xl p-4 border-2 border-[#76C442] hover:shadow-md transition-shadow"
            data-testid="card-booking-request"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-white font-bold shrink-0">
                TN
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-bold text-[#1B3670]">Thandi Nkosi</h3>
                <p className="text-sm text-gray-600">Residential • Domestic Cleaning</p>
              </div>
              <span className="text-xs font-bold text-[#76C442] bg-[#76C442]/10 px-2 py-1 rounded-full">
                NEW
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm mb-3">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={16} />
                <span>Wed, 14 Feb • 9:00 AM</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock size={16} />
                <span>3 hours</span>
              </div>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-600 mb-3">
              <MapPin size={16} className="shrink-0 mt-0.5" />
              <span>123 Main Road, Durban</span>
            </div>
            <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
              <span className="text-sm text-gray-600">Estimated pay</span>
              <span className="text-xl font-bold text-[#76C442]">R459</span>
            </div>
          </button>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#1B3670] mb-3">Upcoming Jobs</h2>
          <div className="bg-white rounded-2xl p-4 text-center text-gray-500 text-sm">
            No upcoming jobs yet
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-around">
        <button className="flex flex-col items-center gap-1 text-[#76C442]" data-testid="nav-home">
          <Home size={24} />
          <span className="text-xs font-semibold">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400" data-testid="nav-requests">
          <Calendar size={24} />
          <span className="text-xs">Requests</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400" data-testid="nav-calendar">
          <Clock size={24} />
          <span className="text-xs">Calendar</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400" data-testid="nav-earnings">
          <DollarSign size={24} />
          <span className="text-xs">Earnings</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400" data-testid="nav-profile">
          <User size={24} />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
}
