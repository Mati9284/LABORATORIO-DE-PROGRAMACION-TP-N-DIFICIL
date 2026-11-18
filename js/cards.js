const contenedor_cards = document.querySelector("#contenedor-cards");

const datos = [
    {
        titulo: "Matías Luppini 5°5",
        descripcion: `Caro sos invencible, audaz, 
        vigorosa, encantadora, abrumadora,
        espléndida, apasionada, bella y 
        poderosa (hollow knight 2008)
        Muy felíz cumpleaños que la pases muy lindo :D
        Soy tu esclavo
        `,
        imagen: "",
    },
    {
        titulo: "",
        descripcion: "",
        imagen: "",
    },
    {
        titulo: "",
        descripcion: "",
        imagen: "",
    },
];

let datos_html = "";

datos.forEach(datos_foreach => {
    if (datos_foreach["imagen"] === "") {
        datos_html += `
        <article>
            <h3>${datos_foreach["titulo"]}</h3>
            <p>${datos_foreach["descripcion"]}</p>
        </article>
    `;
    }
    else {
        datos_html += `
        <article>
            <h3>${datos_foreach["titulo"]}</h3>
            <p>${datos_foreach["descripcion"]}</p>
            <img src="${datos_foreach["imagen"]}" alt="${datos_foreach["titulo"]}">
        </article>
    `;
    }
});

contenedor_cards.innerHTML = datos_html;