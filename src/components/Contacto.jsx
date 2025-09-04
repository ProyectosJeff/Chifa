/**
 * Contáctanos – diseño profesional
 * - Dos columnas: info + formulario (responsive)
 * - CTA WhatsApp, links clicables (tel/mail), horarios
 * - Validación básica; mensaje de éxito sin recargar
 * - Mapa embebido y botón "Abrir en Google Maps"
 */
import React, { useEffect, useRef, useState } from "react";

const PHONE_HUMAN = "(01) 456-7890";
const PHONE_E164 = "+5114567890"; // para links tel: y WhatsApp
const WHATSAPP = "51987654321";   // <- cambia por tu número real si quieres
const EMAIL = "reservas@chifadraon.com";
const ADDRESS = "Av. de la Amistad 1234, Lima, Perú";
const GMAPS_QUERY = encodeURIComponent(ADDRESS);

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", asunto: "", mensaje: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const nameRef = useRef(null);

  // foco inicial en "Nombre"
  useEffect(() => { nameRef.current?.focus(); }, []);

  const validate = () => {
    const e = {};
    if (!form.nombre.trim()) e.nombre = "Ingresa tu nombre.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email no válido.";
    if (!form.mensaje.trim() || form.mensaje.trim().length < 10) e.mensaje = "Cuéntanos tu consulta (mín. 10 caracteres).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onChange = (ev) => setForm((p) => ({ ...p, [ev.target.name]: ev.target.value }));

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    // Simulación de envío + opción de abrir cliente de correo
    setSent(true);
    // Si prefieres abrir el cliente de correo, descomenta:
    // const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(form.asunto || "Consulta")}&body=${encodeURIComponent(`Hola, soy ${form.nombre}.\n\n${form.mensaje}\n\nMi email: ${form.email}`)}`;
    // window.location.href = mailto;

    // Resetea el formulario
    setForm({ nombre: "", email: "", asunto: "", mensaje: "" });
  };

  return (
    <section className="contacto-pro fade-in">
      <h2 className="section-title">Contáctanos</h2>

      <div className="contact-grid">
        {/* Columna izquierda: información */}
        <aside className="info-card">
          <div className="info-row">
            <span className="info-ico">📍</span>
            <div>
              <div className="info-label">Dirección</div>
              <div>{ADDRESS}</div>
              <a className="link" href={`https://www.google.com/maps/search/?api=1&query=${GMAPS_QUERY}`} target="_blank" rel="noreferrer">
                Abrir en Google Maps ↗
              </a>
            </div>
          </div>

          <div className="info-row">
            <span className="info-ico">📞</span>
            <div>
              <div className="info-label">Teléfono</div>
              <a className="link" href={`tel:${PHONE_E164}`}>{PHONE_HUMAN}</a>
            </div>
          </div>

          <div className="info-row">
            <span className="info-ico">✉️</span>
            <div>
              <div className="info-label">Correo</div>
              <a className="link" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>

          <div className="info-row">
            <span className="info-ico">🕒</span>
            <div>
              <div className="info-label">Horario</div>
              <div>Lun – Dom: 12:00pm – 11:00pm</div>
            </div>
          </div>

          <div className="socials">
            <a className="chip" href="https://facebook.com" target="_blank" rel="noreferrer">👍 Facebook</a>
            <a className="chip" href="https://instagram.com" target="_blank" rel="noreferrer">📸 Instagram</a>
            <a className="chip" href="https://tiktok.com" target="_blank" rel="noreferrer">🎵 TikTok</a>
          </div>

          <a
            className="btn whatsapp"
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent("Hola Chifa Dragón Dorado, tengo una consulta 😊")}`}
            target="_blank"
            rel="noreferrer"
          >
            💬 WhatsApp
          </a>
        </aside>

        {/* Columna derecha: formulario */}
        <div className="contact-card">
          {!sent ? (
            <form onSubmit={onSubmit} noValidate>
              <div className="grid-two">
                <label>
                  <span>Nombre</span>
                  <input
                    ref={nameRef}
                    name="nombre"
                    value={form.nombre}
                    onChange={onChange}
                    placeholder="Tu nombre"
                    aria-invalid={!!errors.nombre}
                  />
                  {errors.nombre && <small className="err">{errors.nombre}</small>}
                </label>

                <label>
                  <span>Email</span>
                  <input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="tucorreo@dominio.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <small className="err">{errors.email}</small>}
                </label>
              </div>

              <label>
                <span>Asunto (opcional)</span>
                <input
                  name="asunto"
                  value={form.asunto}
                  onChange={onChange}
                  placeholder="Reserva, consulta, sugerencia..."
                />
              </label>

              <label>
                <span>Mensaje</span>
                <textarea
                  name="mensaje"
                  value={form.mensaje}
                  onChange={onChange}
                  rows="6"
                  placeholder="Cuéntanos en qué podemos ayudarte"
                  aria-invalid={!!errors.mensaje}
                />
                {errors.mensaje && <small className="err">{errors.mensaje}</small>}
              </label>

              <div className="actions">
                <button className="btn ghost" type="reset" onClick={() => setForm({ nombre:"", email:"", asunto:"", mensaje:"" })}>
                  Limpiar
                </button>
                <button className="btn" type="submit">Enviar</button>
              </div>

              <p className="privacy">
                Al enviar aceptas ser contactado por email o teléfono. No compartimos tus datos con terceros.
              </p>
            </form>
          ) : (
            <div className="notice success">
              <strong>¡Gracias por tu mensaje!</strong><br />
              Te responderemos a la brevedad. Si es urgente, escríbenos por WhatsApp.
            </div>
          )}
        </div>
      </div>

      {/* Mapa embebido */}
      <div className="map-card">
        <iframe
          title="Ubicación Chifa Dragón Dorado"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.4734171557644!2d-77.02824!3d-12.04637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c9b29e7c8d%3A0xf4f05f3a7f6e4f7a!2sLima%20Centro!5e0!3m2!1ses!2spe!4v1679912345678!5m2!1ses!2spe"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}


