// Import Label, Imput from the shadCN
import { useState } from "react";
import crochet_image_1 from "../assets/images/crochet_image_1.jfif";
import refPhoto2 from "../assets/images/crochet_image_2.jfif";
import refPhoto3 from "../assets/images/crochet_image_3.jfif";
import refPhoto4 from "../assets/images/crochet_image_4.jfif";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const CustomOrderRequest = () => {
  const navigate = useNavigate();
  const process = [
    "Submit your request with details",
    "A quotation will be sent within 24 hrs",
    "Approve the quote and make a 70% deposit",
    "Create a custom piece",
    "Pay the balance and have your order shipped",
  ];

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    description: "",
    photos: "",
  });

  const [error, settError] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    description: "",
    photos: "",
  });

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));

    // Clear error as user inputs data
    setError((prevError) => ({ ...prevError, [name]: "" }));
  };

  // Clear inputs
  const clearInputs = () => {
    setFormData({ name: "", phoneNumber: "", description: "", photos: "" });
  };

  // Check for errors
  const checkErrors = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      phoneNumber: "",
      description: "",
      photos: "",
    };
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
      isValid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkErrors()) {
      // Submit form
      console.log("Form submitted:", formData);
      clearInputs();
    }
  };

  return (
    <>
      <div className="m-10">
        <p className="py-5 font-medium text-3xl sm:text-5xl">
          Custom Order Request
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-5 py-10">
          {/*Left section*/}
          <div className="col-span-3">
            <p className="text-2xl">
              Do you have a unique idea you wanna curate? Share them with us and
              we will create a custom piece just for
              <span className="text-orange underline">YOU</span>. Provide as
              many details as possible to help bring your idea into life
            </p>

            {/* Form*/}
            <form className=" mt-8">
              {/*Name input*/}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[20px] font-medium">
                  Your name:
                </Label>
                <Input
                  type="text"
                  id="name"
                  className={`h-8 text-xs transition-all duration-400 ease-in-out ${
                    error.name
                      ? "border-red-500 ring-1 ring-red-300 focus:ring-red-400 animate-glow"
                      : "border-gray-300 focus:ring-1 focus:ring-blue-500"
                  }`}
                  value={formData.name}
                  onChange={handleDataChange}
                />

                {/*Name error display*/}
                <div
                  className={`transition-all duration-400 overflow-hidden ${
                    error.name
                      ? "max-h-10 opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 -translate-y-1"
                  }`}
                >
                  {" "}
                  {error.name && (
                    <p className="text-red-500 text-[10px] mt-1">
                      {error.name}
                    </p>
                  )}
                </div>
              </div>

              {/*Phone number input*/}
              <div className="space-y-2">
                <Label
                  htmlFor="phoneNumber"
                  className="text-[20px] font-medium"
                >
                  Phone Number:
                </Label>
                <Input
                  type="numbert"
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={handleDataChange}
                  value={formData.phoneNumber}
                  className={`h-8 text-xs transition-all duration-400 ease-in-out ${
                    error.phoneNumber
                      ? "border-red-500 ring-1 ring-red-300 focus:ring-red-400 animate-glow"
                      : "border-gray-300 focus:ring-1 focus:ring-blue-500"
                  }`}
                />

                {/*Phone number error display */}
                <div
                  className={`transition-all duration-400 overflow-hidden ${
                    error.phoneNumber
                      ? "max-h-10 opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 -translate-y-1"
                  }`}
                >
                  {" "}
                  {error.phoneNumber && (
                    <p className="text-red-500 text-[10px] mt-1">
                      {error.phoneNumber}
                    </p>
                  )}
                </div>
              </div>

              {/** Email address input */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[20px] font-medium">
                  Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleDataChange}
                  className={`h-8 text-xs transition-all duration-400 ease-in-out ${
                    error.email
                      ? "border-red-500 ring-1 ring-red-300 focus:ring-red-400 animate-glow"
                      : "border-gray-300 focus:ring-1 focus:ring-blue-500"
                  }`}
                />

                {/*Phone number error display */}
                <div
                  className={`transition-all duration-400 overflow-hidden ${
                    error.email
                      ? "max-h-10 opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 -translate-y-1"
                  }`}
                >
                  {" "}
                  {error.email && (
                    <p className="text-red-500 text-[10px] mt-1">
                      {error.email}
                    </p>
                  )}
                </div>
              </div>

              {/** Description data input */}
              <div className="space-y-2">
                <Label
                  htmlFor="description"
                  className="text-[20px] font-medium"
                >
                  Describe your custom order
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  rows={10}
                  value={formData.textarea}
                  placeholder="Include details like: size, color, purpose, any special requests"
                  onChange={handleDataChange}
                  className={`h-8 w-100 text-xs transition-all duration-400 ease-in-out ${
                    error.phoneNumber
                      ? "border-red-500 ring-1 ring-red-300 focus:ring-red-400 animate-glow"
                      : "border-gray-300 focus:ring-1 focus:ring-blue-500"
                  }`}
                ></Textarea>
              </div>

              {/** Image data input */}
              <div className="space-y-2">
                <Label htmlFor="photos" className="text-[12px] font-medium">
                  Upload reference image
                </Label>
                <input id="photos" name="photos" type="file" />
              </div>
            </form>

            <Button
              variant="orange"
              disabled={!checkErrors}
              onClick={checkErrors}
            >
              Submit
            </Button>
            <Button variant="outline" onClick={() => navigate("/")}>Go home</Button>
          </div>

          {/*Right section*/}
          <div className="col-span-2">
            <p className="font-medium text-2xl pb-5">Get Inpired</p>
            <div className="grid grid-cols-2 my-5">
              <img
                src={crochet_image_1}
                alt="Reference image 1"
                className="object-cover h-50 w-50"
              />
              <img
                src={refPhoto2}
                alt="Reference image 2"
                className="object-cover h-50 w-50"
              />
              <img
                src={refPhoto3}
                alt="Reference image 3"
                className="object-cover h-50 w-50"
              />
              <img
                src={refPhoto4}
                alt="Reference image 4"
                className="object-cover h-50 w-50"
              />
            </div>

            <p className="text-xl">Custom order process:</p>
            <ul>
              {process.map((p, index) => (
                <li key={index}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
