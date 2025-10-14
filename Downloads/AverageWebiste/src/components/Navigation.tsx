import { ShoppingBag, Search, User, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

interface NavigationProps {
  onShopClick?: (category?: string) => void;
  onCartClick?: () => void;
  onProfileClick?: () => void;
  onLoginClick?: () => void;
  onHomeClick?: () => void;
}

export function Navigation({ onShopClick, onCartClick, onProfileClick, onLoginClick, onHomeClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getCartCount } = useCart();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
        : 'bg-white/60 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={onHomeClick}>
            <h2 className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent transition-all duration-300">
              Average
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={onShopClick}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              Shop
            </button>
            <button 
              onClick={onShopClick}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              New Arrivals
            </button>
            <button 
              onClick={() => onShopClick?.('Pants')}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              Pants
            </button>
            <button 
              onClick={() => onShopClick?.('Shirts')}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              Shirts
            </button>
            <button 
              onClick={() => onShopClick?.('Accessories')}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
              Accessories
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={user ? onProfileClick : onLoginClick}
              className="hidden md:flex text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              <User className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onCartClick}
              className="relative text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              <ShoppingBag className="h-5 w-5" />
              {getCartCount() > 0 && (
                <Badge className="absolute -top-1 -right-1 bg-black text-white hover:bg-gray-900 h-5 min-w-5 flex items-center justify-center p-0 px-1.5 rounded-full border-2 border-white shadow-lg">
                  {getCartCount()}
                </Badge>
              )}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-200 bg-white/95 backdrop-blur-xl">
            <button onClick={() => { onShopClick?.(); setIsMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-gray-900 transition-colors py-2">
              Shop
            </button>
            <button onClick={() => { onShopClick?.(); setIsMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-gray-900 transition-colors py-2">
              New Arrivals
            </button>
            <button onClick={() => { onShopClick?.('Pants'); setIsMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-gray-900 transition-colors py-2">
              Pants
            </button>
            <button onClick={() => { onShopClick?.('Shirts'); setIsMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-gray-900 transition-colors py-2">
              Shirts
            </button>
            <button onClick={() => { onShopClick?.('Accessories'); setIsMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-gray-900 transition-colors py-2">
              Accessories
            </button>
            <div className="border-t border-gray-200 pt-4">
              <button onClick={() => { (user ? onProfileClick?.() : onLoginClick?.()); setIsMenuOpen(false); }} className="block w-full text-left text-gray-700 hover:text-gray-900 transition-colors py-2">
                {user ? 'Profile' : 'Sign In'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
