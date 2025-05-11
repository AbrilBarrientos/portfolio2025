const proyectosProgramacion = [
    {
        titulo: "Federación Metropolitana de Voleibol",
        descripcion: "Página de noticias, torneo y reglamentos para la liga metropolitana de voleibol. Se pensaba complementar con PHP, pero por desacuerdos no se terminó el desarrollo",
        img: "../img/program/fmv.PNG",
        link: "https://abrilbarrientos.github.io/fmV/",
        tags: ["JS", "HTML", "CSS"]
    },
    {
        titulo: "Buscador de series y detalles",
        descripcion: "Proyecto universitario ft. Alvarez-Giacomini para buscar titulos y detalles de series de tv. Desarrollado con API 'TVMAZE'",
        img: "../img/program/buscador-shows.PNG",
        link: "https://p1-awp-alvarez-barrientos-giacomini.netlify.app",
        tags: ["JS", "HTML", "CSS"]
    },
    {
        titulo: "Dashboard tareas",
        descripcion: "Dasboard para generar cards de tareas con etiquetas y fechas personalizadas, asignar prioridades y completar o eliminar del espacio.",
        img: "../img/program/tareas-dashboard.PNG",
        link: "https://dashboard-tareas.vercel.app",
        tags: ["JS", "HTML", "CSS"]
    },
    {
        titulo: "Tip Calculator",
        descripcion: "Proyecto de calculadora de propinas destinado a gastronomía",
        img: "../img/program/tip-calculator.PNG",
        link: "https://calculadora-propinas-swart.vercel.app",
        tags: ["JS", "HTML", "CSS"]
    },
    {
        titulo: "Aprender JS (en proceso)",
        descripcion: "Pagina de estudio y repaso para reforzar conocimientos de Javascript, contenido universitario y de cursos CODERHOUSE",
        img: "../img/program/aprender-js.PNG",
        link: "https://abrilbarrientos.github.io/aprenderJavaScript/",
        tags: ["HTML", "CSS"]
    },
    {
        titulo: "CSS Smooth Animation Generator",
        descripcion: "Generador de animaciones suaves y dinámicas para elementos CSS",
        img: "../img/program/css-anim-generator.PNG",
        link: "https://css-smoth-animations.vercel.app",
        tags: ["JS", "HTML", "CSS"]
    },
    {
        titulo: "Benefit ecommerce ft. Alvarez",
        descripcion: "Proyecto de tienda online para productos de maquillaje 'Benefit'",
        img: "../img/program/benefit.PNG",
        link: "https://benefit-ecommerce.vercel.app",
        tags: ["JS", "HTML", "CSS"]
    },
    {
        titulo: "Log In / Sign Up | UX/UI test",
        descripcion: "Maquetado de vista para inicio de sesión y registro de cuenta para proyecto de página de citas.",
        img: "../img/program/login-signup.PNG",
        link: "https://log-in-test-sigma.vercel.app",
        tags: ["JS", "HTML", "CSS"]
    }
];

const programContainer = document.querySelector("#project-program .section-content");

proyectosProgramacion.forEach(proy => {
    const tagsHtml = `<ul class="project-tags">${proy.tags.map(tag => `<li class="${tag.toLowerCase()}-tag">${tag}</li>`).join("")}</ul>`;

    programContainer.innerHTML += `
        <div class="proj-program-card">
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
