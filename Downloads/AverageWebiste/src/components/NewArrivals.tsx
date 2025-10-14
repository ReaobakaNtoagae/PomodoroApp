import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

import { products } from '../data/products';

interface NewArrivalsProps {
  onProductClick?: (productId: number) => void;
}

export function NewArrivals({ onProductClick }: NewArrivalsProps) {
  const featuredProducts = products.slice(0, 4);
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-sm tracking-[0.3em] uppercase bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent mb-4">
                Latest Drops
              </span>
              <h2 className="mb-4 text-5xl lg:text-6xl text-gray-900">New Arrivals</h2>
              <p className="text-gray-600 text-lg">
                Fresh styles just landed
              </p>
            </motion.div>
          </div>
          <Button variant="outline" className="hidden md:flex rounded-full px-8 border-2 border-gray-300 text-gray-900 hover:bg-gray-100 transition-all duration-300">
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => onProductClick?.(product.id)}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-6 bg-gray-100 shadow-md hover:shadow-2xl transition-shadow duration-500">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-purple-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 text-white hover:from-black hover:via-purple-900 hover:to-black shadow-md border-0">
                    {product.tag}
                  </Badge>
                </div>
                
                {/* Favorite button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-white/95 hover:bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full w-10 h-10 shadow-lg"
                >
                  <Heart className="h-5 w-5 text-gray-700" />
                </Button>
                
                {/* Quick add button */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Button className="w-full rounded-full bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 text-white hover:from-black hover:via-purple-900 hover:to-black shadow-lg transition-all duration-300">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Quick Add
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="tracking-tight text-gray-900">{product.name}</h4>
                <div className="flex items-center justify-between">
                  <p className="text-gray-900">${product.price}</p>
                  <p className="text-gray-500">{product.colors.length} colors</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center md:hidden">
          <Button variant="outline" className="rounded-full px-8 border-2 border-gray-300 text-gray-900 hover:bg-gray-100 transition-all duration-300">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
