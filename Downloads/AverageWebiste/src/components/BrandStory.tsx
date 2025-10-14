import { motion } from 'motion/react';
import { Sparkles, Leaf, Users, Award } from 'lucide-react';
import { Button } from './ui/button';

interface BrandStoryProps {
  onLearnMore: () => void;
}

const values = [
  {
    icon: Sparkles,
    title: 'Quality Craftsmanship',
    description: 'Every piece is meticulously crafted with attention to detail and premium materials.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Fashion',
    description: 'We are committed to ethical practices and sustainable materials in all our collections.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Our designs are inspired by and created for our diverse, global community.',
  },
  {
    icon: Award,
    title: 'Timeless Design',
    description: 'We create pieces that transcend trends, designed to be cherished for years.',
  },
];

export function BrandStory({ onLearnMore }: BrandStoryProps) {
  return (
    <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/20 via-purple-950/20 to-slate-950/20" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-sm tracking-[0.3em] uppercase text-gray-400 mb-6">
              Our Story
            </span>
            <h2 className="text-white mb-8 text-4xl lg:text-5xl leading-tight">
              Where Style Meets
              <span className="block italic text-gray-300">Substance</span>
            </h2>
            <p className="text-white/80 mb-6 text-lg leading-relaxed">
              Founded in 2020, Average has been redefining contemporary fashion with a focus on
              timeless design, sustainable practices, and exceptional quality. Our mission is to
              create pieces that not only look good but feel good—both to wear and to own.
            </p>
            <p className="text-white/70 mb-10 leading-relaxed">
              We believe that great style shouldn't come at the cost of our planet. That's why
              every collection is thoughtfully designed to minimize environmental impact while
              maximizing style and comfort.
            </p>
            <Button
              onClick={onLearnMore}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 text-white hover:from-black hover:via-purple-900 hover:to-black rounded-full px-8 shadow-lg transition-all duration-300"
            >
              Learn More About Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-gradient-to-br hover:from-slate-950/30 hover:via-purple-950/30 hover:to-slate-950/30 hover:border-white/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-950/30 to-purple-950/30 flex items-center justify-center mb-6 group-hover:from-slate-950/50 group-hover:via-purple-950/50 group-hover:to-slate-950/50 transition-all duration-300">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h4 className="text-white mb-3">{value.title}</h4>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
