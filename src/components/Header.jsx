/**
 * Barra superior con navegación.
 * - Usa props para saber la página activa y actualizarla.
 * - Accesible y responsive.
 */
// Header.jsx
// Encabezado con menú de navegación
function Header({ cambiarPagina }) {
  return (
    <header className="header">
      <img src="/logo.png" alt="Logo Chifa" className="logo" />
      <h1>Chifa Dragón Dorado</h1>
      <nav>
        <button onClick={() => cambiarPagina("carta")}>Carta</button>
        <button onClick={() => cambiarPagina("reserva")}>Reserva</button>
        <button onClick={() => cambiarPagina("contacto")}>Contáctanos</button>
      </nav>
    </header>
  );
}

export default Header;

