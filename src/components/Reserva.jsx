/**
 * Reserva – formulario profesional con foco automático, stepper de personas,
 * validación básica y confirmación elegante.
 */
import React, { useEffect, useRef, useState } from "react";

export default function Reserva() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    fecha: "",
    hora: "",
    personas: 2,
  });
  const [ok, setOk] = useState(false);
  const nombreRef = useRef(null);

  // foco en "Nombre" al entrar
  useEffect(() => { nombreRef.current?.focus(); }, []);

  // fecha mínima hoy
  const hoy = new Date();
  const yyyy = hoy.getFullYear();
  const mm = String(hoy.getMonth() + 1).padStart(2, "0");
  const dd = String(hoy.getDate()).padStart(2, "0");
  const minDate = `${yyyy}-${mm}-${dd}`;

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const inc = () => setForm((p) => ({ ...p, personas: Math.min(20, Number(p.personas) + 1) }));
  const dec = () => setForm((p) => ({ ...p, personas: Math.max(1, Number(p.personas) - 1) }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.telefono || !form.fecha || !form.hora) return;
    setOk(true);
  };

  return (
    <section className="reserva fade-in">
      <h2>Hacer reserva</h2>

      {!ok ? (
        <form onSubmit={submit}>
          <div className="form-grid">
            <label>
              <span>Nombre</span>
              <input ref={nombreRef} name="nombre" value={form.nombre} onChange={onChange} placeholder="Tu nombre" required />
            </label>

            <label>
              <span>Teléfono</span>
              <input name="telefono" value={form.telefono} onChange={onChange} placeholder="999 999 999" required />
            </label>

            <label>
              <span>Fecha</span>
              <input type="date" name="fecha" value={form.fecha} onChange={onChange} min={minDate} required />
            </label>

            <label>
              <span>Hora</span>
              <input type="time" name="hora" value={form.hora} onChange={onChange} required />
            </label>

            <label>
              <span>Personas</span>
              <div className="stepper">
                <button type="button" onClick={dec}>−</button>
                <input name="personas" value={form.personas} onChange={onChange} style={{width: 64, textAlign: "center"}} />
                <button type="button" onClick={inc}>+</button>
              </div>
            </label>
          </div>

          <div className="actions">
            <button className="btn ghost" type="reset" onClick={() => setForm({ nombre:"", telefono:"", fecha:"", hora:"", personas:2 })}>Limpiar</button>
            <button className="btn" type="submit">Reservar</button>
          </div>
        </form>
      ) : (
        <div className="notice success">
          <strong>¡Reserva confirmada!</strong><br />
          {form.personas} personas el {form.fecha} a las {form.hora}.<br />
          Te contactaremos al <strong>{form.telefono}</strong>.
        </div>
      )}
    </section>
  );
}


