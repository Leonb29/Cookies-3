import "../style.css";
import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";

function Home() {
  // 🔥 estado datos desde backend
  const [galletitas, setGalletitas] = useState([]);

  // 🔥 estado filtro
  const [categoria, setCategoria] = useState("todas");

  // 🚀 TRAER DATOS DEL BACKEND
  const traerGalletitas = async () => {
  try {
    const res = await fetch("https://cookies-3-qg3w.onrender.com/posts");
    const data = await res.json();
    setGalletitas(data);
  } catch (error) {
    console.log(error);
  }
};
  // 🚀 CUANDO CARGA LA PAGINA
  useEffect(() => {
    traerGalletitas();
  }, []);

  // 🔐 CREAR POST (PROTEGIDO)
  const crearPost = async () => {
  const token = localStorage.getItem("token");

  try {
    const res = await fetch("https://cookies-3-qg3w.onrender.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({
        nombre: "Galleta nueva",
        categoria: "Navidad",
        imagen: "/img/Navidad/navidad.png"
      })
    });

    // 🔥 VALIDACIÓN
    if (!res.ok) {
      alert("Error al crear post");
      return;
    }

    alert("Post creado correctamente");

    // 🔄 refrescar lista
    traerGalletitas();

  } catch (error) {
    console.log(error);
  }
};

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

        <a href="/login" style={{ marginLeft: "auto" }}>
          <button>Login</button>
        </a>

        <div className="barra-deslizante">
          <div className="cinta">
            <span className="item">🎉 20% OFF LA SEGUNDA DOCENA</span>
            <span className="item">♦ ENVIOS GRATIS</span>
            <span className="item">♦ DISEÑOS PERSONALIZADOS</span>
          </div>
        </div>
      </header>

      {/* BOTÓN PARA CREAR POST */}
      <div style={{ textAlign: "center", margin: "10px" }}>
        <button onClick={crearPost}>Crear Galletita</button>
      </div>

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

export default Home;