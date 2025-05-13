const proyectosDiseno = [
    {
        titulo: "Banner web ADIDAS 'Trea young'",
        descripcion: "Promoción para el modelo de calzado deportivo 'Trae Young' de Adidas. Composición para trabajo universitario, destinado a publicidad para una tienda web.",
        img: "/img/dis/bannerWeb-adidasTraeYoung.png",
        link: "/img/dis/bannerWeb-adidasTraeYoung.png",
        tags: ["PSD"]
    },
    {
        titulo: "Guille Aquino 'Birra Time'",
        descripcion: "Ilustración digital del comediante Guillermo Aquino en el programa de BLENDER 'Escucho Ofertas'.",
        img: "/img/dis/guille-aquino.jpg",
        link: "/img/dis/guille-aquino.jpg",
        tags: ["Krita"]
    },
    {
        titulo: "Gameboy 3D",
        descripcion: "Maquetado de modelo 3D de gameboy con diseño de capibaras.",
        img: "/img/dis/gameboy.PNG",
        link: "/img/dis/gameboy-capibara.pdf",
        tags: ["AI"]
    },
    {
        titulo: "Landing Page Serenisima",
        descripcion: "Diseno de landing page para promocioner el producto 'dulce de leche' de La Serenisima tematica mundial 2022 Argentina.",
        img: "/img/dis/landing-serenisima.jpg",
        link: "/img/dis/landing-serenisima.jpg",
        tags: ["PSD"]
    },
    {
        titulo: "Gabi Guimaraes Edit",
        descripcion: "Composicion para promocion deportiva de la jugador brasilera de voleibol Gabriela Guimaraes.",
        img: "/img/dis/gabi-ig.jpg",
        link: "/img/dis/gabi-ig.jpg",
        tags: ["PSD"]
    },
    {
        titulo: "'Petit Fleur'",
        descripcion: "Ilustración digital en estilo sketch de una escena en la pelicula argentina 'Petit Fleur'.",
        img: "/img/dis/petit-flour.jpg",
        link: "/img/dis/petit-flour.jpg",
        tags: ["Krita"]
    },
    {
        titulo: "Landing Page turismo SINGAPUR",
        descripcion: "Diseno de landing page de turismo para Singapur.",
        img: "/img/dis/singapur-web.jpg",
        link: "/img/dis/singapur-web.jpg",
        tags: ["Krita"]
    },
    {
        titulo: "'Sin acústica'",
        descripcion: "Ilustración digital para proyecto universitario con la consigna de interpretación para la palabra asignada 'Silencio'.",
        img: "/img/dis/sin-acustica.png",
        link: "/img/dis/sin-acustica.png",
        tags: ["Krita"]
    },
    {
        titulo: "'Choque cultural'",
        descripcion: "lustración digital para proyecto universitario con la consigna de interpretación para la palabra asignada 'Choque'.",
        img: "/img/dis/choque-cultural.png",
        link: "/img/dis/choque-cultural.png",
        tags: ["PSD"]
    },
    {
        titulo: "'Alzu G5'",
        descripcion: "lustración digital de logo con identiad visual para emprendimiento virtual de bordados @bordadoskuto en instagram.",
        img: "/img/dis/alzu-g5.png",
        link: "/img/dis/alzu-g5.png",
        tags: ["Krita"]
    },
    {
        titulo: "'Jaique' Tres Acordes",
        descripcion: "Comisión de ilustración digital para usuario en estilo anime del personaje 'Jaique' de la serie 'Tres Acordes'.",
        img: "/img/dis/jaique.jpg",
        link: "/img/dis/jaique.jpg",
        tags: ["Krita"]
    },
    {
        titulo: "Baksu-radio",
        descripcion: "Comisión de ilustración digital para canal de Twitch 'basku radio'.",
        img: "/img/dis/baksu-radio.jpg",
        link: "/img/dis/baksu-radio.jpg",
        tags: ["Krita"]
    }
];

const disContainer = document.querySelector("#project-dis .section-content");

proyectosDiseno.forEach(proy => {
    const tagsHtml = proy.tags.length > 0
        ? `<ul class="project-tags">${proy.tags.map(tag => `<li class="${tag.toLowerCase()}-tag">${tag}</li>`).join("")}</ul>`
        : "";
        
    disContainer.innerHTML += `
        <div class="dis-project-card">
            <div class="card-img">
                <img src="${proy.img}" alt="Placeholder">
            </div>
            <div class="card-footer">
                <div class="card-info">
                    <p class="project-title">${proy.titulo}</p>
                    <p>${proy.descripcion}</p>
                    ${tagsHtml}
                </div>
                <a href="${proy.link}" target="_blank" rel="noopener noreferrer">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> Ver proyecto
                </a>
            </div>
        </div>
    `;
});
