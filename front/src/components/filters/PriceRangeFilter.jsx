import React, { useState } from 'react';
import { Slider, Card } from 'antd';

const PriceRangeFilter = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handlePriceChange = (value) => {
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  };


  return (
    <Card title="Filter by Price Range" className="w-full mx-auto mt-10 p-4">
      <Slider
        range
        min={0}
        max={1000}
        step={100}
        defaultValue={[minPrice, maxPrice]}
        onChange={handlePriceChange}
        marks={{
          0: '$0',
          300: '$300',
          500: '$500',
          700: '$700',
          1000: '$1000'
        }}
      />
      <div className="flex justify-between mt-4">
        {/* <span>Min: ${minPrice}</span>
        <span>Max: ${maxPrice}</span> */}
      </div>
    </Card>
  );
};

export default PriceRangeFilter;