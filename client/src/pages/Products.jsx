import FiltersSidebar from "@/components/products/FiltersSidebar";
import { ProductCard } from "@/components/products/ProductCard";
import logo from "../assets/images/logo.svg";

export const Products = () => {
  const products = [
    {
      id: 1,
      name: "Summer bikini",
      description: "Show what your mama gave you",
      stars: 5,
      image: logo,
      price: "Sh. 3420",
    },
    {
      id: 2,
      name: "Summer bikini",
      description: "Show what your mama gave you",
      stars: 5,
      image: logo,
      price: "Sh. 3420",
    },
    {
      id: 3,
      name: "Summer bikini",
      description: "Show what your mama gave you",
      stars: 5,
      image: logo,
      price: "Sh. 3420",
    },
    {
      id: 4,
      name: "Summer bikini",
      description: "Show what your mama gave you",
      stars: 5,
      image: logo,
      price: "Sh. 3420",
    },
  ];
  return (
    <div className="-mt-30 pt-30 mx-4 lg:mx-40">
      <div className="grid grid-cols-5 gap-5 mt-10">
        {/** Left section */}
        <div className="col-span-1 border border-orange-500">
          <FiltersSidebar />
        </div>

        {/** Right section */}
        <div className="col-span-4 border border-orange-500 p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard product={p} key={p.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
