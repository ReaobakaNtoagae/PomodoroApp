import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Filter, Star } from 'lucide-react';
import { products } from '../data/products';

interface ShopPageProps {
  onProductClick: (productId: number) => void;
  initialCategory?: string;
}

export function ShopPage({ onProductClick, initialCategory }: ShopPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'All');
  const [sortBy, setSortBy] = useState<string>('featured');

  const categories = ['All', 'Pants', 'Shirts', 'Accessories'];

  const filteredProducts = products.filter(
    (product) => selectedCategory === 'All' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-gray-900 mb-4 text-5xl lg:text-6xl">Shop All</h1>
          <p className="text-gray-600 text-lg">Discover our complete collection</p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 text-white'
                    : 'border-gray-300 text-gray-900 hover:bg-gray-100'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px] bg-white border-gray-300 text-gray-900">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="bg-white border-gray-200 text-gray-900">
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              className="group cursor-pointer"
              onClick={() => onProductClick(product.id)}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4 bg-gray-100 shadow-md hover:shadow-2xl transition-shadow duration-500">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-purple-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {product.tag && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 text-white hover:from-black hover:via-purple-900 hover:to-black border-0">
                      {product.tag}
                    </Badge>
                  </div>
                )}

                {!product.inStock && (
                  <div className="absolute inset-0 bg-white/95 flex items-center justify-center">
                    <span className="text-gray-900">Out of Stock</span>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <h4 className="text-gray-900 tracking-tight">{product.name}</h4>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    <span className="text-gray-900">{product.rating}</span>
                  </div>
                  <span className="text-gray-500">({product.reviewCount})</span>
                </div>
                <p className="text-gray-900">${product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
