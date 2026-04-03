import { Link } from "react-router-dom";
import React from "react";

const CustomOrder = () => {
  return (
    <div className="-mt-15 p-12 bg-orange-300">
      <h1 className="text-center font-bold text-3xl sm:text-5xl">
        Looking to curate something unique? We got you
      </h1>
      <Link
        to="/custom_orders"
        className="flex mt-16 text-lg justify-center md:w-72 mx-auto hover:cursor-pointer hover:bg-orange-500 hover:text-white bg-orange-400"
      >
        Request a custom item
      </Link>
    </div>
  );
};

export default CustomOrder;
