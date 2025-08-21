/**
 * Carta de platos.
 * - Muestra lista (renderizado de listas) con imagen, descripción y precio.
 * - Usa prop onAddToCart para comunicar acciones al padre.
 */
import React from "react";

// Lista de platos con imágenes
const platos = [
  {
    id: 1,
    nombre: "Arroz Chaufa",
    descripcion: "Clásico chaufa peruano con pollo, huevo y cebolla china.",
    precio: 25,
    imagen: "https://static.wixstatic.com/media/9755d8_a1a612def03a4b3e885d421ec3edf0c6~mv2.png/v1/fill/w_1280,h_720,al_c/9755d8_a1a612def03a4b3e885d421ec3edf0c6~mv2.png",
  },
  {
    id: 2,
    nombre: "Pollo con Tamarindo",
    descripcion: "Pollo crocante bañado en salsa agridulce de tamarindo.",
    precio: 28,
    imagen: "https://i.ytimg.com/vi/DxzdJtBj59Y/sddefault.jpg",
  },
  {
    id: 3,
    nombre: "Tallarín Saltado",
    descripcion: "Fideos salteados al wok con carne, verduras y sillao.",
    precio: 26,
    imagen: "https://buenazo.cronosmedia.glr.pe/original/2021/03/07/6044c82caf81d17ee553eb2e.jpg",
  },
  {
    id: 4,
    nombre: "Wantán Frito",
    descripcion: "Crujientes wantanes rellenos de carne y verduras.",
    precio: 18,
    imagen: "https://es.cravingsjournal.com/wp-content/uploads/2020/06/wantan-frito-1-500x500.jpg",
  },
  {
    id: 5,
    nombre: "Sopa Wantan Especial",
    descripcion: "Sopa china ligera con fideos, pollo y verduras frescas.",
    precio: 20,
    imagen: "https://storage.googleapis.com/fitia_public_images/recipes%2FPE-R-V-00000074_g80fz1vrj1xrzp1v728fo4lw_large.jpeg",
  },
  {
    id: 6,
    nombre: "Kan Lu Wantan",
    descripcion: "Arroz chaufa mixto con pollo, chancho y langostinos.",
    precio: 32,
    imagen: "https://storage.googleapis.com/fitia_public_images/recipes%2FPE-R-V-00000028_d5vrlqlk92ha5hrg81o9uc7y_large.jpeg",
  },
];

function Carta({ onAddToCart }) {
  return (
    <section className="carta fade-in">
      <h2>Nuestra Carta</h2>
      <div className="platos-grid">
        {platos.map((plato) => (
          <div key={plato.id} className="plato-card">
            <img src={plato.imagen} alt={plato.nombre} />
            <h3>{plato.nombre}</h3>
            <p>{plato.descripcion}</p>
            <p className="precio">S/ {plato.precio}</p>
            <button onClick={() => onAddToCart(plato)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Carta;

