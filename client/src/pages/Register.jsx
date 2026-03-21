import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";
import logo from "../../public/logo.svg";

export const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [loading, setLoading] = useState(false);

  //Check passowrd strength
  const checkPasswordStrength = (p) => {
    let strength = 0;
    if (p.length >= 6) strength++;
    if (p.match(/[a-z]/) && p.match(/[A-Z]/)) strength++;
    if (p.match(/\d/)) strength++;
    if (p.match(/[^a-zA-Z\d]/)) strength++;
    return strength;
  };

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Check password strength
    if (name === "password") setPasswordStrength(checkPasswordStrength(value));

    // Clear error when user types
    setError((prevError) => ({ ...prevError, [name]: "" }));
  };

  // Clear inputs
  const clearInputs = () =>
    setFormData({ username: "", email: "", password: "" });

  // Check for errors
  const checkErrors = () => {
    let newError = { username: "", email: "", password: "" };
    let isValid = true;

    if (!formData.username.trim()) {
      newError.username = "Please provide your username";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newError.email = "Please provide your email";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newError.password = "Please provide a strong password";
      isValid = false;
    } else if (formData.password.length < 6) {
      newError.password = "Password MUST be at least 6 characters";
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();

    if (!checkErrors()) return;

    setLoading(true);

    try {
      const res = await API.post("/api/auth/register", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: "customer",
        // Add phone number implementation
      });

      // Check if token exiats in response
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        //navigate(""dashboard/)
        toast.success("Account created");
      } else {
        throw new Error("No token recieved from server");
      }
    } catch (error) {
      if (error.response?.status === 409) {
        toast.info("Email already exists");
      } else if (error.response?.status === 400) {
        toast.error(error.response.data.message || "Invalid input data");
      } else if (error.request) {
        toast.error("Network error - Cannot connect to the server");
      } else {
        toast.error(error.response?.data?.message || "Register failed");
      }
    } finally {
      setLoading(false);
      clearInputs();
    }
    clearInputs();
  };

  return (
    <div className="flex items-center justify-center my-15">
      <div className="w-full mx-4 bg-white rounded-lg shadow-lg p-4 max-w-[400px]">
        {/* Header */}
        <div className="text-center space-y-1 mb-3">
          <img
            src={logo}
            alt="crochetLove logo"
            className="rounded-full h-15 w-15 mx-auto mb-7"
          />
          <p className="text-lg font-semibold">Create Account</p>
          <p className="text-xs font-gray-600">
            Provide your details to register
          </p>
        </div>

        {/* Registration form */}
        <form onSumbit="handleFormSubmission" className="space-y-3">
          {/* Username input */}
          <div className="space-y-1">
            <Label htmlFor="username" className="font-normal text-md">
              Username
            </Label>
            <Input
              id="username"
              name="username"
              required
              value={formData.username}
              onChange={handleDataChange}
              placeholder="Eugene Ambagwa"
              className={`h-8  text-sm transition-all duration-400 ease-in-out ${
                error.username
                  ? "border-red-500 ring-1 ring-red-300 focus:ring-red-400 animate-glow"
                  : "border-gray-300 focus:ring-1 focus:ring-blue-500"
              }`}
            />

            {/* Username error */}
            <div
              className={`transition-all duration-400 overfflow-hidden ${
                error.username
                  ? "max-h-10 opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-1"
              }`}
            >
              {" "}
              {error.username && (
                <p className="text-red-500 text-[10px] mt-1">
                  {error.username}
                </p>
              )}
            </div>
          </div>

          {/* Email input */}
          <div className="spaace-y-1">
            <Label htmlFor="email" className="font-normal text-md">
              Email
            </Label>
            <Input
              id="email"
              value={formData.email}
              name="email"
              placeholder="eugeneambagwa@gmail.com"
              onChange={handleDataChange}
              required
              className={`h-8 text-sm transition-all duration-400 ease-in-out ${
                error.email
                  ? "border-red-500 ring-1 ring-red-300 focus:ring-red-400 animate-glow"
                  : "border-gray-300 focus:ring-1 focus:ring-blue-500"
              }`}
            />

            {/* Email error */}
            <div
              className={`transition-all duration-400 overflow-hidden ${
                error.email
                  ? "max-h-10 opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-1"
              }`}
            >
              {" "}
              {error.email && (
                <p className="text-red-500 text-[10px] mt-1">{error.email}</p>
              )}
            </div>
          </div>

          {/* Password input */}
          <div className="space-y-1">
            <Label htmlFor="password" className="font-normal text-md">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleDataChange}
              type="password"
              className={`h-10 text-sm transition-all duration-400 ease-in-out ${
                error.password
                  ? "border-red-500 ring-1 ring-red-300 focus:ring-red-400 animate-glow"
                  : "border-gray-300 focus:ring-1 focus:ring-blue-500"
              }`}
            />

            {/* Password strength indicator */}
            {formData.password && (
              <div className="mt-2 space-y-1">
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                        passwordStrength >= level
                          ? level === 1
                            ? "bg-red-500"
                            : level === 2
                              ? "bg-orange-500"
                              : level === 3
                                ? "bg-yellow-500"
                                : "bg-green-500"
                          : "bg-gray-200"
                      }`}
                    ></div>
                  ))}
                  <p className="text-gray-600 text-[10px]">
                    {passwordStrength === 0 && "Very weak"}
                    {passwordStrength === 1 && "Weak"}
                    {passwordStrength === 2 && "Fair"}
                    {passwordStrength === 3 && "Good"}
                    {passwordStrength === 4 && "Strong"}
                  </p>
                </div>
              </div>
            )}

            {/* Password error */}
            <div
              className={`transition-all duration-400 overflow-hidden ${
                error.password
                  ? "max-h-10 opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-1"
              }`}
            >
              {" "}
              {error.password && (
                <p className="text-red-500 text-[10px] mt-1">
                  {error.password}
                </p>
              )}
            </div>
          </div>

          <Button
            variant="orange"
            className="w-full h-8 text-md font-medium"
            type="submit"
            onClick={handleFormSubmission}
          >
            Register
          </Button>

          <div className="text-center">
            <span className="text-xs text-gray-600">
              Already have an account?{" "}
              <button
                className="text-xs text-blue-600 hover:tet-blue-700 font-medium hover:cursor-pointer underline underline-offset-2"
                type="button"
              >
                Log in
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};
