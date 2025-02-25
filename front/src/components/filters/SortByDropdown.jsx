import React, { useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const sortOptions = [
  { label: 'Newly listed', value: 'new' },
  { label: 'Most relevant', value: 'relevant' },
  { label: 'Lowest price', value: 'low_price' },
  { label: 'Highest price', value: 'high_price' },
];

const SortByDropdown = () => {
  const [selected, setSelected] = useState('Most relevant');

  const handleMenuClick = (e) => {
    const option = sortOptions.find(option => option.value === e.key);
    if (option) {
      setSelected(option.label);
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {sortOptions.map(option => (
        <Menu.Item key={option.value}>
          {option.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="flex items-center space-x-2">
      <span className="font-semibold text-gray-700">SORT BY:</span>
      <Dropdown overlay={menu} trigger={['click']}>
        <button className="text-blue-500 hover:text-blue-700 flex items-center">
          {selected} <DownOutlined className="ml-1" />
        </button>
      </Dropdown>
    </div>
  );
};

export default SortByDropdown;