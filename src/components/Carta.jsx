/**
 * Carta con buscador y tarjetas sin distorsión.
 * - useRef + focus automático
 * - Filtrado con useMemo
 * - onError: fallback al logo si la imagen remota falla
 */
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useCart } from "../context/CartContext";

const PLATOS = [
  { id: 1, nombre: "Arroz Chaufa", precio: 25, descripcion: "Clásico chaufa peruano con pollo, huevo y cebolla china.", imagen: "https://static.wixstatic.com/media/9755d8_a1a612def03a4b3e885d421ec3edf0c6~mv2.png/v1/fill/w_1280,h_720,al_c/9755d8_a1a612def03a4b3e885d421ec3edf0c6~mv2.png" },
  { id: 2, nombre: "Pollo con Tamarindo", precio: 28, descripcion: "Pollo crocante bañado en salsa agridulce de tamarindo.", imagen: "https://i.ytimg.com/vi/DxzdJtBj59Y/sddefault.jpg" },
  { id: 3, nombre: "Tallarín Saltado", precio: 26, descripcion: "Fideos salteados al wok con carne, verduras y sillao.", imagen: "https://buenazo.cronosmedia.glr.pe/original/2021/03/07/6044c82caf81d17ee553eb2e.jpg" },
  { id: 4, nombre: "Wantán Frito", precio: 18, descripcion: "Crujientes wantanes rellenos de carne y verduras.", imagen: "https://es.cravingsjournal.com/wp-content/uploads/2020/06/wantan-frito-1-500x500.jpg" },
  { id: 5, nombre: "Sopa Wantán Especial", precio: 20, descripcion: "Sopa ligera con fideos, pollo y verduras frescas.", imagen: "https://storage.googleapis.com/fitia_public_images/recipes%2FPE-R-V-00000074_g80fz1vrj1xrzp1v728fo4lw_large.jpeg" },
  { id: 6, nombre: "Kam Lu Wantán", precio: 32, descripcion: "Salteado agridulce con pollo, cerdo, langostinos y verduras.", imagen: "https://storage.googleapis.com/fitia_public_images/recipes%2FPE-R-V-00000028_d5vrlqlk92ha5hrg81o9uc7y_large.jpeg" },
];

export default function Carta() {
  const { add } = useCart();
  const [q, setQ] = useState("");
  const inputRef = useRef(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  const filtrados = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return PLATOS;
    return PLATOS.filter(p =>
      p.nombre.toLowerCase().includes(t) || p.descripcion.toLowerCase().includes(t)
    );
  }, [q]);

  const onImgError = (e) => { e.currentTarget.onerror = null; e.currentTarget.src = "/logo.png"; };

  return (
    <section className="carta fade-in">
      <h2>Nuestra Carta</h2>

      <div className="search">
        <input
          ref={inputRef}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar plato…"
          aria-label="Buscar plato"
        />
        {q && <button className="btn ghost" onClick={() => setQ("")}>Limpiar</button>}
      </div>

      <div className="platos-grid">
        {filtrados.map((plato) => (
          <article key={plato.id} className="plato-card">
            <div className="card-media">
              <img src={plato.imagen} alt={plato.nombre} loading="lazy" onError={onImgError}/>
            </div>
            <div className="card-body">
              <h3>{plato.nombre}</h3>
              <p>{plato.descripcion}</p>
              <p className="precio">S/ {plato.precio}</p>
              <button className="btn" onClick={() => add(plato)}>Agregar al carrito</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
