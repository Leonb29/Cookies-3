// Lista de objetos con galletitas de ejemplo
const galletitas = [
    { categoria: "BabyShower", titulo: "Bohemio", img: "img/BabyShower/Bohemio.jpg" },
        { categoria: "BabyShower", titulo: "Elefante", img: "img/BabyShower/Elefante_1.jpg" },
        { categoria: "BabyShower", titulo: "Elefante", img: "img/BabyShower/Elefante_2.jpg" },
        { categoria: "BabyShower", titulo: "Flores", img: "img/BabyShower/Flores.jpg" },
        { categoria: "BabyShower", titulo: "Globo", img: "img/BabyShower/Globo.jpg" },
        { categoria: "BabyShower", titulo: "Mariposas", img: "img/BabyShower/Mariposas.jpg" },
        { categoria: "BabyShower", titulo: "Osos", img: "img/BabyShower/Osos.jpg" },

    { categoria: "Casamiento", titulo: "Casamiento", img: "img/Casamiento/Casamiento_2.JPG" },
        { categoria: "Casamiento", titulo: "Casamiento", img: "img/Casamiento/Casamiento.JPG" },

    { categoria: "Comunión - Bautizmo", titulo: "Angelitos", img: "img/Comunión - Bautizmo/Angelitos.PNG" },
        { categoria: "Comunión - Bautizmo", titulo: "Eucaristia", img: "img/Comunión - Bautizmo/Eucaristia_2.PNG" },
        { categoria: "Comunión - Bautizmo", titulo: "Eucaristia", img: "img/Comunión - Bautizmo/Eucaristia_3.PNG" },
        { categoria: "Comunión - Bautizmo", titulo: "Eucaristia", img: "img/Comunión - Bautizmo/Eucaristia.PNG" },
        { categoria: "Comunión - Bautizmo", titulo: "Paloma Dorada", img: "img/Comunión - Bautizmo/Paloma Dorada.JPG" },
        { categoria: "Comunión - Bautizmo", titulo: "Paloma Lila", img: "img/Comunión - Bautizmo/Paloma Lila.JPG" },
        { categoria: "Comunión - Bautizmo", titulo: "Paloma", img: "img/Comunión - Bautizmo/Paloma.JPG" },

    { categoria: "Cumpleaños Temáticos", titulo: "Dinos", img: "img/Cumpleaños Temáticos/Dinos.JPG" },
        { categoria: "Cumpleaños Temáticos", titulo: "Enfermera", img: "img/Cumpleaños Temáticos/Enfermera.JPG" },
        { categoria: "Cumpleaños Temáticos", titulo: "Florks", img: "img/Cumpleaños Temáticos/Florks.JPG" },
        { categoria: "Cumpleaños Temáticos", titulo: "Granja", img: "img/Cumpleaños Temáticos/Granja.JPG" },
        { categoria: "Cumpleaños Temáticos", titulo: "Jungla", img: "img/Cumpleaños Temáticos/Jungla.JPG" },
        { categoria: "Cumpleaños Temáticos", titulo: "Llamas", img: "img/Cumpleaños Temáticos/Llamas.JPG" },
        { categoria: "Cumpleaños Temáticos", titulo: "Mar", img: "img/Cumpleaños Temáticos/Mar.JPG" },
        { categoria: "Cumpleaños Temáticos", titulo: "Marihuana", img: "img/Cumpleaños Temáticos/Marihuana.JPG" },
        { categoria: "Cumpleaños Temáticos", titulo: "Pandas", img: "img/Cumpleaños Temáticos/Pandas.JPG" },
        { categoria: "Cumpleaños Temáticos", titulo: "Pintura", img: "img/Cumpleaños Temáticos/Pintura.JPG" },
        { categoria: "Cumpleaños Temáticos", titulo: "Zenon", img: "img/Cumpleaños Temáticos/Zenon.JPG" },

    { categoria: "Despedida de Soltera", titulo: "Despedida", img: "img/Despedida de Soltera/Despedida_2.PNG" },
        { categoria: "Despedida de Soltera", titulo: "Despedida", img: "img/Despedida de Soltera/Despedida.PNG" },

    { categoria: "Día de la Madre", titulo: "Flores", img: "img/Día de la Madre/Flores_1.JPG" },
        { categoria: "Día de la Madre", titulo: "Flores", img: "img/Día de la Madre/Flores_2.JPG" },
        { categoria: "Día de la Madre", titulo: "Flores", img: "img/Día de la Madre/Flores_3.JPG" },
        { categoria: "Día de la Madre", titulo: "Abuelita", img: "img/Día de la Madre/Abuelita.JPG" },
        { categoria: "Día de la Madre", titulo: "Ramo", img: "img/Día de la Madre/Ramo.JPG" },

    { categoria: "Día del Padre", titulo: "Chopp", img: "img/Día del Padre/Chopp.JPG" },
        { categoria: "Día del Padre", titulo: "Fredy", img: "img/Día del Padre/Fredy.JPG" },
        { categoria: "Día del Padre", titulo: "Goku", img: "img/Día del Padre/Goku.JPG" },
        { categoria: "Día del Padre", titulo: "Herramientas", img: "img/Día del Padre/Herramientas.JPG" },
        { categoria: "Día del Padre", titulo: "IronMan", img: "img/Día del Padre/IronMan.JPG" },
        { categoria: "Día del Padre", titulo: "StarWars", img: "img/Día del Padre/StarWars.JPG" },
        { categoria: "Día del Padre", titulo: "SuperMan", img: "img/Día del Padre/SuperMan.JPG" },

    { categoria: "Navidad", titulo: "Navidad", img: "img/Navidad/IMG_20221114_225314.jpg" },
        { categoria: "Navidad", titulo: "Navidad", img: "img/Navidad/IMG_20221116_231554.jpg" },
        
    { categoria: "Personajes Infantiles", titulo: "Alicia", img: "img/Personajes Infantiles/Alicia.JPG" },
        { categoria: "Personajes Infantiles", titulo: "DragonBall", img: "img/Personajes Infantiles/DragonBall.JPG" },
        { categoria: "Personajes Infantiles", titulo: "Llorones", img: "img/Personajes Infantiles/Llorones.JPG" },
        { categoria: "Personajes Infantiles", titulo: "Mickey", img: "img/Personajes Infantiles/Mickey.JPG" },
        { categoria: "Personajes Infantiles", titulo: "Mike", img: "img/Personajes Infantiles/Mike.JPG" },
        { categoria: "Personajes Infantiles", titulo: "Peppa", img: "img/Personajes Infantiles/Peppa.JPG" },
        { categoria: "Personajes Infantiles", titulo: "Plin Plin", img: "img/Personajes Infantiles/Plin Plin.JPG" },
        { categoria: "Personajes Infantiles", titulo: "Snoopy", img: "img/Personajes Infantiles/Snoopy.JPG" },
        { categoria: "Personajes Infantiles", titulo: "Zenon", img: "img/Personajes Infantiles/Zenon.JPG" },

    { categoria: "San Valentín", titulo: "Café", img: "img/San Valentín/Café.JPG" },
        { categoria: "San Valentín", titulo: "Calculadora", img: "img/San Valentín/Calculadora.JPG" },
        { categoria: "San Valentín", titulo: "Cerdito", img: "img/San Valentín/Cerdito.JPG" },
        { categoria: "San Valentín", titulo: "Colores", img: "img/San Valentín/Colores.JPG" },
        { categoria: "San Valentín", titulo: "Lamparita", img: "img/San Valentín/Lamparita.PNG" },
        { categoria: "San Valentín", titulo: "Pikachu", img: "img/San Valentín/Pikachu.JPG" },

    { categoria: "SuperHéroes", titulo: "Avengers", img: "img/SuperHéroes/Avengers.JPG" },
        { categoria: "SuperHéroes", titulo: "Hulk", img: "img/SuperHéroes/Hulk.JPG" },
        { categoria: "SuperHéroes", titulo: "Spiders", img: "img/SuperHéroes/Spiders.JPG" },
        { categoria: "SuperHéroes", titulo: "Super Hero Girls", img: "img/SuperHéroes/Super Hero Girls.JPG" },

    { categoria: "Video Juegos", titulo: "Among Us", img: "img/Video Juegos/FB_IMG_1654235077676.JPG" },
    { categoria: "Video Juegos", titulo: "Video Juegos", img: "img/Video Juegos/FB_IMG_1654235289265.JPG" },
    { categoria: "Video Juegos", titulo: "Minecraft", img: "img/Video Juegos/IMG_20211104_090555_690.PNG" },
    { categoria: "Video Juegos", titulo: "Cuphead", img: "img/Video Juegos/IMG_20220903_095138.JPG" },
    { categoria: "Video Juegos", titulo: "Mario", img: "img/Video Juegos/IMG_20220917_003350.JPG" },
    { categoria: "Video Juegos", titulo: "Angry Birds", img: "img/Video Juegos/IMG_20221007_120004.JPG" },
    { categoria: "Video Juegos", titulo: "Plantas Vs Zombies", img: "img/Video Juegos/Plantas Vs Zombies.JPG" },
    // Agrega más aquí...
];

