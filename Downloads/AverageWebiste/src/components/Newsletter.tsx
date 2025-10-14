import { Button } from './ui/button';
import { Input } from './ui/input';
import { motion } from 'motion/react';
import { Mail, CheckCircle2 } from 'lucide-react';

export function Newsletter() {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-12 lg:p-16 border border-gray-200/50"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-950 to-purple-950 rounded-full mb-6 shadow-lg">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h2 className="mb-4 text-4xl lg:text-5xl text-gray-900">Stay in the Loop</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive access to new collections, special offers,
              and style inspiration delivered to your inbox.
            </p>
          </div>
          
          <form className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-14 px-6 rounded-full border-2 border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:border-slate-900 transition-colors"
                />
              </div>
              <Button 
                type="submit" 
                className="sm:w-auto h-14 px-8 rounded-full bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 text-white hover:from-black hover:via-purple-900 hover:to-black shadow-lg transition-all duration-300"
              >
                Subscribe
              </Button>
            </div>
          </form>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>50,000+ subscribers</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Exclusive offers</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
