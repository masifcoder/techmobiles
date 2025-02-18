import React from 'react'
import DataTable from "react-data-table-component";

const Products = () => {

  const columns = [
    {
      name: "Customer's ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Customer Name",
      selector: (row) => (
        <div className="flex items-center gap-2">
          <img
            src={row.avatar}
            alt={row.name}
            className="w-6 h-6 rounded-full"
          />
          {row.name}
        </div>
      ),
      sortable: true,
    },
    {
      name: "Product",
      selector: (row) => row.product,
    },
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "Price",
      selector: (row) => `$${row.price}`,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => (
        <span
          className={`px-2 py-1 text-sm rounded-full font-semibold ${row.status === "Paid"
              ? "bg-green-100 text-green-600"
              : row.status === "Pending"
                ? "bg-yellow-100 text-yellow-600"
                : "bg-red-100 text-red-600"
            }`}
        >
          {row.status}
        </span>
      ),
    },
  ];

  const data = [
    {
      id: "#9359",
      name: "Esther",
      avatar: "https://via.placeholder.com/40",
      product: "1x SoundPro Spe...",
      date: "21/07/2024 08:22",
      price: 40,
      status: "Paid",
    },
    {
      id: "#3933",
      name: "Arlene",
      avatar: "https://via.placeholder.com/40",
      product: "5x FlexBar Dum...",
      date: "21/07/2024 10:11",
      price: 101,
      status: "Pending",
    },
    {
      id: "#5948",
      name: "Marjorie",
      avatar: "https://via.placeholder.com/40",
      product: "4x BrewMate...",
      date: "21/07/2024 12:31",
      price: 112,
      status: "Paid",
    },
    {
      id: "#2798",
      name: "Soham",
      avatar: "https://via.placeholder.com/40",
      product: "2x GlowSkin S...",
      date: "21/07/2024 03:12",
      price: 10,
      status: "Cancel",
    },
  ];


  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">All Products</h2>
      <DataTable columns={columns} data={data} pagination />
    </div>
  )
}

export default Products