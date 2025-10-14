import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Star, ShoppingCart, Heart, Check } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

interface ProductDetailPageProps {
  productId: number;
  onBack: () => void;
}

const mockReviews = [
  {
    id: 1,
    author: 'Sarah M.',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Absolutely love this! The quality is exceptional and fits perfectly. Highly recommend!',
  },
  {
    id: 2,
    author: 'Michael R.',
    rating: 4,
    date: '1 month ago',
    comment: 'Great product, exactly as described. Fast shipping too.',
  },
  {
    id: 3,
    author: 'Emily K.',
    rating: 5,
    date: '1 month ago',
    comment: 'This has become my favorite piece. The material is so comfortable and the design is timeless.',
  },
];

export function ProductDetailPage({ productId, onBack }: ProductDetailPageProps) {
  const product = products.find((p) => p.id === productId);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const { addToCart } = useCart();

  if (!product) {
    return <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center">Product not found</div>;
  }

  const handleAddToCart = () => {
    if (product.sizes.length > 0 && !selectedSize) {
      toast.error('Please select a size');
      return;
    }
    if (product.colors.length > 0 && !selectedColor) {
      toast.error('Please select a color');
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
    });
    toast.success('Added to cart!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-gray-900 hover:text-gray-700 mb-8"
        >
          ← Back to Shop
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-100 sticky top-32 shadow-xl">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.tag && (
                <div className="absolute top-6 left-6">
                  <Badge className="bg-gradient-to-r from-slate-950 to-purple-950 text-white border-0">{product.tag}</Badge>
                </div>
              )}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <p className="text-gray-600 mb-2">{product.category}</p>
              <h1 className="text-gray-900 mb-4 text-4xl lg:text-5xl">{product.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-500 text-yellow-500'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">{product.rating} ({product.reviewCount} reviews)</span>
              </div>
              <p className="text-gray-900 text-3xl">${product.price}</p>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>

            {/* Color Selection */}
            {product.colors.length > 0 && (
              <div>
                <p className="text-gray-900 mb-3">Color: {selectedColor || 'Select'}</p>
                <div className="flex gap-3 flex-wrap">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-6 py-2 rounded-full border-2 transition-all ${
                        selectedColor === color
                          ? 'border-slate-900 bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 text-white shadow-lg'
                          : 'border-gray-300 text-gray-900 hover:border-slate-900'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes.length > 0 && (
              <div>
                <p className="text-gray-900 mb-3">Size: {selectedSize || 'Select'}</p>
                <div className="flex gap-3 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-2 rounded-full border-2 transition-all ${
                        selectedSize === size
                          ? 'border-slate-900 bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 text-white shadow-lg'
                          : 'border-gray-300 text-gray-900 hover:border-slate-900'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Stock Status */}
            {product.inStock && (
              <div className="flex items-center gap-2 text-green-500">
                <Check className="h-5 w-5" />
                <span>In Stock</span>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-4">
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 h-14 rounded-full bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 text-white hover:from-black hover:via-purple-900 hover:to-black shadow-lg"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                className="h-14 w-14 rounded-full border-gray-300 text-gray-900 hover:bg-gray-100"
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Tabs for Details & Reviews */}
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="bg-gray-100 border-gray-200 w-full">
                <TabsTrigger value="details" className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-950 data-[state=active]:via-purple-950 data-[state=active]:to-slate-950 data-[state=active]:text-white">
                  Details
                </TabsTrigger>
                <TabsTrigger value="reviews" className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-950 data-[state=active]:via-purple-950 data-[state=active]:to-slate-950 data-[state=active]:text-white">
                  Reviews ({product.reviewCount})
                </TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="text-gray-700 space-y-4 pt-6">
                <p>{product.description}</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Premium quality materials</li>
                  <li>Sustainably sourced</li>
                  <li>Handcrafted with care</li>
                  <li>30-day return policy</li>
                </ul>
              </TabsContent>
              <TabsContent value="reviews" className="space-y-6 pt-6">
                {mockReviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-gray-900 mb-1">{review.author}</h4>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? 'fill-yellow-500 text-yellow-500'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
