import { useState } from "react";
import Header from "./components/Header";
import Carta from "./components/Carta";
import Reserva from "./components/Reserva";
import Contacto from "./components/Contacto";
import Carrito from "./components/Carrito";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [pagina, setPagina] = useState("carta");
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (plato) => {
    setCarrito([...carrito, plato]);
  };

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index);
    setCarrito(nuevoCarrito);
  };

  const total = carrito.reduce((acc, plato) => acc + plato.precio, 0);

  return (
    <div className="app" style={{ backgroundImage: "url('/fondo.jpg')" }}>
      <Header cambiarPagina={setPagina} />
      <main>
        {pagina === "carta" && <Carta onAddToCart={agregarAlCarrito} />}
        {pagina === "reserva" && <Reserva />}
        {pagina === "contacto" && <Contacto />}
      </main>
      <Carrito
        items={carrito}
        total={total}
        onRemove={eliminarDelCarrito}
      />
      <Footer />
    </div>
  );
}

export default App;


