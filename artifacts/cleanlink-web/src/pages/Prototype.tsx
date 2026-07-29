import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Battery, Signal, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  SplashScreen, 
  WelcomeScreen,
  ClientRegistration,
  ClientHome,
  CleanerProfile,
  BookingForm,
  PaymentScreen,
  BookingConfirmed,
  RateReview,
  CleanerRegistration,
  CriminalCheckUpload,
  SubscriptionPayment,
  CleanerDashboard,
  BookingRequest,
  ActiveJob,
  EarningsPayout
} from '@/components/prototype/screens';

type Flow = 'client' | 'cleaner';

interface ScreenConfig {
  id: string;
  component: React.ComponentType<{ onNavigate: (screenId: string) => void }>;
  title: string;
  userInputs: string[];
  systemOutput: string;
  navigation: string;
}

const sharedScreens: ScreenConfig[] = [
  {
    id: 'splash',
    component: SplashScreen,
    title: 'Splash Screen',
    userInputs: ['None — auto-navigates after animation'],
    systemOutput: 'CleanLink logo with animated fade-in, tagline display',
    navigation: 'Auto-navigates to Welcome screen after 2 seconds'
  },
  {
    id: 'welcome',
    component: WelcomeScreen,
    title: 'Welcome / Role Select',
    userInputs: ['Tap "I need a cleaner" card', 'Tap "I\'m a cleaner" card'],
    systemOutput: 'Two role selection cards with icons and descriptions',
    navigation: 'Client card → Client Registration | Cleaner card → Cleaner Registration'
  }
];

const clientScreens: ScreenConfig[] = [
  {
    id: 'client-registration',
    component: ClientRegistration,
    title: 'Client Registration',
    userInputs: ['Full Name, Email, Phone (SA format), Service Address, Property Type (dropdown)'],
    systemOutput: 'Account created, OTP sent to phone number',
    navigation: 'Create Account → OTP verification (inline) → Client Home'
  },
  {
    id: 'client-home',
    component: ClientHome,
    title: 'Client Home / Search',
    userInputs: ['Search query, filter chips (Domestic/Office/Rating/Distance)'],
    systemOutput: 'Filtered list of cleaners with photos, ratings, distance, hourly rates',
    navigation: 'Tap cleaner card → Cleaner Profile'
  },
  {
    id: 'cleaner-profile',
    component: CleanerProfile,
    title: 'Cleaner Profile',
    userInputs: ['View availability calendar, tap "Book Now"'],
    systemOutput: 'Cleaner details, verification badge, bio, services, rates, calendar',
    navigation: 'Book Now → Booking Form'
  },
  {
    id: 'booking-form',
    component: BookingForm,
    title: 'Booking Form',
    userInputs: ['Service Type, Date, Time, Duration (stepper), Address, Special Instructions'],
    systemOutput: 'Auto-calculated total price based on duration and rate',
    navigation: 'Proceed to Payment → Payment Screen'
  },
  {
    id: 'payment',
    component: PaymentScreen,
    title: 'Payment Screen',
    userInputs: ['Select payment method (Card/EFT), enter card details OR upload proof of payment'],
    systemOutput: 'Booking summary, payment options, bank details for EFT',
    navigation: 'Confirm & Pay → Booking Confirmed'
  },
  {
    id: 'booking-confirmed',
    component: BookingConfirmed,
    title: 'Booking Confirmed',
    userInputs: ['Tap "View Booking" or "Back to Home"'],
    systemOutput: 'Green checkmark animation, booking reference, summary details',
    navigation: 'View Booking → (future booking detail) | Back to Home → Client Home'
  },
  {
    id: 'rate-review',
    component: RateReview,
    title: 'Rate & Review',
    userInputs: ['Tap star rating (1-5), optional text review'],
    systemOutput: 'Review saved, cleaner\'s average rating updated',
    navigation: 'Submit Review → Client Home'
  }
];