function mostrarResumenCategorias() {
    const contenedor = document.getElementById("galletitas");
    contenedor.innerHTML = "";

    const categoriasUnicas = [...new Set(galletitas.map(g => g.categoria))];

    categoriasUnicas.forEach(categoria => {
        const galletita = galletitas.find(g => g.categoria === categoria); // toma solo la primera de cada categoría
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
            <img src="${galletita.img}" alt="${galletita.titulo}" loading="lazy">
            <h3>${galletita.titulo}</h3>
            <p>${galletita.categoria}</p>
        `;
        div.addEventListener("click", () => {
            mostrarGalletitas(categoria);
            activarCategoria(categoria);
        });
        contenedor.appendChild(div);
    });
}

function mostrarGalletitas(filtro = "todas") {
    const contenedor = document.getElementById("galletitas");
    contenedor.innerHTML = "";

    const filtradas = filtro === "todas" ? galletitas : galletitas.filter(g => g.categoria === filtro);

    // filtradas.forEach(g => {
    //     const div = document.createElement("div");
    //     div.classList.add("card");
    //     div.innerHTML = `
    //         <img src="${g.img}" alt="${g.titulo}">
    //         <h3>${g.titulo}</h3>
    //         <p>${g.categoria}</p>
    //     `;
    //     contenedor.appendChild(div);
    filtradas.forEach((g, index) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
        <img src="${g.img}" alt="${g.titulo}" loading="lazy">
        <h3>${g.titulo}</h3>
        <p>${g.categoria}</p>
    `;

    div.querySelector("img").addEventListener("click", () => {
        abrirLightbox(filtradas, index);
    });

    contenedor.appendChild(div);
    });
}

document.querySelectorAll("#filtro-menu li").forEach(li => {
    li.addEventListener("click", () => {
        const categoria = li.getAttribute("data-categoria");
        activarCategoria(categoria);
        if (categoria === "todas") {
            mostrarResumenCategorias();
        } else {
            mostrarGalletitas(categoria);
        }
    });
});

function activarCategoria(categoria) {
    document.querySelectorAll("#filtro-menu li").forEach(el => {
        if (el.getAttribute("data-categoria") === categoria) {
            el.classList.add("activo");
        } else {
            el.classList.remove("activo");
        }
    });
}

// Cargar todo al inicio
mostrarResumenCategorias();

let currentIndex = 0;
let imagenesActuales = [];

function abrirLightbox(imagenes, indexInicial) {
    imagenesActuales = imagenes;
    currentIndex = indexInicial;

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    lightboxImg.src = imagenes[currentIndex].img;
    lightbox.classList.remove("hidden");
}

function cerrarLightbox() {
    document.getElementById("lightbox").classList.add("hidden");
}

function cambiarImagen(direccion) {
    currentIndex += direccion;

    if (currentIndex < 0) currentIndex = imagenesActuales.length - 1;
    if (currentIndex >= imagenesActuales.length) currentIndex = 0;

    document.getElementById("lightbox-img").src = imagenesActuales[currentIndex].img;
}

// Eventos
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".close").addEventListener("click", cerrarLightbox);
  document.querySelector(".prev").addEventListener("click", () => cambiarImagen(-1));
  document.querySelector(".next").addEventListener("click", () => cambiarImagen(1));
});
