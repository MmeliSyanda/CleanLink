import React from 'react';
import { Search, Home, Calendar, MessageCircle, User, ShieldCheck, Star, MapPin } from 'lucide-react';

interface Props {
  onNavigate: (screenId: string) => void;
}

export default function ClientHome({ onNavigate }: Props) {
  const cleaners = [
    { name: 'Nombuso Dlamini', rating: 4.9, reviews: 87, distance: '2.3 km', rate: 180, verified: true },
    { name: 'Sipho Mthembu', rating: 4.8, reviews: 64, distance: '3.1 km', rate: 170, verified: true },
    { name: 'Precious Ndlovu', rating: 5.0, reviews: 92, distance: '1.8 km', rate: 195, verified: true }
  ];

  return (
    <div className="h-full w-full bg-gray-50 overflow-y-auto pb-20">
      <div className="bg-white p-6 pb-4">
        <h1 className="text-2xl font-bold text-[#1B3670] mb-4">Find a Cleaner</h1>
        
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by name or location..."
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#76C442]"
            data-testid="input-search"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {['Domestic', 'Office', 'By Rating', 'By Distance'].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 bg-gray-100 text-sm font-semibold text-[#1B3670] rounded-full whitespace-nowrap hover:bg-[#76C442] hover:text-white transition-colors"
              data-testid={`filter-${filter.toLowerCase().replace(' ', '-')}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 space-y-3">
        {cleaners.map((cleaner, idx) => (
          <button
            key={idx}
            onClick={() => onNavigate('cleaner-profile')}
            className="w-full bg-white rounded-2xl p-4 flex gap-4 hover:shadow-md transition-shadow"
            data-testid={`card-cleaner-${idx}`}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#76C442] to-[#5da331] flex items-center justify-center text-white font-bold text-lg shrink-0">
              {cleaner.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1 text-left">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-[#1B3670]">{cleaner.name}</h3>
                {cleaner.verified && (
                  <ShieldCheck size={16} className="text-[#76C442]" />
                )}
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 mb-1">
                <div className="flex items-center gap-1">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                  <span className="font-semibold">{cleaner.rating}</span>
                  <span>({cleaner.reviews})</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>{cleaner.distance}</span>
                </div>
              </div>
              <p className="text-sm font-bold text-[#76C442]">R{cleaner.rate}/hour</p>
            </div>
          </button>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-around">
        <button className="flex flex-col items-center gap-1 text-[#76C442]" data-testid="nav-home">
          <Home size={24} />
          <span className="text-xs font-semibold">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400" data-testid="nav-bookings">
          <Calendar size={24} />
          <span className="text-xs">Bookings</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400" data-testid="nav-messages">
          <MessageCircle size={24} />
          <span className="text-xs">Messages</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400" data-testid="nav-profile">
          <User size={24} />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
}
