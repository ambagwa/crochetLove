import { Routes, Route, Outlet } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Toaster } from "./components/ui/sonner";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Products } from "./pages/Products";
import { Register } from "./pages/Register";
import { CustomOrderRequest } from "./pages/CustomOrderRequest";
import { Product } from "./components/products/Product";
import { Checkout } from "./components/cart/Checkout";
import { Wishlist } from "./pages/Wishlist";
import { FavoritesProvider } from "@/context/FavoritesContext";

// Layout with Navbar
const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

// Layout without Navbar
const AuthLayout = () => (
  <>
    <Outlet />
  </>
);

const App = () => {
  return (
    <FavoritesProvider>
      <Toaster position="top-center" richColors />

      <Routes>
        {/**Routes with Navbar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="custom_orders" element={<CustomOrderRequest />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>

        {/**Routes without Navbar */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </FavoritesProvider>
  );
};

export default App;
