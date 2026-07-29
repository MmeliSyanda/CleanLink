import React, { useState } from 'react';
import { CreditCard, Building2, CheckCircle2 } from 'lucide-react';

interface Props {
  onNavigate: (screenId: string) => void;
}

export default function SubscriptionPayment({ onNavigate }: Props) {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'eft'>('card');

  return (
    <div className="h-full w-full bg-white overflow-y-auto pb-24">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-[#1B3670] mb-2">Activate Your Profile</h1>
        <p className="text-gray-600 text-sm mb-6">One-time annual fee to keep your profile active</p>

        <div className="bg-gradient-to-br from-[#76C442] to-[#5da331] rounded-2xl p-6 text-white mb-6">
          <h2 className="text-lg font-bold mb-4">Annual Subscription</h2>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-4xl font-bold">R100</span>
            <span className="text-lg opacity-90">/year</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} />
              <span>Profile visible to all clients</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} />
              <span>Unlimited booking requests</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} />
              <span>Secure payment processing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} />
              <span>24/7 platform support</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="font-bold text-[#1B3670] mb-3">Payment Method</h2>
          <div className="space-y-3">
            <button
              onClick={() => setPaymentMethod('card')}
              className={`w-full p-4 border-2 rounded-xl flex items-center gap-3 transition-colors ${
                paymentMethod === 'card'
                  ? 'border-[#76C442] bg-[#76C442]/5'
                  : 'border-gray-300'
              }`}
              data-testid="button-payment-card"
            >
              <CreditCard size={24} className={paymentMethod === 'card' ? 'text-[#76C442]' : 'text-gray-400'} />
              <span className="font-semibold text-[#1B3670]">Pay by Card</span>
            </button>

            <button
              onClick={() => setPaymentMethod('eft')}
              className={`w-full p-4 border-2 rounded-xl flex items-center gap-3 transition-colors ${
                paymentMethod === 'eft'
                  ? 'border-[#76C442] bg-[#76C442]/5'
                  : 'border-gray-300'
              }`}
              data-testid="button-payment-eft"
            >
              <Building2 size={24} className={paymentMethod === 'eft' ? 'text-[#76C442]' : 'text-gray-400'} />
              <span className="font-semibold text-[#1B3670]">Manual EFT</span>
            </button>
          </div>
        </div>

        {paymentMethod === 'card' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-[#1B3670] mb-2">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#76C442]"
                data-testid="input-card-number"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#1B3670] mb-2">Expiry</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#76C442]"
                  data-testid="input-card-expiry"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1B3670] mb-2">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#76C442]"
                  data-testid="input-card-cvv"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <button
          onClick={() => onNavigate('cleaner-dashboard')}
          className="w-full bg-[#76C442] text-white font-bold py-4 rounded-xl hover:bg-[#5da331] transition-colors"
          data-testid="button-pay-activate"
        >
          Pay R100 & Go Live
        </button>
      </div>
    </div>
  );
}
