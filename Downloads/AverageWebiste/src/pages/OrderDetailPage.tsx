import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Package, Truck, MapPin, CreditCard, CheckCircle } from 'lucide-react';
import { mockOrders } from '../data/orders';

interface OrderDetailPageProps {
  orderId: string;
  onBack: () => void;
  onProductClick: (productId: number) => void;
  onTrackPackage: (orderId: string) => void;
  onLeaveReview: (orderId: string) => void;
}

export function OrderDetailPage({ orderId, onBack, onProductClick, onTrackPackage, onLeaveReview }: OrderDetailPageProps) {
  const order = mockOrders.find((o) => o.id === orderId);

  if (!order) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-gray-900">Order not found</p>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-700';
      case 'In Transit':
        return 'bg-blue-100 text-blue-700';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-700';
      case 'Cancelled':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-gray-900 hover:text-gray-700 mb-8"
        >
          ← Back to Profile
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
            <h1 className="text-gray-900 text-4xl">Order #{order.id}</h1>
            <span className={`px-4 py-2 rounded-full ${getStatusColor(order.status)}`}>
              {order.status}
            </span>
          </div>
          <p className="text-gray-600">Placed on {order.date}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Items */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-slate-950 to-purple-950 rounded-lg">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-gray-900 text-2xl">Order Items</h2>
              </div>

              <div className="space-y-4">
                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                    onClick={() => onProductClick(item.productId)}
                  >
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-white flex-shrink-0">
                      <ImageWithFallback
                        src={item.productImage}
                        alt={item.productName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-900 mb-1">{item.productName}</h4>
                      <div className="flex gap-4 text-gray-600">
                        {item.color && <span>Color: {item.color}</span>}
                        {item.size && <span>Size: {item.size}</span>}
                      </div>
                      <p className="text-gray-600 mt-1">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-900">${item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 mt-6 pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="text-gray-900">${order.total}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span className="text-gray-900">${(order.total * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900 text-2xl">${(order.total * 1.1).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tracking Information */}
            {order.trackingNumber && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-br from-slate-950 to-purple-950 rounded-lg">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-gray-900 text-2xl">Tracking Information</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 mb-1">Tracking Number</p>
                    <p className="text-gray-900">{order.trackingNumber}</p>
                  </div>
                  {order.estimatedDelivery && (
                    <div>
                      <p className="text-gray-600 mb-1">Estimated Delivery</p>
                      <p className="text-gray-900">{order.estimatedDelivery}</p>
                    </div>
                  )}
                  {order.status === 'Delivered' && (
                    <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg">
                      <CheckCircle className="h-5 w-5" />
                      <span>Delivered successfully</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Shipping Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-gray-900" />
                <h3 className="text-gray-900">Shipping Address</h3>
              </div>
              <div className="space-y-1 text-gray-700">
                <p>{order.shippingAddress.name}</p>
                <p>{order.shippingAddress.address}</p>
                <p>{order.shippingAddress.city}</p>
                <p>{order.shippingAddress.zipCode}</p>
              </div>
            </motion.div>

            {/* Payment Method */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="h-5 w-5 text-gray-900" />
                <h3 className="text-gray-900">Payment Method</h3>
              </div>
              <p className="text-gray-700">{order.paymentMethod}</p>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-3"
            >
              <Button
                onClick={() => onTrackPackage(orderId)}
                className="w-full rounded-full bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 text-white hover:from-black hover:via-purple-900 hover:to-black"
              >
                Track Package
              </Button>
              <Button variant="outline" className="w-full rounded-full border-gray-300 text-gray-900 hover:bg-gray-100">
                Download Invoice
              </Button>
              {order.status === 'Delivered' && (
                <Button
                  onClick={() => onLeaveReview(orderId)}
                  variant="outline"
                  className="w-full rounded-full border-gray-300 text-gray-900 hover:bg-gray-100"
                >
                  Leave a Review
                </Button>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
