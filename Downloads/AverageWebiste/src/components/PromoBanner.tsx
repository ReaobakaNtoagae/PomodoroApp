import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { useState } from 'react';

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="bg-black text-white relative overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 py-3 flex items-center justify-center">
        <p className="text-center">
          <span className="mr-2">✨</span>
          <span className="tracking-wide">New Season Sale - Up to 40% Off</span>
          <span className="ml-2">|</span>
          <span className="ml-2 underline underline-offset-4 cursor-pointer hover:text-gray-300 transition-colors">
            Shop Now
          </span>
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
}
