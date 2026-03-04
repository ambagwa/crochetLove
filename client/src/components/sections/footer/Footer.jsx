import React from "react";
import Column1 from "./Column1";
import Column2 from "./Column2";
import Column3 from "./Column3";

const Footer = () => {
  return (
    <div className="p-5 mt-5 text-center sm:text-start bg-orange-400">
      <h1 className=" mni9text-center text-3xl sm:text-5xl font-bold">Quick Links</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/** Column 1 */}
        <Column1 />

        {/** Column 2 */}
        <Column2 />

        {/** Column 3 */}
        <Column3 />
      </div>
    </div>
  );
};

export default Footer;
