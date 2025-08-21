/**
 * Formulario de reservas.
 * - Simula validación mínima y presentación de datos (no envía al servidor).
 */
// Reserva.jsx
// Formulario para realizar reservas
import { useState } from "react";

function Reserva() {
  const [reserva, setReserva] = useState({
    nombre: "",
    fecha: "",
    hora: "",
    personas: 1,
  });

  const handleChange = (e) => {
    setReserva({ ...reserva, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Reserva realizada:\nNombre: ${reserva.nombre}\nFecha: ${reserva.fecha}\nHora: ${reserva.hora}\nPersonas: ${reserva.personas}`
    );
  };

  return (
    <section className="reserva">
      <h2>Haz tu Reserva</h2>
      <form onSubmit={handleSubmit} className="reserva-form">
        <input
          type="text"
          name="nombre"
          placeholder="Tu Nombre"
          value={reserva.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="fecha"
          value={reserva.fecha}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="hora"
          value={reserva.hora}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="personas"
          min="1"
          value={reserva.personas}
          onChange={handleChange}
          required
        />
        <button type="submit">Confirmar Reserva</button>
      </form>
    </section>
  );
}

export default Reserva;


