import React from "react";
import DataTable from "react-data-table-component";

const topProducts = [
  { id: 1, name: "iPhone 15 Pro", sales: "$300,000", orders: "250,000", price: "$999" },
  { id: 2, name: "Samsung Galaxy S24 Ultra", sales: "$280,000", orders: "230,000", price: "$1199" },
  { id: 3, name: "OnePlus 12", sales: "$150,000", orders: "180,000", price: "$799" },
  { id: 4, name: "Google Pixel 8 Pro", sales: "$120,000", orders: "160,000", price: "$899" },
  { id: 5, name: "Xiaomi 14 Pro", sales: "$100,000", orders: "140,000", price: "$749" },
];

const columns = [
  {
    name: "Product",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Sales",
    selector: (row) => row.sales,
    sortable: true,
  },
  {
    name: "Orders",
    selector: (row) => row.orders,
    sortable: true,
  },
  {
    name: "Price",
    selector: (row) => row.price,
    sortable: true,
  },
];

const TopProductsTable = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold">Top 5 Products</h2>
      <DataTable
        columns={columns}
        data={topProducts}
        pagination={false}
        highlightOnHover
      />
    </div>
  );
};

export default TopProductsTable;
