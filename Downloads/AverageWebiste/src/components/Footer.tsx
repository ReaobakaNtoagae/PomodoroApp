import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

interface FooterProps {
  onAboutClick?: () => void;
  onShopClick?: (category?: string) => void;
}

export function Footer({ onAboutClick, onShopClick }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-white mb-6">Average</h3>
            <p className="text-white/60">
              Contemporary fashion for the modern individual.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => onShopClick?.()} className="text-white/60 hover:text-white transition-colors">
                  New Arrivals
                </button>
              </li>
              <li>
                <button onClick={() => onShopClick?.('Pants')} className="text-white/60 hover:text-white transition-colors">
                  Pants
                </button>
              </li>
              <li>
                <button onClick={() => onShopClick?.('Shirts')} className="text-white/60 hover:text-white transition-colors">
                  Shirts
                </button>
              </li>
              <li>
                <button onClick={() => onShopClick?.('Accessories')} className="text-white/60 hover:text-white transition-colors">
                  Accessories
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">About</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={onAboutClick} className="text-white/60 hover:text-white transition-colors">
                  Our Story
                </button>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60">
              © 2025 Average. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
