import "./style.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function App() {

  // 🟢 GALLETITAS (ejemplos - podés agregar más)
  const galletitas = [
    { id: 1, nombre: "Baby Shower", categoria: "BabyShower", imagen: "/img/BabyShower/baby.png" },
    { id: 2, nombre: "Casamiento", categoria: "Casamiento", imagen: "/img/Casamiento/boda.png" },
    { id: 3, nombre: "Comunión", categoria: "Comunión - Bautizmo", imagen: "/img/Comunión - Bautizmo/comunion.png" },
    { id: 4, nombre: "Cumple Temático", categoria: "Cumpleaños Temáticos", imagen: "/img/Cumpleaños Temáticos/cumple.png" },
    { id: 5, nombre: "Despedida", categoria: "Despedida de Soltera", imagen: "/img/Despedida de Soltera/despedida.png" },
    { id: 6, nombre: "Día de la Madre", categoria: "Día de la Madre", imagen: "/img/Día de la Madre/madre.png" },
    { id: 7, nombre: "Día del Padre", categoria: "Día del Padre", imagen: "/img/Día del Padre/padre.png" },
    { id: 8, nombre: "Navidad", categoria: "Navidad", imagen: "/img/Navidad/navidad.png" },
    { id: 9, nombre: "Infantiles", categoria: "Personajes Infantiles", imagen: "/img/Personajes Infantiles/mickey.png" },
    { id: 10, nombre: "San Valentín", categoria: "San Valentín", imagen: "/img/San Valentín/sanvalentin.png" },
    { id: 11, nombre: "Superhéroes", categoria: "SuperHéroes", imagen: "/img/SuperHéroes/superheroes.png" },
    { id: 12, nombre: "Video Juegos", categoria: "Video Juegos", imagen: "/img/cookies-marketplace/public/img/Video Juegos/videojuegos.png" }
  ];

  // 🔥 estado del filtro
  const [categoria, setCategoria] = useState("todas");

  // 🔥 filtrado
  const filtradas =
    categoria === "todas"
      ? galletitas
      : galletitas.filter(g => g.categoria === categoria);

  return (
    <div>

      {/* HEADER */}
      <header>
        <div className="header-contenido">
          <img src="/img/Logo.png" alt="Logo" className="logo-header" />
          <h1>Las Cookies de Marr</h1>
        </div>

        <div className="barra-deslizante">
          <div className="cinta">
            <span className="item">🎉 20% OFF LA SEGUNDA DOCENA</span>
            <span className="item">♦ ENVIOS GRATIS</span>
            <span className="item">♦ DISEÑOS PERSONALIZADOS</span>
          </div>
        </div>
      </header>

      {/* CONTENIDO */}
      <div className="contenedor">

        {/* MENU */}
        <aside className="menu">
          <ul>

            <li onClick={() => setCategoria("todas")}>Todas</li>
            <li onClick={() => setCategoria("BabyShower")}>BabyShower</li>
            <li onClick={() => setCategoria("Casamiento")}>Casamiento</li>
            <li onClick={() => setCategoria("Comunión - Bautizmo")}>Comunión - Bautizmo</li>
            <li onClick={() => setCategoria("Cumpleaños Temáticos")}>Cumpleaños Temáticos</li>
            <li onClick={() => setCategoria("Despedida de Soltera")}>Despedida de Soltera</li>
            <li onClick={() => setCategoria("Día de la Madre")}>Día de la Madre</li>
            <li onClick={() => setCategoria("Día del Padre")}>Día del Padre</li>
            <li onClick={() => setCategoria("Navidad")}>Navidad</li>
            <li onClick={() => setCategoria("Personajes Infantiles")}>Personajes Infantiles</li>
            <li onClick={() => setCategoria("San Valentín")}>San Valentín</li>
            <li onClick={() => setCategoria("SuperHéroes")}>SuperHéroes</li>
            <li onClick={() => setCategoria("Video Juegos")}>Video Juegos</li>

          </ul>
        </aside>

        {/* GALERÍA */}
        <main className="galletitas">

          {filtradas.map(g => (
            <div key={g.id} className="card">
              <img src={g.imagen} alt={g.nombre} />
              <h3>{g.nombre}</h3>
              <p>{g.categoria}</p>
            </div>
          ))}

        </main>

      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-section">
            <h3>Seguinos</h3>
            <a href="https://www.instagram.com/lascookiesdemarr/" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i> Las Cookies de Marr
            </a>
          </div>

          <div className="footer-section">
            <h3>Contactanos</h3>
            <p><i className="fas fa-map-marker-alt"></i> Ituzaingo, Bs As</p>
          </div>

        </div>
      </footer>

    </div>
  );
}

export default App;