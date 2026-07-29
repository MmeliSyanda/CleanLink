import React, { useState } from 'react';
import { ChevronLeft, CheckCircle2, Phone, MessageCircle } from 'lucide-react';

interface Props {
  onNavigate: (screenId: string) => void;
}

export default function ActiveJob({ onNavigate }: Props) {
  const [status, setStatus] = useState<'accepted' | 'confirmed' | 'in-progress' | 'completed'>('confirmed');

  const steps = [
    { id: 'accepted', label: 'Accepted' },
    { id: 'confirmed', label: 'Confirmed' },
    { id: 'in-progress', label: 'In Progress' },
    { id: 'completed', label: 'Completed' }
  ];

  const statusIndex = steps.findIndex(s => s.id === status);

  return (
    <div className="h-full w-full bg-white overflow-y-auto pb-32">
      <div className="bg-[#76C442] p-6 text-white">
        <button
          onClick={() => onNavigate('cleaner-dashboard')}
          className="mb-4"
          data-testid="button-back"
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold mb-2">Active Job</h1>
        <p className="text-sm opacity-90">Wednesday, 14 February 2024</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Status Tracker */}
        <div>
          <h2 className="text-sm font-bold text-[#1B3670] mb-4">Job Status</h2>
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
            <div
              className="absolute left-4 top-0 w-0.5 bg-[#76C442] transition-all duration-500"
              style={{ height: `${(statusIndex / (steps.length - 1)) * 100}%` }}
            />
            
            {/* Steps */}
            <div className="relative space-y-6">
              {steps.map((step, idx) => {
                const isActive = idx <= statusIndex;
                return (
                  <div key={step.id} className="flex items-center gap-4">
                    <div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
                        isActive
                          ? 'bg-[#76C442] border-[#76C442]'
                          : 'bg-white border-gray-300'
                      }`}
                    >
                      {isActive && <CheckCircle2 size={16} className="text-white" />}
                    </div>
                    <span
                      className={`font-semibold ${
                        isActive ? 'text-[#1B3670]' : 'text-gray-400'
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Booking Details */}
        <div className="bg-gray-50 rounded-xl p-4 space-y-2">
          <h3 className="font-bold text-[#1B3670] mb-2">Booking Details</h3>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Client</span>
            <span className="font-semibold text-[#1B3670]">Thandi Nkosi</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Service</span>
            <span className="font-semibold text-[#1B3670]">Domestic Cleaning</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Time</span>
            <span className="font-semibold text-[#1B3670]">9:00 AM - 12:00 PM</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Payment</span>
            <span className="font-semibold text-[#76C442]">R459</span>
          </div>
        </div>

        {/* Client Contact */}
        <div>
          <h3 className="text-sm font-bold text-[#1B3670] mb-3">Client Contact</h3>
          <div className="flex gap-3">
            <button
              className="flex-1 bg-white border-2 border-gray-300 rounded-xl p-3 flex items-center justify-center gap-2 font-semibold text-[#1B3670] hover:border-[#76C442] transition-colors"
              data-testid="button-call-client"
            >
              <Phone size={20} />
              <span>Call</span>
            </button>
            <button
              className="flex-1 bg-white border-2 border-gray-300 rounded-xl p-3 flex items-center justify-center gap-2 font-semibold text-[#1B3670] hover:border-[#76C442] transition-colors"
              data-testid="button-message-client"
            >
              <MessageCircle size={20} />
              <span>Message</span>
            </button>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        {status === 'confirmed' && (
          <button
            onClick={() => setStatus('in-progress')}
            className="w-full bg-[#76C442] text-white font-bold py-4 rounded-xl hover:bg-[#5da331] transition-colors"
            data-testid="button-start-job"
          >
            I've Arrived — Start Job
          </button>
        )}
        {status === 'in-progress' && (
          <button
            onClick={() => onNavigate('earnings-payout')}
            className="w-full bg-[#76C442] text-white font-bold py-4 rounded-xl hover:bg-[#5da331] transition-colors"
            data-testid="button-complete-job"
          >
            Mark as Complete
          </button>
        )}
        {status === 'completed' && (
          <button
            onClick={() => onNavigate('earnings-payout')}
            className="w-full bg-gray-200 text-gray-600 font-bold py-4 rounded-xl cursor-not-allowed"
            disabled
          >
            Job Completed
          </button>
        )}
      </div>
    </div>
  );
}
