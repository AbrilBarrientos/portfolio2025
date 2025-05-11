const proyectosDiseno = [
    {
        titulo: "Titulo proyecto",
        descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam neque sed vero incidunt fugit, ratione voluptas ipsa velit totam. Ratione nihil ab laborum fuga nam fugit quas quo sequi voluptate.",
        img: "https://dummyimage.com/526x394/cccccc/000000.png&text=526x394",
        link: "http://",
        tags: []
    },
    {
        titulo: "Titulo proyecto",
        descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam neque sed vero incidunt fugit, ratione voluptas ipsa velit totam. Ratione nihil ab laborum fuga nam fugit quas quo sequi voluptate.",
        img: "https://dummyimage.com/526x394/cccccc/000000.png&text=526x394",
        link: "http://",
        tags: []
    },
    {
        titulo: "Titulo proyecto",
        descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam neque sed vero incidunt fugit, ratione voluptas ipsa velit totam. Ratione nihil ab laborum fuga nam fugit quas quo sequi voluptate.",
        img: "https://dummyimage.com/526x394/cccccc/000000.png&text=526x394",
        link: "http://",
        tags: []
    },
    {
        titulo: "Titulo proyecto",
        descripcion: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam neque sed vero incidunt fugit, ratione voluptas ipsa velit totam. Ratione nihil ab laborum fuga nam fugit quas quo sequi voluptate.",
        img: "https://dummyimage.com/526x394/cccccc/000000.png&text=526x394",
        link: "http://",
        tags: ["PSD", "Figma", "AI"]
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
