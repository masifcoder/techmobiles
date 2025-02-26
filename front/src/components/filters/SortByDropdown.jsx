import React, { useState } from 'react';
import { Dropdown, Menu, Input } from 'antd';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';

const sortOptions = [
  { label: 'Newly listed', value: 'new' },
  { label: 'Most relevant', value: 'relevant' },
  { label: 'Lowest price', value: 'low_price' },
  { label: 'Highest price', value: 'high_price' },
];

const SortByDropdown = () => {
  const [selected, setSelected] = useState('Most relevant');
  const [searchQuery, setSearchQuery] = useState('');


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
    <div className="flex w-full items-center space-y-4">
      <div className="w-full flex-2">
        <Input
          placeholder="Search sellers..."
          value={searchQuery}
          size='large'
          onChange={(e) => setSearchQuery(e.target.value)}
          prefix={<SearchOutlined />}
          style={{border: '0px'}}
        />
      </div>
      <div className="w-full gap-4 flex items-center justify-end flex-1">
        <span className="font-semibold text-gray-700">SORT BY:</span>
        <Dropdown overlay={menu} trigger={['click']} >
          <button className="text-blue-500 hover:text-blue-700 flex items-center hover:cursor-pointer">
            {selected} <DownOutlined className="ml-1" />
          </button>
        </Dropdown>
      </div>
    </div>
  );
};

export default SortByDropdown;