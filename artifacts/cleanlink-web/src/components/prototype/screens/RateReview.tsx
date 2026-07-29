import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface Props {
  onNavigate: (screenId: string) => void;
}

export default function RateReview({ onNavigate }: Props) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="h-full w-full bg-white flex flex-col items-center justify-center p-6">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#76C442] to-[#5da331] flex items-center justify-center text-white font-bold text-2xl mb-6">
        ND
      </div>

      <h1 className="text-2xl font-bold text-[#1B3670] mb-2">Nombuso Dlamini</h1>
      <p className="text-gray-600 mb-8 text-center">How was your experience?</p>

      <div className="flex gap-2 mb-8">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className="transition-transform hover:scale-110"
            data-testid={`button-star-${star}`}
          >
            <Star
              size={48}
              className={`${
                star <= (hover || rating)
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-gray-300'
              } transition-colors`}
            />
          </button>
        ))}
      </div>

      <div className="w-full mb-8">
        <label className="block text-sm font-semibold text-[#1B3670] mb-2">
          Write a review (optional)
        </label>
        <textarea
          placeholder="Share your experience..."
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#76C442] resize-none"
          data-testid="input-review"
        />
      </div>

      <button
        onClick={() => onNavigate('client-home')}
        disabled={rating === 0}
        className="w-full bg-[#76C442] text-white font-bold py-4 rounded-xl hover:bg-[#5da331] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        data-testid="button-submit-review"
      >
        Submit Review
      </button>
    </div>
  );
}
