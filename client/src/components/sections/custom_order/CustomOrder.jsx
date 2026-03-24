import { Button } from "@/components/ui/button";
import React from "react";

const CustomOrder = () => {
  return (
    <div className="-mt-15 p-12 bg-orange-300">
      <h1 className="text-center font-bold text-3xl sm:text-5xl">
        Looking to curate something unique? We got you
      </h1>
      <Button
        size="lg"
        className="flex mt-16 text-lg mx-auto hover:cursor-pointer hover:bg-orange-500 hover:text-white bg-orange-400"
      >
        Request a custom item
      </Button>
    </div>
  );
};

export default CustomOrder;