const cleanerScreens: ScreenConfig[] = [
  {
    id: 'cleaner-registration',
    component: CleanerRegistration,
    title: 'Cleaner Registration',
    userInputs: ['Full Name, SA ID, Phone, Email, Photo upload, Service Types, Hourly Rate, Availability'],
    systemOutput: 'Profile data collected, ready for verification',
    navigation: 'Continue → Criminal Check Upload'
  },
  {
    id: 'criminal-check',
    component: CriminalCheckUpload,
    title: 'Criminal Check Upload',
    userInputs: ['Upload PDF or photo of background check document'],
    systemOutput: 'Document submitted, verification status = Pending',
    navigation: 'Submit for Verification → Subscription Payment'
  },
  {
    id: 'subscription',
    component: SubscriptionPayment,
    title: 'Subscription Payment',
    userInputs: ['Select payment method (Card/EFT), pay R100 annual fee'],
    systemOutput: 'Payment processed, profile activation initiated',
    navigation: 'Pay R100 & Go Live → Cleaner Dashboard (pending verification)'
  },
  {
    id: 'cleaner-dashboard',
    component: CleanerDashboard,
    title: 'Cleaner Dashboard',
    userInputs: ['Tap booking request card to view details'],
    systemOutput: 'Stats (jobs, earnings, rating), incoming requests, upcoming jobs',
    navigation: 'Tap request card → Booking Request detail'
  },
  {
    id: 'booking-request',
    component: BookingRequest,
    title: 'Booking Request',
    userInputs: ['Tap "Accept" or "Decline"'],
    systemOutput: 'Booking confirmed/declined, client notified',
    navigation: 'Accept → Active Job | Decline → Cleaner Dashboard'
  },
  {
    id: 'active-job',
    component: ActiveJob,
    title: 'Active Job',
    userInputs: ['Tap "I\'ve Arrived — Start Job", then "Mark as Complete"'],
    systemOutput: 'Job status updated (Accepted → Confirmed → In Progress → Completed)',
    navigation: 'Mark as Complete → Earnings & Payout'
  },
  {
    id: 'earnings-payout',
    component: EarningsPayout,
    title: 'Earnings & Payout',
    userInputs: ['Tap "Request Payout"'],
    systemOutput: 'Payout queued, notification sent, history updated',
    navigation: 'Request Payout → Cleaner Dashboard'
  }
];

export default function Prototype() {
  const [flow, setFlow] = useState<Flow>('client');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const allScreens = flow === 'client' 
    ? [...sharedScreens, ...clientScreens]
    : [...sharedScreens, ...cleanerScreens];

  const currentScreen = allScreens[currentIndex];

  const handleNavigate = (screenId: string) => {
    const targetIndex = allScreens.findIndex(s => s.id === screenId);
    if (targetIndex !== -1) {
      setDirection(targetIndex > currentIndex ? 1 : -1);
      setCurrentIndex(targetIndex);
    }
  };

  const handleNext = () => {
    if (currentIndex < allScreens.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleFlowChange = (newFlow: Flow) => {
    setFlow(newFlow);
    setCurrentIndex(0);
    setDirection(0);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-secondary mb-3">
            CleanLink <span className="text-primary">Prototype</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Interactive walkthrough of client and cleaner experiences
          </p>
        </div>

        {/* Flow Selector */}
        <div className="flex justify-center mb-8">
          <Tabs value={flow} onValueChange={(v) => handleFlowChange(v as Flow)}>
            <TabsList className="grid w-full max-w-md grid-cols-2 h-12">
              <TabsTrigger value="client" className="text-base font-semibold">
                Client Flow
              </TabsTrigger>
              <TabsTrigger value="cleaner" className="text-base font-semibold">
                Cleaner Flow
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 items-start">
          {/* Phone Frame */}
          <div className="flex flex-col items-center gap-6 lg:sticky lg:top-8">
            {/* Device */}
            <div 
              className="relative bg-[#1a1a1a] rounded-[3rem] p-3 shadow-2xl"
              style={{ width: '400px', height: '840px' }}
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-[#1a1a1a] rounded-b-3xl z-20" />
              
              {/* Screen */}
              <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status Bar */}
                <div className="absolute top-0 left-0 right-0 h-11 bg-white z-10 flex items-center justify-between px-8 text-xs font-semibold text-secondary">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <Signal size={14} />
                    <Wifi size={14} />
                    <Battery size={14} />
                  </div>
                </div>

                {/* Screen Content */}
                <div className="absolute inset-0 top-11 bottom-8 overflow-hidden">
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                      key={currentScreen.id}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                      }}
                      className="absolute inset-0"
                    >
                      <currentScreen.component onNavigate={handleNavigate} />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full" />
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="h-10 w-10"
                data-testid="button-prev-screen"
              >
                <ChevronLeft size={20} />
              </Button>
              
              <div className="text-sm font-semibold text-secondary min-w-[60px] text-center">
                {currentIndex + 1} / {allScreens.length}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                disabled={currentIndex === allScreens.length - 1}
                className="h-10 w-10"
                data-testid="button-next-screen"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>

          {/* Annotation Panel */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold font-serif text-secondary mb-6">
              {currentScreen.title}
            </h2>

            <div className="space-y-6">
              {/* User Inputs */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-primary mb-3">
                  User Inputs
                </h3>
                <ul className="space-y-2">
                  {currentScreen.userInputs.map((input, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-base text-foreground">{input}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* System Output */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-[#1B3670] mb-3">
                  System Output
                </h3>
                <p className="text-base text-foreground leading-relaxed">
                  {currentScreen.systemOutput}
                </p>
              </div>

              {/* Navigation */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-3">
                  Navigation
                </h3>
                <p className="text-base text-foreground leading-relaxed">
                  {currentScreen.navigation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
