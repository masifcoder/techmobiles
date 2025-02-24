import React from 'react';
import { Button, Rate } from 'antd';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Logitech G320 Gaming Headphone',
    price: '$399.00',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1733503711060-1df31554390f',
  },
  {
    id: 2,
    name: 'Olevs Fashion Waterproof Watch For Men',
    price: '$379.00',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1733503711060-1df31554390f',
  },
  {
    id: 3,
    name: 'Asus TUF Gaming H70 Lite Gaming Headset',
    price: '$549.00',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1733503711060-1df31554390f',
  },
];

const NewArrivals = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">New Arrivals</h2>
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-gray-100 p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-4">Samsung Galaxy Note20 Ultra 5G</h3>
          <Button type="primary" icon={<ArrowRight />}>Shop Now</Button>
          <img
            src='https://images.unsplash.com/photo-1733503711060-1df31554390f'
            alt="Samsung Galaxy Note20 Ultra 5G"
            className="mt-4 w-full rounded-xl"
          />
        </div>

        <div className="col-span-2 space-y-4">
          {products.map((product) => (
            <div key={product.id} className="flex items-center justify-between bg-white p-4 rounded-2xl shadow">
              <div className="flex items-center space-x-4">
                <img src={product.image} alt={product.name} className="w-16 h-16 rounded-lg" />
                <div>
                  <h4 className="text-lg font-medium">{product.name}</h4>
                  <Rate disabled defaultValue={product.rating} />
                  <p className="text-xl font-bold mt-1">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
          <Button type="primary" icon={<ArrowRight />} className="w-full">View All Products</Button>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
