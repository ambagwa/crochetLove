import { useEffect } from "react";
import { useState } from "react";

const STORAGE_KEY = "favorites";

export const useFavorites = () => {
  const [favIds, setFavIds] = useState(() => {
    try {
      const storedIds = localStorage.getItem(STORAGE_KEY);
      return storedIds ? new Set(JSON.parse(storedIds)) : new Set();
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

  return { favIds, toggle };
};
