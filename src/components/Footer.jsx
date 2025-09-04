// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="footer">
      <div className="brand">
        <img src="/logo.png" alt="Chifa Dragón Dorado" className="footer-logo" />
        <h4>Chifa Dragón Dorado</h4>
      </div>

      <div className="footer-info">
        <p>📍 Av. de la Amistad 1234 - Lima, Perú</p>
        <p>📞 (01) 456-7890 · ✉️ reservas@chifadraon.com</p>
        <p>🕒 Lun - Dom: 12:00pm - 11:00pm</p>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Chifa Dragón Dorado. Todos los derechos reservados.
      </div>
    </footer>
  );
}
export default Footer;
