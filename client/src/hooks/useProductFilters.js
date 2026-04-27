// useProductFilters.js
import { useState, useMemo } from "react";

export const useProductFilters = (products) => {
  const [filters, setFilters] = useState({
    search: "",
    category: "all",
    minPrice: 0,
    maxPrice: 10000,
    inStock: false,
    sort: "",
  });

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (filters.search)
      result = result.filter((p) =>
        p.name.toLowerCase().includes(filters.search.toLowerCase())
      );

    if (filters.category !== "all")
      result = result.filter((p) => p.category.toLowerCase() === filters.category.toLowerCase());

    result = result.filter(
      (p) => p.price >= filters.minPrice && p.price <= filters.maxPrice
    );

    if (filters.inStock) result = result.filter((p) => p.stock > 0);

    if (filters.sort === "low") result.sort((a, b) => a.price - b.price);
    else if (filters.sort === "high") result.sort((a, b) => b.price - a.price);

    return result;
  }, [products, filters]); 

  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return { filteredProducts, handleFilterChange };
};