import React, { useState } from "react";

const FiltersSidebar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    search: "",
    category: "all",
    minPrice: 0,
    maxPrice: 5000,
    inStock: false,
    sort: "latest",
  });

  const handleChange = (field, value) => {
    const updated = { ...filters, [field]: value };
    setFilters(updated);
    onFilterChange && onFilterChange(updated);
  };

  return (
    <aside className="w-full md:w-72 bg-white p-5 rounded-2xl shadow-lg sticky top-6 h-fit">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Filter products
      </h2>

      {/** Search */}
      <div className="mb-5">
        <input
          type="text"
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
          placeholder="Search crochet ..."
          value={filters.search}
          onChange={(e) => handleChange("search", e.target.value)}
        />
      </div>

      {/** All categories */}
      <div className="mb-5">
        <h3 className="text-sm font-medium text-gray-600 mb-2">Categories</h3>
        <div className="flex flex-col gap-2">
          {["all", "hats", "bags", "toys", "blankets"].map((cat) => (
            <button
              className={`text-left px-3 py-2 rounded-lg capitalize transition ${
                filters.category === cat
                  ? "bg-orange-100 text-orange-600 font-medium"
                  : "hover:bg-gray-100"
              }`}
              key={cat}
              onClick={() => handleChange("category", cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/** Price range */}
      <div className="mb-5">
        <h3 className="text-sm font-medium text-gray-600 mb-2">Price range</h3>

        {/** Range slider */}
        <input
          type="range"
          min="0"
          max="5000"
          value={filters.maxPrice}
          onChange={(e) => handleChange("maxPrice", Number(e.target.value))}
          className="w-full accent-orange-500"
        />

        <div className="flex gap-2 mt-2">
          <input
            type="number"
            className="w-1/2 border rounded-lg px-2 py-1"
            value={filters.minPrice}
            onChange={(e) => handleChange("minPrice", Number(e.target.value))}
          />
          <input
            type="number"
            className="w-1/2 border rounded-lg px-2 py-1"
            value={filters.maxPrice}
            onChange={(e) => handleChange("maxPrice", Number(e.target.value))}
          />
        </div>
      </div>

      {/** Stock */}
      <div className="mb-5 flex items-center justify-between">
        <span className="text-sm text-gray-600">In Stock</span>

        <button
          className={`w-10 h-5 items-center rounded-full p-1 transition ${
            filters.inStock ? "bg-orange-500" : "bg-gray-300"
          }`}
          onClick={() => handleChange("inStock", !filters.inStock)}
        >
          <div
            className={`bg-white w-3 h-3 rounded-full shadow-md transform transition ${
              filters.inStock ? "translate-x-5" : ""
            }`}
          ></div>
        </button>
      </div>

      {/** Sort */}
      <div className="mb-5">
        <h2 className="text-sm font-medium text-gray-600 mb-2">Sort by</h2>
        <select
          value={filters.sort}
          onChange={(e) => handleChange("sort", e.target.value)}
          className="w-full border roundedd-lg px-3 py-2 focus:ring-2 focus:ring-orange-500"
        >
          <option value="latest">Latest</option>
          <option value="Low">Price: Low to High</option>
          <option value="High">Price: High to Low</option>
        </select>
      </div>

      {/**Reset */}
      <button
        className="w-full bg-gray-100 hover:bg-gray-200 hover:cursor-pointer text-gray-700 py-2 rounded-lg transition"
        onClick={() => {
          setFilters({
            search: "",
            category: "all",
            minPrice: 0,
            maxPrice: 5000,
            inStock: false,
            sort: "latest",
          });
        }}
      >
        Reset Filters
      </button>
    </aside>
  );
};

export default FiltersSidebar;
