// Check authentication before liking a product
import { useFavorites } from "@/context/FavoritesContext";
import { useLocation, useNavigate } from "react-router-dom";

export const useAuthFavorites = () => {
  const { favIds, toggle } = useFavorites();
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = !!localStorage.getItem("token");

  const protectedToggle = (id) => {
    if (!isLoggedIn) {
      // Save the current page so we can return after login
      navigate("/login", { state: { from: location } });
      return;
    }

    toggle(id);
  };

  return { favIds, toggle: protectedToggle };
};
