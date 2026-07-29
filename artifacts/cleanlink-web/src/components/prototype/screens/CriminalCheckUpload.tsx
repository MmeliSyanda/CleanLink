import React from 'react';
import { Upload, FileCheck, ShieldCheck } from 'lucide-react';

interface Props {
  onNavigate: (screenId: string) => void;
}

export default function CriminalCheckUpload({ onNavigate }: Props) {
  return (
    <div className="h-full w-full bg-white flex flex-col p-6">
      <div className="flex-1 flex flex-col justify-center">
        <div className="w-16 h-16 rounded-full bg-[#76C442]/10 flex items-center justify-center mx-auto mb-6">
          <ShieldCheck size={32} className="text-[#76C442]" />
        </div>

        <h1 className="text-2xl font-bold text-[#1B3670] mb-2 text-center">
          Upload Your Background Check
        </h1>
        <p className="text-gray-600 text-center mb-8">
          All cleaners on CleanLink must submit a valid criminal check document
        </p>

        <div className="bg-[#1B3670]/5 rounded-xl p-4 mb-6">
          <h3 className="font-bold text-[#1B3670] mb-2 flex items-center gap-2">
            <FileCheck size={18} />
            Requirements
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#76C442] mt-1.5 shrink-0" />
              <span>Valid South African criminal record check</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#76C442] mt-1.5 shrink-0" />
              <span>Issued within the last 6 months</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#76C442] mt-1.5 shrink-0" />
              <span>Clear and legible document (PDF or photo)</span>
            </li>
          </ul>
        </div>

        <button
          className="w-full border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center gap-3 hover:border-[#76C442] hover:bg-[#76C442]/5 transition-colors mb-4"
          data-testid="button-upload-document"
        >
          <Upload size={40} className="text-gray-400" />
          <div className="text-center">
            <p className="font-semibold text-[#1B3670] mb-1">Tap to upload document</p>
            <p className="text-xs text-gray-500">PDF, JPG, or PNG (max 10MB)</p>
          </div>
        </button>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 text-sm text-yellow-800">
          <p className="font-semibold mb-1">Verification Process</p>
          <p className="text-xs">Your document will be reviewed within 24-48 hours. You'll receive a notification once approved.</p>
        </div>
      </div>

      <button
        onClick={() => onNavigate('subscription')}
        className="w-full bg-[#76C442] text-white font-bold py-4 rounded-xl hover:bg-[#5da331] transition-colors"
        data-testid="button-submit-verification"
      >
        Submit for Verification
      </button>
    </div>
  );
}
