// Footer.jsx
// Pie de página del sitio con información del restaurante
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <img src="/logo.png" alt="Logo Chifa Dragón" className="footer-logo" />
        <h3>Chifa Dragón Dorado</h3>
        <p>📍 Av. de la Amistad 1234 - Lima, Perú</p>
        <p>📞 (01) 456-7890</p>
        <p>✉️ reservas@chifadraon.com</p>
        <p>🕒 Lun - Dom: 12:00pm - 11:00pm</p>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Chifa Dragón Dorado. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
