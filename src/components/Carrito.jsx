/**
 * Carrito de compras.
 * - Renderizado condicional si no hay elementos.
 * - Muestra total recibido por prop y permite eliminar por índice.
 */
import React from "react";

// Carrito de compras
function Carrito({ items, onRemove, total }) {
  return (
    <aside className="carrito">
      <h3>🛒 Carrito</h3>
      {items.length === 0 ? (
        <p>No hay platos en el carrito.</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.nombre} - S/ {item.precio}
              <button onClick={() => onRemove(index)}>❌</button>
            </li>
          ))}
        </ul>
      )}
      <h4>Total: S/ {total}</h4>
    </aside>
  );
}

export default Carrito;

