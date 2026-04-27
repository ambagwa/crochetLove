import FiltersSidebar from "@/components/products/FiltersSidebar";
import { ProductCard } from "@/components/products/ProductCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/sections/footer/Footer";
import { useFetch } from "@/hooks/useFetch";
import { useEffect } from "react";
import { Spinner } from "@/components/ui/spinner";
import { useProductFilters } from "@/hooks/useProductFilters";

export const Products = () => {
  const { data, loading, error } = useFetch("/products/fetchAllProducts");
  const navigate = useNavigate();

  const products =  data?.products || [];
  console.log(products)

  // Filter logic
  const { filteredProducts, handleFilterChange} = useProductFilters(products);
  
  if (loading) return (
    <div className="flex flex-col items-center justify-center mt-5">
      <Spinner className="text-orange-400" />
      <p className="mt-3">Loading ...</p>;
    </div>
  )
  
  if (error)
    return <p className="text-center mt-5 text-red-300">Error: {error}</p>;

  return (
    <>
      <div className="-mt-30 pt-30 mx-4 lg:mx-40">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-10">
          {/** Left section */}
          <div className="md:col-span-1">
            <FiltersSidebar onFilterChange={handleFilterChange} />
          </div>

          {/** Right section */}
          <div className="md:col-span-4 grid-cols-2 lg:grid-cols-3 ms-20 grid grid-cols-1 -mt-20 md:mt-0 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((p) => (
                <ProductCard
                  product={p}
                  key={p._id}
                  onClick={() => navigate(`/products/${p._id}`)}
                />
              ))
            ) : (
              <p className="col-span-full text-gray-500">
                No products match your filters.
              </p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
