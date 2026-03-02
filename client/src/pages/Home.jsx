import Hero from "../components/sections/hero/Hero";
import FeaturedProducts from "../components/sections/featured_products/FeaturedProducts";
import About from "@/components/sections/about/About";

const Home = () => {
  return (
    <div className="-mt-30 pt-30 mx-4 lg:mx-40">
      <Hero />
      <FeaturedProducts />
      <About />
    </div>
  );
};

export default Home;
