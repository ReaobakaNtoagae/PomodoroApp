export interface OrderItem {
  productId: number;
  productName: string;
  productImage: string;
  quantity: number;
  price: number;
  size?: string;
  color?: string;
}

export interface Order {
  id: string;
  date: string;
  status: 'Delivered' | 'In Transit' | 'Processing' | 'Cancelled';
  total: number;
  items: OrderItem[];
  shippingAddress: {
    name: string;
    address: string;
    city: string;
    zipCode: string;
  };
  paymentMethod: string;
  trackingNumber?: string;
  estimatedDelivery?: string;
}

export const mockOrders: Order[] = [
  {
    id: '1234',
    date: 'March 15, 2025',
    status: 'Delivered',
    total: 298,
    items: [
      {
        productId: 1,
        productName: 'Minimalist Tote Bag',
        productImage: 'https://images.unsplash.com/photo-1617229378071-daa5eeff0db7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXMlMjBtaW5pbWFsfGVufDF8fHx8MTc2MDE4MzgyOHww&ixlib=rb-4.1.0&q=80&w=1080',
        quantity: 1,
        price: 89,
        color: 'Black',
      },
      {
        productId: 4,
        productName: 'Tailored Trousers',
        productImage: 'https://images.unsplash.com/photo-1553845757-677a58d78127?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGNsb3RoaW5nJTIwYWVzdGhldGljfGVufDF8fHx8MTc2MDE4MzgyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
        quantity: 1,
        price: 159,
        size: '32',
        color: 'Black',
      },
      {
        productId: 3,
        productName: 'Classic White Tee',
        productImage: 'https://images.unsplash.com/photo-1653875842174-429c1b467548?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBtaW5pbWFsfGVufDF8fHx8MTc2MDE4MzgyNnww&ixlib=rb-4.1.0&q=80&w=1080',
        quantity: 1,
        price: 49,
        size: 'M',
        color: 'White',
      },
    ],
    shippingAddress: {
      name: 'John Doe',
      address: '123 Fashion Street',
      city: 'New York, NY',
      zipCode: '10001',
    },
    paymentMethod: 'Visa ending in 4242',
    trackingNumber: 'TRK123456789',
  },
  {
    id: '1235',
    date: 'March 10, 2025',
    status: 'In Transit',
    total: 449,
    items: [
      {
        productId: 6,
        productName: 'Chino Pants',
        productImage: 'https://images.unsplash.com/photo-1736555142217-916540c7f1b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXN1YWwlMjBzdHJlZXR3ZWFyJTIwc3R5bGV8ZW58MXx8fHwxNzYwMTY0ODMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
        quantity: 1,
        price: 119,
        size: '32',
        color: 'Khaki',
      },
    ],
    shippingAddress: {
      name: 'John Doe',
      address: '123 Fashion Street',
      city: 'New York, NY',
      zipCode: '10001',
    },
    paymentMethod: 'Mastercard ending in 8888',
    trackingNumber: 'TRK987654321',
    estimatedDelivery: 'March 18, 2025',
  },
  {
    id: '1236',
    date: 'February 28, 2025',
    status: 'Delivered',
    total: 159,
    items: [
      {
        productId: 4,
        productName: 'Tailored Trousers',
        productImage: 'https://images.unsplash.com/photo-1553845757-677a58d78127?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGNsb3RoaW5nJTIwYWVzdGhldGljfGVufDF8fHx8MTc2MDE4MzgyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
        quantity: 1,
        price: 159,
        size: '34',
        color: 'Navy',
      },
    ],
    shippingAddress: {
      name: 'John Doe',
      address: '123 Fashion Street',
      city: 'New York, NY',
      zipCode: '10001',
    },
    paymentMethod: 'Visa ending in 4242',
    trackingNumber: 'TRK456789123',
  },
];
