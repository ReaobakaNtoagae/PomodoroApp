import { useState } from 'react';
import { Toaster } from 'sonner';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { PromoBanner } from './components/PromoBanner';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { ProfilePage } from './pages/ProfilePage';
import { OrderDetailPage } from './pages/OrderDetailPage';
import { TrackingPage } from './pages/TrackingPage';
import { ReviewPage } from './pages/ReviewPage';
import { AboutPage } from './pages/AboutPage';

type Page =
  | { type: 'home' }
  | { type: 'shop'; category?: string }
  | { type: 'product'; productId: number }
  | { type: 'cart' }
  | { type: 'checkout' }
  | { type: 'login' }
  | { type: 'signup' }
  | { type: 'profile' }
  | { type: 'orderDetail'; orderId: string }
  | { type: 'tracking'; orderId: string }
  | { type: 'review'; orderId: string }
  | { type: 'about' };

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>({ type: 'home' });

  const navigateToHome = () => setCurrentPage({ type: 'home' });
  const navigateToShop = (category?: string) => setCurrentPage({ type: 'shop', category });
  const navigateToProduct = (productId: number) => setCurrentPage({ type: 'product', productId });
  const navigateToCart = () => setCurrentPage({ type: 'cart' });
  const navigateToCheckout = () => setCurrentPage({ type: 'checkout' });
  const navigateToLogin = () => setCurrentPage({ type: 'login' });
  const navigateToSignup = () => setCurrentPage({ type: 'signup' });
  const navigateToProfile = () => setCurrentPage({ type: 'profile' });
  const navigateToOrderDetail = (orderId: string) => setCurrentPage({ type: 'orderDetail', orderId });
  const navigateToTracking = (orderId: string) => setCurrentPage({ type: 'tracking', orderId });
  const navigateToReview = (orderId: string) => setCurrentPage({ type: 'review', orderId });
  const navigateToAbout = () => setCurrentPage({ type: 'about' });

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen bg-white">
          <Toaster position="top-center" />
          {currentPage.type !== 'login' && currentPage.type !== 'signup' && <PromoBanner />}
          {currentPage.type !== 'login' && currentPage.type !== 'signup' && (
            <Navigation
              onHomeClick={navigateToHome}
              onShopClick={navigateToShop}
              onCartClick={navigateToCart}
              onProfileClick={navigateToProfile}
              onLoginClick={navigateToLogin}
            />
          )}

          {currentPage.type === 'home' && (
            <HomePage
              onProductClick={navigateToProduct}
              onShopClick={navigateToShop}
              onAboutClick={navigateToAbout}
            />
          )}
          {currentPage.type === 'shop' && (
            <ShopPage onProductClick={navigateToProduct} initialCategory={currentPage.category} />
          )}
          {currentPage.type === 'product' && (
            <ProductDetailPage productId={currentPage.productId} onBack={() => navigateToShop()} />
          )}
          {currentPage.type === 'cart' && (
            <CartPage onCheckout={navigateToCheckout} onContinueShopping={navigateToShop} />
          )}
          {currentPage.type === 'checkout' && (
            <CheckoutPage onBack={navigateToCart} onSuccess={navigateToHome} />
          )}
          {currentPage.type === 'login' && (
            <LoginPage onBack={navigateToHome} onSignupClick={navigateToSignup} />
          )}
          {currentPage.type === 'signup' && (
            <SignupPage onBack={navigateToHome} onLoginClick={navigateToLogin} />
          )}
          {currentPage.type === 'profile' && (
            <ProfilePage onBack={navigateToHome} onOrderClick={navigateToOrderDetail} />
          )}
          {currentPage.type === 'orderDetail' && (
            <OrderDetailPage
              orderId={currentPage.orderId}
              onBack={navigateToProfile}
              onProductClick={navigateToProduct}
              onTrackPackage={navigateToTracking}
              onLeaveReview={navigateToReview}
            />
          )}
          {currentPage.type === 'tracking' && (
            <TrackingPage
              orderId={currentPage.orderId}
              onBack={() => navigateToOrderDetail(currentPage.orderId)}
            />
          )}
          {currentPage.type === 'review' && (
            <ReviewPage
              orderId={currentPage.orderId}
              onBack={() => navigateToOrderDetail(currentPage.orderId)}
              onSuccess={() => navigateToOrderDetail(currentPage.orderId)}
            />
          )}
          {currentPage.type === 'about' && <AboutPage onBack={navigateToHome} />}
        </div>
      </CartProvider>
    </AuthProvider>
  );
}
