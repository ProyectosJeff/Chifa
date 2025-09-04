import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  // Carga inicial desde localStorage
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem("cart") || "[]"); }
    catch { return []; }
  });

  // Persistencia
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const add = (plato) => setItems(prev => [...prev, plato]);
  const removeAt = (index) => setItems(prev => prev.filter((_, i) => i !== index));
  const clear = () => setItems([]);

  const total = useMemo(
    () => items.reduce((acc, it) => acc + Number(it.precio || 0), 0),
    [items]
  );

  const value = { items, add, removeAt, clear, total, count: items.length };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
