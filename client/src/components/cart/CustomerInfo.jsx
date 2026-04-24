import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

export const CustomerInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    phoneNumber: "",
    mpesaNumber: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    location: "",
    phoneNumber: "",
    mpesaNumber: "",
  });
  const [loading, setLoading] = useState(false);

  const clearInputs = () => {
    setFormData({ name: "", location: "", phoneNumber: "", mpesaNumber: "" });
  };

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Realtime validation
    let errorMessage = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          errorMessage = "Name is required";
        }
        break;

      case "location":
        if (!value.trim()) errorMessage = "Location is required";
        break;

      case "phoneNumber":
        if (!value.trim()) {
          errorMessage = "Phone number is required";
        } else if (!/^\+?[\d\s\-]{7,15}$/.test(value)) {
          errorMessage = "Invalid phone Number";
        }
        break;

      case "mpesaNumber":
        if (!value.trim()) {
          errorMessage = "Phone number is required";
        } else if (!/^\+?[\d\s\-]{7,15}$/.test(value)) {
          errorMessage = "Invalid phone Number";
        }
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
  };

  const isFormValid = () => {
    return (
      !Object.values(errors).some((e) => e !== "") &&
      formData.name.trim() &&
      formData.location.trim() &&
      formData.phoneNumber.trim() &&
      formData.mpesaNumber.trim()
    );
  };

  return (
    <div className="sm:w-3/5 -mt-3 mb-10 sm:mb-0">
      <h2 className="font-medium text-3xl mb-7 bg-gray-100 sm:bg-transparent mt-5 p-3">
        Customer Information
      </h2>
      <p className="text-xl font-medium">Please fill in the form</p>

      {/**Customer details */}
      <form className="mt-2">
        {/**Name */}
        <div className="space-y-3 mt-5">
          <Label htmlFor="name" className="text-[20px] font-normal">
            Name*
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Eugene Ambagwa"
            className={`h-10 text-xs transition-all duration-400 ease-in-out ${
              errors.name
                ? "border-red-500 ring-2 ring-red-300 focus:ring-red-400 animate-glow"
                : "border-gray-300 focus:ring-2 focus:ring-blue-500"
            }`}
            value={formData.name}
            onChange={handleDataChange}
          />
        </div>

        {/**Location */}
        <div className="space-y-3 mt-5">
          <Label htmlFor="location" className="text-[20px] font-normal">
            Location*
          </Label>
          <Input
            type="text"
            id="location"
            placeholder="Karen, Nairobi"
            name="location"
            className={`h-10 text-xs transition-all duration-400 ease-in-out ${
              errors.location
                ? "border-red-500 ring-2 ring-red-300 focus:ring-red-400 animate-glow"
                : "border-gray-300 focus:ring-2 focus:ring-blue-500"
            }`}
            value={formData.location}
            onChange={handleDataChange}
          />
        </div>

        {/**Phone number */}
        <div className="space-y-3 mt-5">
          <Label htmlFor="phoneNumber" className="text-[20px] font-normal">
            Phone Number*
          </Label>
          <Input
            type="text"
            id="phoneNumber"
            placeholder="0713518279"
            name="phoneNumber"
            className={`h-10 text-xs transition-all duration-400 ease-in-out ${
              errors.phoneNumber
                ? "border-red-500 ring-2 ring-red-300 focus:ring-red-400 animate-glow"
                : "border-gray-300 focus:ring-2 focus:ring-blue-500"
            }`}
            value={formData.phoneNumber}
            onChange={handleDataChange}
          />
        </div>

        {/** Mpesa number */}
        <div className="space-y-3 mt-5">
          <Label htmlFor="mpesaNumber" className="text-[20px] font-normal">
            Mpesa Phone Number to Pay*
          </Label>
          <Input
            type="text"
            id="mpesaNumber"
            placeholder="0713518279"
            name="mpesaNumber"
            className={`h-10 text-xs transition-all duration-400 ease-in-out ${
              errors.mpesaNumber
                ? "border-red-500 ring-2 ring-red-300 focus:ring-red-400 animate-glow"
                : "border-gray-300 focus:ring-2 focus:ring-blue-500"
            }`}
            value={formData.mpesaNumber}
            onChange={handleDataChange}
          />
        </div>

        {/**Save button */}
        <div className="flex justify-end mt-10">
          <Button
            variant="orange"
            disabled={!isFormValid()}
            className="w-[100px] right-0 p-5 mt-5 me-5 h-8 text-xl font-medium"
            type="submit"
          >
            {loading ? "Saving" : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
};
