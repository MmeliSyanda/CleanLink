import React from 'react';
import { ChevronLeft, DollarSign, TrendingUp, CheckCircle2, Clock } from 'lucide-react';

interface Props {
  onNavigate: (screenId: string) => void;
}

export default function EarningsPayout({ onNavigate }: Props) {
  const payouts = [
    { ref: 'CL240214-001', date: '14 Feb 2024', amount: 459, status: 'paid' },
    { ref: 'CL240210-087', date: '10 Feb 2024', amount: 612, status: 'paid' },
    { ref: 'CL240207-053', date: '7 Feb 2024', amount: 459, status: 'pending' },
    { ref: 'CL240203-029', date: '3 Feb 2024', amount: 765, status: 'paid' }
  ];

  return (
    <div className="h-full w-full bg-white overflow-y-auto pb-24">
      <div className="bg-gradient-to-br from-[#76C442] to-[#5da331] p-6 text-white">
        <button
          onClick={() => onNavigate('cleaner-dashboard')}
          className="mb-4"
          data-testid="button-back"
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold mb-6">My Earnings</h1>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign size={18} />
              <span className="text-xs opacity-90">This Month</span>
            </div>
            <p className="text-2xl font-bold">R2,295</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={18} />
              <span className="text-xs opacity-90">Pending</span>
            </div>
            <p className="text-2xl font-bold">R459</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Bank Account */}
        <div>
          <h2 className="text-sm font-bold text-[#1B3670] mb-3">Bank Account</h2>
          <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Bank</span>
              <span className="font-semibold text-[#1B3670]">FNB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Account</span>
              <span className="font-semibold text-[#1B3670]">**** **** 4321</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Account Holder</span>
              <span className="font-semibold text-[#1B3670]">Nombuso Dlamini</span>
            </div>
          </div>
        </div>

        {/* Payout History */}
        <div>
          <h2 className="text-sm font-bold text-[#1B3670] mb-3">Payout History</h2>
          <div className="space-y-3">
            {payouts.map((payout) => (
              <div
                key={payout.ref}
                className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    payout.status === 'paid'
                      ? 'bg-[#76C442]/10 text-[#76C442]'
                      : 'bg-yellow-50 text-yellow-600'
                  }`}
                >
                  {payout.status === 'paid' ? (
                    <CheckCircle2 size={20} />
                  ) : (
                    <Clock size={20} />
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[#1B3670] text-sm">{payout.ref}</p>
                  <p className="text-xs text-gray-500">{payout.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[#1B3670]">R{payout.amount}</p>
                  <p
                    className={`text-xs font-semibold ${
                      payout.status === 'paid'
                        ? 'text-[#76C442]'
                        : 'text-yellow-600'
                    }`}
                  >
                    {payout.status === 'paid' ? 'Paid' : 'Pending'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <button
          onClick={() => onNavigate('cleaner-dashboard')}
          className="w-full bg-[#76C442] text-white font-bold py-4 rounded-xl hover:bg-[#5da331] transition-colors"
          data-testid="button-request-payout"
        >
          Request Payout
        </button>
      </div>
    </div>
  );
}
