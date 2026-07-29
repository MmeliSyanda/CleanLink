import React, { useState } from 'react';
import { ChevronLeft, CreditCard, Building2, Upload } from 'lucide-react';

interface Props {
  onNavigate: (screenId: string) => void;
}

export default function PaymentScreen({ onNavigate }: Props) {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'eft'>('card');

  return (
    <div className="h-full w-full bg-white overflow-y-auto pb-24">
      <div className="bg-[#1B3670] p-6 text-white">
        <button
          onClick={() => onNavigate('booking-form')}
          className="mb-4"
          data-testid="button-back"
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold">Payment</h1>
      </div>

      <div className="p-6 space-y-6">
        {/* Booking Summary */}
        <div className="bg-gray-50 rounded-xl p-4 space-y-2">
          <h2 className="font-bold text-[#1B3670] mb-3">Booking Summary</h2>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Cleaner</span>
            <span className="font-semibold text-[#1B3670]">Nombuso Dlamini</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Date</span>
            <span className="font-semibold text-[#1B3670]">Wed, 14 Feb 2024</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Duration</span>
            <span className="font-semibold text-[#1B3670]">3 hours</span>
          </div>
          <div className="h-px bg-gray-300 my-2" />
          <div className="flex justify-between">
            <span className="font-bold text-[#1B3670]">Total</span>
            <span className="text-xl font-bold text-[#76C442]">R540</span>
          </div>
        </div>

        {/* Payment Method */}
        <div>
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

        {/* Payment Details */}
        {paymentMethod === 'card' ? (
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
        ) : (
          <div className="space-y-4">
            <div className="bg-[#1B3670]/5 rounded-xl p-4 space-y-2 text-sm">
              <h3 className="font-bold text-[#1B3670] mb-2">Bank Details</h3>
              <div className="flex justify-between">
                <span className="text-gray-600">Bank</span>
                <span className="font-semibold text-[#1B3670]">FNB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Account Name</span>
                <span className="font-semibold text-[#1B3670]">CleanLink (PTY) Ltd</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Account Number</span>
                <span className="font-semibold text-[#1B3670]">62 8765 4321 098</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Reference</span>
                <span className="font-semibold text-[#76C442]">CL240214-001</span>
              </div>
            </div>

            <button
              className="w-full border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center gap-2 hover:border-[#76C442] transition-colors"
              data-testid="button-upload-proof"
            >
              <Upload size={32} className="text-gray-400" />
              <span className="font-semibold text-[#1B3670]">Upload Proof of Payment</span>
              <span className="text-xs text-gray-500">PDF, JPG, or PNG</span>
            </button>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <button
          onClick={() => onNavigate('booking-confirmed')}
          className="w-full bg-[#76C442] text-white font-bold py-4 rounded-xl hover:bg-[#5da331] transition-colors"
          data-testid="button-confirm-payment"
        >
          Confirm & Pay
        </button>
      </div>
    </div>
  );
}
