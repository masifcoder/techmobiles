import React from 'react';
import { Button, Rate } from 'antd';
import { ArrowRight } from 'lucide-react';
import NewArrivalImg from "../images/new_arrival.jpg";

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
      <div className="flex gap-8"> {/* Use flex instead of grid */}
        {/* Left Side: Image Section */}
        <div className="bg-gray-100 rounded-2xl flex-1 relative">
          <div className="absolute top-6 left-6">
            <h3 className="text-2xl font-semibold mb-4">Samsung Galaxy Note20 Ultra 5G</h3>
          </div>
          <img
            src={NewArrivalImg}
            alt="Samsung Galaxy Note20 Ultra 5G"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Right Side: Product List Section */}
        <div className="flex-1 space-y-10">
          {products.map((product) => (
            <div key={product.id} className="flex items-center justify-between bg-white border border-slate-200 p-4 py-6 rounded-2xl">
              <div className="flex items-center space-x-4">
                <div><img src={product.image} alt={product.name} className="h-20 me-4 rounded-lg" /></div>
                <div>
                  <h4 className="text-lg mb-4 font-medium">{product.name}</h4>
                  <Rate className='mb-4' disabled defaultValue={product.rating} />
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
