import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

const STORAGE_KEY = "favorites";
const favoritesContext = createContext(null);

export const FavoritesProvider = ({ children }) => {
  const [favIds, setFavIds] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...favIds]));
  }, [favIds]);

  const toggle = (id) => { 
    setFavIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const clearAll = () => {
    setFavIds(new Set());
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <favoritesContext.Provider value={{ favIds, toggle, clearAll }}>
      {children}
    </favoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const ctx = useContext(favoritesContext);
  if (!ctx)
    throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
};
