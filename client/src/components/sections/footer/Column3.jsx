import { Button } from "@/components/ui/button";
import { FaPhone } from "react-icons/fa";
import { CgMailOpen } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";

const Column3 = () => {
  return (
    <div className="py-2 flex flex-col mx-auto">
      <p className="text-xl font-medium">Get in Touch</p>
      <div className="flex my-3 text-center gap-2">
        <div className="me-1 w-6 h-6">
          <FaPhone className="w-5 h-5 mt-1" />
        </div>
        <p className="text-lg">0713518279</p>
      </div>
      <div className="flex my-3 text-center gap-2">
        <div className="me-1 w-6 h-6">
          <CgMailOpen className="w-5 h-5 mt-1" />
        </div>
        <p className="text-lg">hello@crochetlove.com</p>
      </div>
      <div className="flex my-3 text-center gap-2">
        <div className="me-1 w-6 h-6">
          <FaLocationDot className="w-5 h-5 mt-1" />
        </div>
        <p className="text-lg">Nairobi, Kenya</p>
      </div>
    </div>
  );
};

export default Column3;
