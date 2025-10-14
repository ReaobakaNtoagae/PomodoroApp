import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useAuth } from '../context/AuthContext';
import { User, Mail, MapPin, Phone, Package, Heart, Settings } from 'lucide-react';
import { mockOrders } from '../data/orders';

interface ProfilePageProps {
  onBack: () => void;
  onOrderClick: (orderId: string) => void;
}

export function ProfilePage({ onBack, onOrderClick }: ProfilePageProps) {
  const { user, logout } = useAuth();

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    onBack();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-gray-900 hover:text-gray-700 mb-8"
        >
          ← Back
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-6 mb-8">
            <Avatar className="w-24 h-24 border-4 border-white shadow-xl">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="bg-gradient-to-br from-slate-950 to-purple-950 text-white text-2xl">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-gray-900 mb-2 text-4xl">{user.name}</h1>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        </motion.div>

        <Tabs defaultValue="profile" className="space-y-8">
          <TabsList className="bg-white/80 backdrop-blur-xl border-gray-200 shadow-md">
            <TabsTrigger value="profile" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-950 data-[state=active]:via-purple-950 data-[state=active]:to-slate-950 data-[state=active]:text-white">
              <User className="h-4 w-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="orders" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-950 data-[state=active]:via-purple-950 data-[state=active]:to-slate-950 data-[state=active]:text-white">
              <Package className="h-4 w-4 mr-2" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-950 data-[state=active]:via-purple-950 data-[state=active]:to-slate-950 data-[state=active]:text-white">
              <Heart className="h-4 w-4 mr-2" />
              Wishlist
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-950 data-[state=active]:via-purple-950 data-[state=active]:to-slate-950 data-[state=active]:text-white">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <h2 className="text-gray-900 mb-8 text-2xl">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-gray-700">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      defaultValue={user.name}
                      className="bg-white border-gray-300 text-gray-900 pl-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-700">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      defaultValue={user.email}
                      className="bg-white border-gray-300 text-gray-900 pl-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-700">Phone</Label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="+1 (555) 000-0000"
                      className="bg-white border-gray-300 text-gray-900 pl-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-700">Address</Label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="123 Main St, City, State"
                      className="bg-white border-gray-300 text-gray-900 pl-12"
                    />
                  </div>
                </div>
              </div>
              <Button className="mt-8 bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 text-white hover:from-black hover:via-purple-900 hover:to-black rounded-full px-8 shadow-lg">
                Save Changes
              </Button>
            </motion.div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-gray-900 text-2xl">Order History</h2>
              {mockOrders.map((order) => (
                <div key={order.id} className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-md border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-gray-900 mb-2">Order #{order.id}</h3>
                      <p className="text-gray-600">{order.date}</p>
                    </div>
                    <span
                      className={`px-4 py-1 rounded-full ${
                        order.status === 'Delivered'
                          ? 'bg-green-100 text-green-700'
                          : order.status === 'In Transit'
                          ? 'bg-blue-100 text-blue-700'
                          : order.status === 'Processing'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="text-gray-600">
                      {order.items.length} items • ${order.total}
                    </div>
                    <Button
                      onClick={() => onOrderClick(order.id)}
                      variant="outline"
                      className="border-gray-300 text-gray-900 hover:bg-gray-100 rounded-full"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Wishlist Tab */}
          <TabsContent value="wishlist">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <Heart className="h-16 w-16 text-gray-400 mx-auto mb-6" />
              <h3 className="text-gray-900 mb-2 text-2xl">Your wishlist is empty</h3>
              <p className="text-gray-600 mb-8">
                Start adding items you love to your wishlist
              </p>
              <Button onClick={onBack} className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 text-white hover:from-black hover:via-purple-900 hover:to-black rounded-full px-8 shadow-lg">
                Browse Products
              </Button>
            </motion.div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-gray-200"
            >
              <h2 className="text-gray-900 mb-8 text-2xl">Account Settings</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between py-4 border-b border-gray-200">
                  <div>
                    <h4 className="text-gray-900 mb-1">Email Notifications</h4>
                    <p className="text-gray-600">Receive updates about your orders</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                </div>
                <div className="flex items-center justify-between py-4 border-b border-gray-200">
                  <div>
                    <h4 className="text-gray-900 mb-1">Marketing Emails</h4>
                    <p className="text-gray-600">Get the latest offers and news</p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                </div>
                <div className="pt-6">
                  <Button
                    onClick={handleLogout}
                    variant="destructive"
                    className="rounded-full px-8"
                  >
                    Logout
                  </Button>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
