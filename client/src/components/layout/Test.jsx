"use client";

import { useState } from "react";
import FilterSidebar from "./FilterSidebar";
import ProductCard from "./ProductCard"; // your existing card

// Sample data (replace with your real data)
const products = [
  { id: 1, name: "Crochet Hat", category: "hats", price: 500, inStock: true },
  { id: 2, name: "Crochet Bag", category: "bags", price: 1200, inStock: true },
  { id: 3, name: "Soft Toy", category: "toys", price: 800, inStock: false },
  { id: 4, name: "Warm Blanket", category: "blankets", price: 2500, inStock: true },
];

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (filters) => {
    let result = [...products];

    // 🔍 Search
    if (filters.search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    // 🧶 Category
    if (filters.category !== "all") {
      result = result.filter((p) => p.category === filters.category);
    }

    // 💰 Price
    result = result.filter(
      (p) => p.price >= filters.minPrice && p.price <= filters.maxPrice
    );

    // 📦 Stock
    if (filters.inStock) {
      result = result.filter((p) => p.inStock);
    }

    // 🔽 Sorting
    if (filters.sort === "low") {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>

      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Sidebar */}
        <FilterSidebar onFilterChange={handleFilterChange} />

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-gray-500 col-span-full">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}