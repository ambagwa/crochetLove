import Hero from "../components/sections/hero/Hero";
import FeaturedProducts from "../components/sections/featured_products/FeaturedProducts";
import About from "@/components/sections/about/About";
import WhyChooseUs from "@/components/sections/why_choose_us/WhyChooseUs";
import CustomerReviews from "@/components/sections/customer_reviews/CustomerReviews";

const Home = () => {
  return (
    <div className="-mt-30 pt-30 mx-4 lg:mx-40">
      <Hero />
      <FeaturedProducts />
      <About />
      <WhyChooseUs />
      <CustomerReviews />
    </div>
  );
};

export default Home;
