import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Toaster } from "./components/ui/sonner";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Products } from "./pages/Products";
import { Register } from "./pages/Register";
import { CustomOrderRequest } from "./pages/CustomOrderRequest";

const App = () => {
  return (
    <>
      <Toaster position="top-center" richColors />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="custom_orders" element={<CustomOrderRequest />} />
      </Routes>
    </>
  );
};

export default App;
