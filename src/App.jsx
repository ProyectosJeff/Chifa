// App.jsx – rutas, título dinámico y botón flotante del carrito (sin tocar tu fondo)
import { useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Carta from "./components/Carta";
import Reserva from "./components/Reserva";
import Contacto from "./components/Contacto";
import Carrito from "./components/Carrito";
import { useCart } from "./context/CartContext";

export default function App() {
  const { pathname } = useLocation();
  const { count } = useCart();

  useEffect(() => {
    const titles = {
      "/": "Inicio · Chifa Dragón",
      "/carta": "Carta · Chifa Dragón",
      "/reserva": "Reserva · Chifa Dragón",
      "/contacto": "Contáctanos · Chifa Dragón",
      "/carrito": "Tu Carrito · Chifa Dragón",
    };
    document.title = titles[pathname] || "Chifa Dragón";
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app-shell">
      <Header />

      <main className="container">
        <Routes>
          <Route path="/" element={<Carta />} />
          <Route path="/carta" element={<Carta />} />
          <Route path="/reserva" element={<Reserva />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </main>

      <Footer />

      {/* FAB del carrito (siempre visible) */}
      <Link to="/carrito" className="fab-cart" title="Ver carrito">
        🛒 {count}
      </Link>
    </div>
  );
}



