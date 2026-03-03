import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <>
      <>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 pt-10 mt-20">
          {/*Left hero section */}
          <div className="py-10 sm:col-span-3 order-2 sm:order-1">
            <HeroText />
          </div>

          {/**Right hero section */}
          <div className="order-1 hidden sm:block sm:order-2 sm:col-span-2 mx-auto lg:ml-32">
            <HeroImage />
          </div>
        </div>
      </>
    </>
  );
};

export default Hero;
