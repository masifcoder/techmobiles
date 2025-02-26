import React, { useState } from 'react';
import { Rate } from 'antd';
import Navbar from '../components/Navbar';

const ProductDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const images = [
    'https://images.unsplash.com/photo-1614442804207-4d864251c528',
    'https://images.unsplash.com/photo-1522205987242-8e22924ab42a',
    'https://images.unsplash.com/photo-1618478594486-c65b899c4936'
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto p-4 font-sans mt-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column - Images */}
          <div className="md:w-2/5">
            <div className="border rounded mb-4 p-2 bg-white">
              <img src={images[selectedImage]} alt="iPhone SE" className="w-full object-contain" />
              <p className="text-center text-sm text-gray-500 mt-2">Click image to open expanded view</p>
            </div>
            <div className="flex gap-2 justify-center">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`border p-1 cursor-pointer w-16 h-16 ${selectedImage === index ? 'border-blue-500' : 'border-gray-300'}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Product info */}
          <div className="md:w-3/5">
            <div className="flex justify-between items-start">
              <h1 className="text-xl font-medium">Apple iPhone SE 32GB Unlocked, 2016 1st Gen, AT&T/T-Mobile - Silver</h1>
              <button className="text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v13M5 12h13"></path>
                </svg>
              </button>
            </div>

            <div className="mt-2">
              <span className="text-sm">Brand: </span>
              <a href="#" className="text-sm text-blue-600 hover:underline">Plum</a>
            </div>

            <div className="flex items-center mt-1">
              <span className="text-sm font-medium mr-1">2.7</span>
              <Rate disabled defaultValue={2.7} allowHalf className="text-base" />
              <span className="mx-2 text-gray-500">|</span>
              <a href="#" className="text-sm text-blue-600 hover:underline">10 ratings</a>
              <span className="mx-2 text-gray-500">|</span>
              <a href="#" className="text-sm text-blue-600 hover:underline">Search this page</a>
            </div>

            <div className="text-sm text-gray-700 mt-1">
              50+ bought in past month
            </div>

            <div className="mt-4">
              <span className="text-xs align-top">$</span>
              <span className="text-3xl font-medium">83</span>
              <span className="text-sm align-top">00</span>
            </div>

            <div className="text-red-600 font-medium my-2">
              Only 18 left in stock - order soon.
            </div>

            <div className="border-t border-b py-4 my-4 grid grid-cols-2 gap-y-3 text-sm">
              <div className="font-medium">Brand</div>
              <div>Plum</div>

              <div className="font-medium">Operating System</div>
              <div>iOS 15</div>

              <div className="font-medium">Ram Memory Installed Size</div>
              <div>2 GB</div>

              <div className="font-medium">CPU Model</div>
              <div>210</div>

              <div className="font-medium">CPU Speed</div>
              <div>3.4 MHz</div>

              <div className="font-medium">Memory Storage</div>
              <div>32 GB</div>

              {showMore && (
                <>
                  <div className="font-medium">Additional Field 1</div>
                  <div>Value 1</div>

                  <div className="font-medium">Additional Field 2</div>
                  <div>Value 2</div>
                </>
              )}
            </div>

            <button
              className="flex items-center text-blue-600 text-sm mb-4"
              onClick={() => setShowMore(!showMore)}
            >
              <span>See {showMore ? 'less' : 'more'}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`ml-1 transition-transform ${showMore ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            <div className="mb-4">
              <h2 className="text-lg font-medium mb-2">About this item</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>This device is Compatible with AT&T / T-Mobile and all service providers that use AT&T / T-Mobile networks.</li>
                <li>This device is NOT compatible with Verizon or any service provider that uses Verizon network. Please check with your service provider before making the purchase.</li>
                <li>Certified Pre-Owned Condition: Device has a minimum 80% battery capacity compared to new and includes a charger and cable (no SIM card).</li>
                <li>Runs iOS 15 with 32GB of internal storage, 4-inch display, A10 Fusion chip and 12MP rear camera capable of 4K video recording.</li>
                <li>Includes: Phone unit, charger, cable, and generic packaging (SIM card not included). 30-day Return Policy applies.</li>
              </ul>
            </div>

            <div className="flex gap-2 mt-6">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-6 rounded">
                Add to Cart
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default ProductDetailPage;