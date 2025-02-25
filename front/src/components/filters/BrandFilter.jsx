import { useState } from 'react';
import { Checkbox } from 'antd';

const brands = [
  'Apple',
  'Samsung',
  'OnePlus',
  'Xiaomi',
  'Realme'
];

export default function BrandFilter() {
  const [selectedSellers, setSelectedSellers] = useState([]);

  const toggleSeller = (brand) => {
    setSelectedSellers((prev) =>
      prev.includes(brand)
        ? prev.filter((s) => s !== brand)
        : [...prev, brand]
    );
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-64">
      <h2 className="text-lg font-semibold mb-3">Brands</h2>
      <div className="space-y-2">
        {brands.map((brand) => (
          <label key={brand} className="flex items-center space-x-2">
            <Checkbox
              checked={selectedSellers.includes(brand)}
              onChange={() => toggleSeller(brand)}
            />
            <span className="text-gray-700 ms-2">{brand}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
