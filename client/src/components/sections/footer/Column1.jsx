import { Button } from "@/components/ui/button";
import React from "react";

const Column1 = () => {
  return (
    <div className="hidden sm:block py-2">
      <p className="text-xl mt-3 mb-1">CrochetLove</p>
      <p className="text-sm my-3">
        Home of your customized designs. Quality. Assurance. Timely Deliveries
      </p>

      {/** Add social media icons */}
      <div className="my-1">
        <Button size="icon" className="me-1"></Button>
        <Button size="icon" className="mx-1"></Button>
        <Button size="icon" className="mx-1"></Button>
        <Button size="icon" className="mx-1"></Button>
      </div>
    </div>
  );
};

export default Column1;
