/**
 * Carrito – vista profesional con agrupación por plato, controles +/−,
 * resumen de costos, cupón y forma de entrega (simulada).
 */
import React, { useMemo, useState } from "react";
import { useCart } from "../context/CartContext";

export default function Carrito() {
  const { items, add, removeAt, clear, total } = useCart();
  const [cupon, setCupon] = useState("");
  const [delivery, setDelivery] = useState("local"); // local | llevar

  // Agrupar por id para mostrar cantidades sin cambiar tu contexto
  const grupos = useMemo(() => {
    const m = new Map();
    items.forEach((p, idx) => {
      const key = p.id ?? idx;
      if (!m.has(key)) m.set(key, { ...p, qty: 0, firstIndex: idx });
      const g = m.get(key);
      g.qty += 1;
    });
    return Array.from(m.values());
  }, [items]);

  // Buscar índice de la primera ocurrencia para removeAt
  const findIndexById = (id) => items.findIndex((x) => x.id === id);

  // Cálculos (simulados)
  const subTotal = total;
  const cargoServicio = subTotal * 0.1;           // 10% servicio
  const descuento = cupon.trim().toUpperCase() === "DRAGON10" ? subTotal * 0.1 : 0;
  const totalFinal = Math.max(0, subTotal + cargoServicio - descuento);

  return (
    <section className="fade-in">
      <h2>Tu carrito</h2>

      {items.length === 0 ? (
        <p className="notice" style={{background:"rgba(0,0,0,.45)", padding:12, borderRadius:12}}>
          Aún no has agregado platos. Ve a la <a className="nav-link" href="/carta">Carta</a>.
        </p>
      ) : (
        <div className="cart-shell">
          {/* Lista */}
          <div className="cart-list">
            {grupos.map((g) => (
              <div key={g.id} className="cart-row">
                <img src={g.imagen || "/logo.png"} alt={g.nombre} />
                <div>
                  <div style={{fontWeight:700}}>{g.nombre}</div>
                  <div style={{opacity:.85, fontSize:14}}>{g.descripcion}</div>
                </div>

                <div className="qty">
                  <button onClick={() => { const i = findIndexById(g.id); if (i >= 0) removeAt(i); }}>−</button>
                  <span>{g.qty}</span>
                  <button onClick={() => add(g)}>+</button>
                </div>

                <div style={{fontWeight:700}}>S/ {(g.precio * g.qty).toFixed(2)}</div>
              </div>
            ))}
            <div className="actions" style={{justifyContent:"flex-end"}}>
              <button className="btn ghost" onClick={clear}>Vaciar carrito</button>
            </div>
          </div>

          {/* Resumen */}
          <aside className="summary">
            <h3>Resumen</h3>
            <div className="line"><span>Subtotal</span><span>S/ {subTotal.toFixed(2)}</span></div>
            <div className="line"><span>Cargo de servicio (10%)</span><span>S/ {cargoServicio.toFixed(2)}</span></div>

            <div className="line">
              <span>Modo</span>
              <div className="field">
                <label><input type="radio" name="modo" checked={delivery==="local"} onChange={()=>setDelivery("local")} /> En el local</label>
                <label><input type="radio" name="modo" checked={delivery==="llevar"} onChange={()=>setDelivery("llevar")} /> Para llevar</label>
              </div>
            </div>

            <div className="line">
              <span>Cupón</span>
              <div className="field">
                <input type="text" value={cupon} onChange={(e)=>setCupon(e.target.value)} placeholder="Ej: DRAGON10" />
                <button className="btn" type="button" onClick={() => setCupon((c)=>c.trim())}>Aplicar</button>
              </div>
            </div>

            {descuento > 0 && (
              <div className="line">
                <span>Descuento</span><span>− S/ {descuento.toFixed(2)}</span>
              </div>
            )}

            <div className="line total"><span>Total</span><span>S/ {totalFinal.toFixed(2)}</span></div>

            <div className="actions" style={{justifyContent:"flex-end"}}>
              <button className="btn">Confirmar pedido</button>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}

