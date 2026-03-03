import React from "react";

const HeroText = () => {
  return (
    <>
      <p className="text-3xl sm:text-5xl font-medium">
        Handmade <span className="text-orange">crocheted</span> pieces with love
      </p>
      <p className="font-normal text-xl mt-5">
        Unique, customizable, and beautifull handcrafted pieces for every moment
        in your life
      </p>

      <div className="grid grid-col-1 md:grid-cols-2 gap-2 mt-6">
        <button className="bg-orange col-span-1 font-medium text-white p-2 rounded-md border hover:bg-transparent hover:border-orange hover:border-2 hover:text-orange transition-all duration-300 hover-scale-110 hover:cursor-pointer">
          Shop NOW
        </button>
        <button className="border border-orange hover:cursor-pointer col-span-1 text-orange font-medium hover:border-2 p-2 rounded-md">
          Custom order a design
        </button>
      </div>
    </>
  );
};

export default HeroText;
