const proyectosProgramacion = [
    {
        titulo: "FAKE Casino",
        descripcion: "Mini juego de tragamonedas online hecho con JavaScript puro. Incluye lógica de apuesta, animación de rodillos, sistema de ganancias y estadísticas persistentes con LocalStorage.",
        img: "/img/program/fake-casino.png",
        link: "https://fake-casino.netlify.app",
        tags: ["HTML", "CSS", "JS"]
    },
    {
        titulo: "Federación Metropolitana de Voleibol",
        descripcion: "Página de noticias, torneo y reglamentos para la liga metropolitana de voleibol",
        img: "/img/program/fmv.png",
        link: "https://abrilbarrientos.github.io/fmV/",
        tags: ["HTML", "CSS"]
    },
    {
        titulo: "Buscador de series y detalles",
        descripcion: "Proyecto universitario ft. Alvarez-Giacomini para buscar titulos y detalles de series de tv. Desarrollado con API 'TVMAZE'",
        img: "/img/program/buscador-shows.png",
        link: "https://rococo-profiterole-2b75cf.netlify.app",
        tags: ["JS", "HTML", "CSS"]
    },
    {
        titulo: "Dashboard tareas",
        descripcion: "Dasboard para generar cards de tareas con etiquetas y fechas personalizadas, asignar prioridades y completar o eliminar del espacio.",
        img: "/img/program/tareas-dashboard.png",
        link: "https://dashboard-tareas.vercel.app",
        tags: ["JS", "HTML", "CSS"]
    },
    {
        titulo: "Tip Calculator",
        descripcion: "Proyecto de calculadora de propinas destinado a gastronomía",
        img: "/img/program/tip-calculator.png",
        link: "https://calculadora-propinas-swart.vercel.app",
        tags: ["JS", "HTML", "CSS"]
    },
    {
        titulo: "Aprender JS (en proceso)",
        descripcion: "Pagina de estudio y repaso para reforzar conocimientos de Javascript, contenido universitario y de cursos CODERHOUSE",
        img: "/img/program/aprender-js.png",
        link: "https://abrilbarrientos.github.io/aprenderJavaScript/",
        tags: ["HTML", "CSS"]
    },
    {
        titulo: "CSS Smooth Animation Generator",
        descripcion: "Generador de animaciones suaves y dinámicas para elementos CSS",
        img: "/img/program/css-anim-generator.png",
        link: "https://css-smoth-animations.vercel.app",
        tags: ["JS", "HTML", "CSS"]
    },
    {
        titulo: "Benefit ecommerce ft. Alvarez",
        descripcion: "Proyecto de tienda online para productos de maquillaje 'Benefit'",
        img: "/img/program/benefit.png",
        link: "https://benefit-ecommerce.vercel.app",
        tags: ["JS", "HTML", "CSS"]
    },
    {
        titulo: "Log In / Sign Up | UX/UI test",
        descripcion: "Maquetado de vista para inicio de sesión y registro de cuenta para proyecto de página de citas.",
        img: "/img/program/login-signup.png",
        link: "https://log-in-test-sigma.vercel.app",
        tags: ["JS", "HTML", "CSS"]
    },
    {
        titulo: "'Ahorralo' Prototipo app mobile - UX/UI",
        descripcion: "Diseño y análisis de la experiencia de usuario para una aplicación que escanea códigos de barras de productos de supermercado, identifica la opción más económica y permite solicitar el envío a domicilio de los productos encontrados.",
        img: "/video/proto-ahorralo.mp4",
        link: "https://www.figma.com/proto/rgSXWIhqYPCUOhtg0KM8lu/Experiencia_de_usuario-Parcial2-urcullo-alvarez-barrientos-giacomini-dwm2ap?page-id=0%3A1&node-id=292-2235&starting-point-node-id=376%3A2887&t=4ymjfGwXHHzS2q2j-1",
        tags: ["Figma"]
    }
];

const programContainer = document.querySelector("#project-program .section-content");

proyectosProgramacion.forEach(proy => {
    const tagsHtml = `<ul class="project-tags">${proy.tags.map(tag => `<li class="${tag.toLowerCase()}-tag">${tag}</li>`).join("")}</ul>`;

    // Verifica si es un video por la extensión
    const isVideo = proy.img.endsWith(".mp4");

    const mediaElement = isVideo
        ? `<video src="${proy.img}" autoplay muted loop playsinline class="project-video"></video>`
        : `<img src="${proy.img}" alt="Project image">`;

    programContainer.innerHTML += `
        <div class="proj-program-card">
            <div class="card-img">
                ${mediaElement}
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

