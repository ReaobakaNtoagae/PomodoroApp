import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Star } from 'lucide-react';
import { mockOrders } from '../data/orders';
import { toast } from 'sonner';

interface ReviewPageProps {
  orderId: string;
  onBack: () => void;
  onSuccess: () => void;
}

export function ReviewPage({ orderId, onBack, onSuccess }: ReviewPageProps) {
  const order = mockOrders.find((o) => o.id === orderId);
  const [selectedProduct, setSelectedProduct] = useState(order?.items[0] || null);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [loading, setLoading] = useState(false);

  if (!order) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-gray-900">Order not found</p>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (rating === 0) {
      toast.error('Please select a rating');
      return;
    }

    if (reviewText.trim().length < 10) {
      toast.error('Please write a review (minimum 10 characters)');
      return;
    }

    setLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success('Review submitted successfully! Thank you for your feedback.');
    setLoading(false);
    onSuccess();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-gray-900 hover:text-gray-700 mb-8"
        >
          ← Back to Order
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-gray-900 text-4xl mb-2">Leave a Review</h1>
          <p className="text-gray-600">Share your experience with this product</p>
        </motion.div>

        <form onSubmit={handleSubmit}>
          {/* Product Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-200 mb-6"
          >
            <Label className="text-gray-900 mb-4 block">Select Product to Review</Label>
            <div className="grid grid-cols-1 gap-4">
              {order.items.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedProduct(item)}
                  className={`flex gap-4 p-4 rounded-xl transition-all ${
                    selectedProduct === item
                      ? 'bg-gray-900 border-2 border-gray-900'
                      : 'bg-gray-50 border-2 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-white flex-shrink-0">
                    <ImageWithFallback
                      src={item.productImage}
                      alt={item.productName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className={`mb-1 ${selectedProduct === item ? 'text-white' : 'text-gray-900'}`}>
                      {item.productName}
                    </h4>
                    <div className={`flex gap-4 ${selectedProduct === item ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item.color && <span>Color: {item.color}</span>}
                      {item.size && <span>Size: {item.size}</span>}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-200 mb-6"
          >
            <Label className="text-gray-900 mb-4 block">Your Rating</Label>
            <div className="flex gap-2 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`h-10 w-10 transition-colors ${
                      star <= (hoveredRating || rating)
                        ? 'fill-yellow-500 text-yellow-500'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
            <p className="text-gray-600">
              {rating === 0 && 'Click to rate'}
              {rating === 1 && 'Poor'}
              {rating === 2 && 'Fair'}
              {rating === 3 && 'Good'}
              {rating === 4 && 'Very Good'}
              {rating === 5 && 'Excellent'}
            </p>
          </motion.div>

          {/* Review Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-200 mb-6"
          >
            <Label htmlFor="review" className="text-gray-900 mb-4 block">
              Your Review
            </Label>
            <Textarea
              id="review"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Tell us about your experience with this product..."
              className="min-h-40 bg-white border-gray-300 text-gray-900 resize-none"
              required
            />
            <p className="text-gray-500 mt-2">{reviewText.length} characters (minimum 10)</p>
          </motion.div>

          {/* Submit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex gap-4"
          >
            <Button
              type="submit"
              disabled={loading}
              className="flex-1 h-14 rounded-full bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 text-white hover:from-black hover:via-purple-900 hover:to-black shadow-lg"
            >
              {loading ? 'Submitting...' : 'Submit Review'}
            </Button>
            <Button
              type="button"
              onClick={onBack}
              variant="outline"
              className="h-14 px-8 rounded-full border-gray-300 text-gray-900 hover:bg-gray-100"
            >
              Cancel
            </Button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
