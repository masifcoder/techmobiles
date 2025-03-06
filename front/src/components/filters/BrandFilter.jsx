import { useEffect, useState } from 'react';
import { Checkbox, Card } from 'antd';

const brands = [
  'Apple',
  'Samsung',
  'OnePlus',
  'Xiaomi',
  'Realme'
];

export default function BrandFilter({ handleFilterChange }) {
  const [selectedBrands, setSelectedBrands] = useState([]);

  const toggleSeller = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((s) => s !== brand)
        : [...prev, brand]
    );
  };

  useEffect(() => {
    handleFilterChange('brand', selectedBrands)
  }, [selectedBrands])

  return (
    <Card title="Filer By Brand" className="w-full mx-auto mt-10 p-4">
      <div className="space-y-2">
        {brands.map((brand) => (
          <label key={brand} className="flex items-center space-x-2">
            <Checkbox
              checked={selectedBrands.includes(brand)}
              onChange={() => toggleSeller(brand)}
            />
            <span className="text-gray-700 ms-2">{brand}</span>
          </label>
        ))}
      </div>
    </Card>
  );
}
