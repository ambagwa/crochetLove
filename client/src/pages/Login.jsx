import { useState } from "react";
import API from "../services/api";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Clear error as user types
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const clearInputs = () => {
    setFormData({ email: "", password: "" });
  };

  const checkErrors = () => {
    let newErrors = { email: "", password: "" };
    let isValid = true;

    if (!formData.email.trim()) {
      newErrors.email = "Provide your email";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Provide a strong password";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password MUST be at least 6 characters";
      isValid = false;
    }

    setErrors(nnewErrors);
    return isValid;
  };

  // handle form submission
  const handleFormSubmission = async (e) => {
    e.preventDefault();

    if (!checkErrors()) return;

    setLoading(true);

    try {
      const res = await API.post("/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("token", res.data.token);
      toast.success("Welcome back");

      if (!res.data.token) {
        toast.error("Login failed: No token");
        return;
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }

    clearInputs();
  };

  return (
    <div className="flex justify-center items-center my-15">
      <div className="w-full mx-4 bg-white rounded-lg shadow-lg p-4 max-w-[400px]">
        {/* Header */}
        <div className="text-center space-y-1 mb-3">
          <img
            src={logo}
            alt="crochetLove logo"
            className="w-15 h-15 rounded-full mx-auto mb-7"
          />
          <p className="font-semibold text-lg">Welcome back!</p>
          <p className="font-gray-600 italic text-xs">
            Provide your details to login
          </p>
        </div>

        {/* Registration form */}
        <form onsumbit={handleFormSubmission} classname="space-y-3">
          {/* email input */}
          <div className="space-y-1">
            <Label htmlFor="email" className="font-normal font-md">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleFormData}
              required
              className={`h-8 text-sm ttransition-all duration-400 ease-in-out ${
                errors.email
                  ? "border-red-500 ring-1 ring-red-300 focus:ring-red-400 animate-glow"
                  : "border-gray-300 focus:ring-1 focus:ring-blue-500"
              }`}
            />

            {/**Error display */}
            <div
              className={`transition-all duration-400 overflow-hidden ${
                errors.email
                  ? "max-h-10 opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-1"
              }`}
            >
              {errors.email && (
                <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/** Password input */}
          <div className="space-y-1">
            <Label htmlFor="password" className="text-md font-semibold">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleFormData}
              className={`h-8 text-sm transition-all duration-400 ease-in-out ${
                errors.password
                  ? "border-red-500 ring-1 ring-red-300 focus:ring-red-400 animate-glow"
                  : "border-gray-300 focus:ring-1 focus:ring-blue-500"
              }`}
            />

            {/**Error display */}
            <div
              className={`transition-all duration-400 overflow-hidden ${
                errors.password
                  ? "max-h-10 opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-1"
              }`}
            >
              {errors.password && (
                <p className="text-red-500 text-[10px] mt-1">
                  {errors.password}
                </p>
              )}
            </div>
          </div>

          <Button
            variant="blue"
            className="w-full h-8 text-md font-medium"
            type="submit"
          >
            {loading ? <Spinner /> : "Log In"}
          </Button>

          <div className="text-center">
            <span className="text-xs text-gray-600">
              Already have an account?{" "}
              <button
                className="text-xs text-blue-600 hover:text-blue-700 font-medium hovercursor-pointer underline underline-offset-2"
                type="button"
              >
                Register
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
