/**
 * Información de contacto y dirección ficticia.
 */
// Contacto.jsx
// Página de contacto con formulario y mapa
import { useState } from "react";

function Contacto() {
  const [mensaje, setMensaje] = useState({
    nombre: "",
    email: "",
    texto: "",
  });

  const handleChange = (e) => {
    setMensaje({ ...mensaje, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Mensaje enviado:\nNombre: ${mensaje.nombre}\nEmail: ${mensaje.email}\nMensaje: ${mensaje.texto}`
    );
  };

  return (
    <section className="contacto">
      <h2>Contáctanos</h2>
      <form onSubmit={handleSubmit} className="contacto-form">
        <input
          type="text"
          name="nombre"
          placeholder="Tu Nombre"
          value={mensaje.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu Email"
          value={mensaje.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="texto"
          placeholder="Escribe tu mensaje..."
          value={mensaje.texto}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>

      <div className="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.4734171557644!2d-77.02824!3d-12.04637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c9b29e7c8d%3A0xf4f05f3a7f6e4f7a!2sLima%20Centro!5e0!3m2!1ses!2spe!4v1679912345678!5m2!1ses!2spe"
          width="100%"
          height="300"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          title="Mapa Ubicación"
        ></iframe>
      </div>
    </section>
  );
}

export default Contacto;


