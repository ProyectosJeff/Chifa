// src/components/Header.jsx
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { count } = useCart();
  const navigate = useNavigate();
  const linkClass = ({ isActive }) => `nav-link ${isActive ? "active" : ""}`;

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo" onClick={() => navigate("/")} role="button" tabIndex={0}>
          <img src="/logo.png" alt="Chifa Dragón Dorado" />
          <span>Chifa Dragón Dorado</span>
        </div>

        <nav className="nav" aria-label="Principal">
          <NavLink to="/carta" className={linkClass}>Carta</NavLink>
          <NavLink to="/reserva" className={linkClass}>Reservar</NavLink>
          <NavLink to="/contacto" className={linkClass}>Contáctanos</NavLink>
          <NavLink to="/carrito" className="nav-link badge">🛒 {count}</NavLink>
        </nav>
      </div>
    </header>
  );
}


