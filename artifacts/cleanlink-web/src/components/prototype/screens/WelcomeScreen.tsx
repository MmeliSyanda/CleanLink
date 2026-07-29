import React from 'react';
import { UserCircle, Briefcase } from 'lucide-react';

interface Props {
  onNavigate: (screenId: string) => void;
}

export default function WelcomeScreen({ onNavigate }: Props) {
  return (
    <div className="h-full w-full bg-white p-6 flex flex-col">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-[#1B3670] mb-2 text-center">
          Welcome to CleanLink
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Choose how you'd like to continue
        </p>

        <div className="space-y-4">
          <button
            onClick={() => onNavigate('client-registration')}
            className="w-full bg-white border-2 border-[#76C442] rounded-2xl p-6 flex flex-col items-center gap-4 hover:bg-[#76C442]/5 transition-colors"
            data-testid="button-role-client"
          >
            <div className="w-16 h-16 rounded-full bg-[#76C442]/10 flex items-center justify-center">
              <UserCircle size={32} className="text-[#76C442]" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-[#1B3670] mb-1">I need a cleaner</h3>
              <p className="text-sm text-gray-600">
                Find verified professionals for your home or office
              </p>
            </div>
          </button>

          <button
            onClick={() => onNavigate('cleaner-registration')}
            className="w-full bg-white border-2 border-[#1B3670] rounded-2xl p-6 flex flex-col items-center gap-4 hover:bg-[#1B3670]/5 transition-colors"
            data-testid="button-role-cleaner"
          >
            <div className="w-16 h-16 rounded-full bg-[#1B3670]/10 flex items-center justify-center">
              <Briefcase size={32} className="text-[#1B3670]" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-[#1B3670] mb-1">I'm a cleaner</h3>
              <p className="text-sm text-gray-600">
                Join our platform and grow your cleaning business
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
