import { ItemsCarousel } from "../../features/ItemsCarousel";

const FeaturedProducts = () => {
  return (
    <div className="w-full bg-[linear-gradient(135deg,_#f97316_50%,_#171717_50%)] sm:mt-16 mt-10 rounded-xl p-14 sm:p-12 ">
      <p className="text-center text-2xl sm:text-4xl text-white font-bold">
        Best Selling Products
      </p>

      <ItemsCarousel />
    </div>
  );
};

export default FeaturedProducts;
