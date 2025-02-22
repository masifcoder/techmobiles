import React, { useState, useEffect } from 'react'
import DataTable from "react-data-table-component";
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/product/all');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const columns = [
    {
      name: "Image",
      selector: (row) => <div className="flex items-center gap-2">
        <img
          src={row.images[0]}
          alt={row.name}
          className="w-20 h-20 rounded mb-2"
        />
      </div>
    },
    {
      name: "Name",
      selector: (row) => (
        <div className="flex items-center gap-2">
          {row.name}
        </div>
      ),
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => `$${row.price}`,
      sortable: true,
    },
    {
      name: "Discounted Price",
      selector: (row) => `$${row.discounted_price}`,
    },
    {
      name: "In Stock",
      selector: (row) => (
        <span
          className={`px-2 py-1 text-sm rounded-full font-semibold ${row.inStock === true
            ? "bg-green-100 text-green-600"
            : row.status === false
              ? "bg-yellow-100 text-yellow-600"
              : "bg-red-100 text-red-600"
            }`}
        >
          {row.inStock ? 'Available' : 'Out Of Stock'}
        </span>
      ),
    },
  ];

  return (
    <div className="p-6 bg-white rounded-md shadow-sm">
      <h1 className="text-3xl font-bold mb-4">All Products</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Welcome to your dashboard! This layout uses Tailwind CSS's grid system to create a responsive two-column layout.
      </p>
      <h2 className="text-xl font-semibold mb-4">All Products</h2>
      <DataTable
        columns={columns}
        data={products}
        pagination
        progressPending={loading}
      />
    </div>
  )
}

export default Products