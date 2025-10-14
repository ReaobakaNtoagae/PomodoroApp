import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { useCart } from '../context/CartContext';
import { CreditCard, Truck, Lock } from 'lucide-react';
import { toast } from 'sonner';

interface CheckoutPageProps {
  onBack: () => void;
  onSuccess: () => void;
}

export function CheckoutPage({ onBack, onSuccess }: CheckoutPageProps) {
  const { getCartTotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    toast.success('Order placed successfully!');
    clearCart();
    setLoading(false);
    onSuccess();
  };

  const total = getCartTotal();
  const tax = total * 0.1;
  const finalTotal = total + tax;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-gray-900 hover:text-gray-700 mb-8"
        >
          ← Back to Cart
        </Button>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-900 mb-12 text-5xl"
        >
          Checkout
        </motion.h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Shipping Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-slate-950 to-purple-950 rounded-lg">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-gray-900 text-2xl">Shipping Information</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-700">First Name</Label>
                    <Input
                      id="firstName"
                      required
                      className="bg-white border-gray-300 text-gray-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700">Last Name</Label>
                    <Input
                      id="lastName"
                      required
                      className="bg-white border-gray-300 text-gray-900"
                    />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="email" className="text-gray-700">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="bg-white border-gray-300 text-gray-900"
                    />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="address" className="text-gray-700">Address</Label>
                    <Input
                      id="address"
                      required
                      className="bg-white border-gray-300 text-gray-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-gray-700">City</Label>
                    <Input
                      id="city"
                      required
                      className="bg-white border-gray-300 text-gray-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode" className="text-gray-700">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      required
                      className="bg-white border-gray-300 text-gray-900"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Payment Method */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-slate-950 to-purple-950 rounded-lg">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-gray-900 text-2xl">Payment Method</h2>
                </div>

                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-300 hover:border-slate-900 transition-colors bg-white">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="text-gray-900 cursor-pointer flex-1">Credit Card</Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-300 hover:border-slate-900 transition-colors bg-white">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal" className="text-gray-900 cursor-pointer flex-1">PayPal</Label>
                  </div>
                </RadioGroup>

                {paymentMethod === 'card' && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber" className="text-gray-700">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        required
                        className="bg-white border-gray-300 text-gray-900"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="expiry" className="text-gray-700">Expiry Date</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          required
                          className="bg-white border-gray-300 text-gray-900"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv" className="text-gray-700">CVV</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          required
                          className="bg-white border-gray-300 text-gray-900"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 sticky top-32 shadow-xl border border-gray-200">
                <h3 className="text-gray-900 mb-6 text-2xl">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="text-gray-900">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span className="text-gray-900">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between mb-6">
                      <span className="text-gray-900">Total</span>
                      <span className="text-gray-900 text-2xl">${finalTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 text-white hover:from-black hover:via-purple-900 hover:to-black rounded-full mb-4 shadow-lg"
                >
                  {loading ? 'Processing...' : 'Place Order'}
                </Button>

                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Lock className="h-4 w-4" />
                  <span>Secure checkout</span>
                </div>
              </div>
            </motion.div>
          </div>
        </form>
      </div>
    </div>
  );
}
