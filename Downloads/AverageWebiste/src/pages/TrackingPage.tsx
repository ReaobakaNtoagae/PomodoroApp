import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { CheckCircle, Circle, Package, Truck, Home, MapPin } from 'lucide-react';
import { mockOrders } from '../data/orders';

interface TrackingPageProps {
  orderId: string;
  onBack: () => void;
}

interface TrackingEvent {
  status: string;
  description: string;
  location: string;
  date: string;
  time: string;
  completed: boolean;
}

export function TrackingPage({ orderId, onBack }: TrackingPageProps) {
  const order = mockOrders.find((o) => o.id === orderId);

  if (!order || !order.trackingNumber) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-gray-900">Tracking information not available</p>
        </div>
      </div>
    );
  }

  // Generate tracking events based on order status
  const getTrackingEvents = (): TrackingEvent[] => {
    const baseEvents: TrackingEvent[] = [
      {
        status: 'Order Placed',
        description: 'Your order has been confirmed',
        location: 'Average Store',
        date: order.date,
        time: '10:30 AM',
        completed: true,
      },
      {
        status: 'Processing',
        description: 'Your order is being prepared',
        location: 'Average Warehouse, NY',
        date: order.date,
        time: '2:45 PM',
        completed: true,
      },
      {
        status: 'Shipped',
        description: 'Package has been dispatched',
        location: 'Distribution Center, NY',
        date: order.status === 'Delivered' ? 'March 12, 2025' : 'March 11, 2025',
        time: '8:15 AM',
        completed: true,
      },
    ];

    if (order.status === 'In Transit') {
      baseEvents.push({
        status: 'In Transit',
        description: 'Package is on its way to you',
        location: 'Transit Hub, NJ',
        date: 'March 14, 2025',
        time: '3:20 PM',
        completed: true,
      });
      baseEvents.push({
        status: 'Out for Delivery',
        description: 'Package will be delivered today',
        location: 'Your City',
        date: order.estimatedDelivery || 'Pending',
        time: 'Pending',
        completed: false,
      });
      baseEvents.push({
        status: 'Delivered',
        description: 'Package has been delivered',
        location: 'Your Address',
        date: 'Pending',
        time: 'Pending',
        completed: false,
      });
    } else if (order.status === 'Delivered') {
      baseEvents.push({
        status: 'In Transit',
        description: 'Package is on its way to you',
        location: 'Transit Hub, NJ',
        date: 'March 13, 2025',
        time: '11:30 AM',
        completed: true,
      });
      baseEvents.push({
        status: 'Out for Delivery',
        description: 'Package is out for delivery',
        location: 'Local Delivery Center',
        date: 'March 15, 2025',
        time: '7:45 AM',
        completed: true,
      });
      baseEvents.push({
        status: 'Delivered',
        description: 'Package successfully delivered',
        location: order.shippingAddress.address,
        date: 'March 15, 2025',
        time: '2:15 PM',
        completed: true,
      });
    }

    return baseEvents;
  };

  const trackingEvents = getTrackingEvents();
  const currentEventIndex = trackingEvents.findIndex((e) => !e.completed);
  const currentEvent = currentEventIndex !== -1 ? trackingEvents[currentEventIndex] : trackingEvents[trackingEvents.length - 1];

  const getStatusIcon = (status: string, completed: boolean) => {
    if (!completed) return Circle;
    
    switch (status) {
      case 'Order Placed':
        return CheckCircle;
      case 'Processing':
        return Package;
      case 'Shipped':
        return Truck;
      case 'In Transit':
        return Truck;
      case 'Out for Delivery':
        return MapPin;
      case 'Delivered':
        return Home;
      default:
        return Circle;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-gray-900 hover:text-gray-700 mb-8"
        >
          ← Back to Order Details
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-gray-900 text-4xl mb-2">Track Your Package</h1>
          <p className="text-gray-600">Tracking Number: {order.trackingNumber}</p>
        </motion.div>

        {/* Current Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-200 mb-8"
        >
          <div className="flex items-start gap-6">
            <div className="p-4 bg-gradient-to-br from-slate-950 to-purple-950 rounded-xl">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-gray-900 text-2xl mb-2">{currentEvent.status}</h2>
              <p className="text-gray-600 mb-1">{currentEvent.description}</p>
              <p className="text-gray-500">
                <MapPin className="inline h-4 w-4 mr-1" />
                {currentEvent.location}
              </p>
              {order.estimatedDelivery && order.status !== 'Delivered' && (
                <p className="text-gray-900 mt-4">
                  Estimated Delivery: <span className="font-medium">{order.estimatedDelivery}</span>
                </p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-200"
        >
          <h3 className="text-gray-900 text-xl mb-6">Tracking Timeline</h3>
          
          <div className="space-y-8">
            {trackingEvents.map((event, index) => {
              const Icon = getStatusIcon(event.status, event.completed);
              const isLast = index === trackingEvents.length - 1;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="relative"
                >
                  <div className="flex gap-4">
                    {/* Icon and Line */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                          event.completed
                            ? 'bg-gradient-to-br from-slate-950 to-purple-950 text-white'
                            : 'bg-gray-200 text-gray-400'
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      {!isLast && (
                        <div
                          className={`w-0.5 h-16 mt-2 transition-all duration-300 ${
                            event.completed ? 'bg-gradient-to-b from-slate-950 to-purple-950' : 'bg-gray-200'
                          }`}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="flex items-start justify-between mb-2">
                        <h4
                          className={`transition-colors duration-300 ${
                            event.completed ? 'text-gray-900' : 'text-gray-500'
                          }`}
                        >
                          {event.status}
                        </h4>
                        <div className="text-right">
                          <p
                            className={`transition-colors duration-300 ${
                              event.completed ? 'text-gray-900' : 'text-gray-500'
                            }`}
                          >
                            {event.date}
                          </p>
                          <p className="text-gray-500">{event.time}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-1">{event.description}</p>
                      <p className="text-gray-500 flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Shipping Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-200"
        >
          <h3 className="text-gray-900 text-xl mb-4">Delivery Address</h3>
          <div className="space-y-1 text-gray-700">
            <p>{order.shippingAddress.name}</p>
            <p>{order.shippingAddress.address}</p>
            <p>{order.shippingAddress.city}</p>
            <p>{order.shippingAddress.zipCode}</p>
          </div>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 mb-4">Need help with your delivery?</p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" className="rounded-full border-gray-300 text-gray-900 hover:bg-gray-100">
              Contact Support
            </Button>
            <Button variant="outline" className="rounded-full border-gray-300 text-gray-900 hover:bg-gray-100">
              Report an Issue
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
