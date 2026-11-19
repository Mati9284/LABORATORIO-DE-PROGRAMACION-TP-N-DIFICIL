const contenedor_cards = document.querySelector("#contenedor-cards");

const datos = [
    {
        titulo: `Cejas Molina Rebecca 5to 5ta`,
        descripcion: `
        Feliz cumple Caro! 🎉
        Quería aprovechar este día tan especial para decirte lo muchísimo que te quiero y darte las gracias por ser mi profe. La verdad es que me encariñé muy rápido con vos 🥺🥺
        Sos de esas personas que dejan huella, no solo por lo profesional sino por cómo sos como persona. Siempre estás ahí para ayudar a todos en todo, ya sea con algo de programación o con lo que sea que nos pase a nivel personal
        Gracias por bancarnos y guiarnos en cada expotec, en las olimpiadas y en los hackatones; sin tu apoyo no hubiéramos llegado tan lejos 🙏
        Te mereces todo lo bueno que te pasa en la vida y ojalá de verdad pudiéramos ayudarte nosotros a vos el doble de lo que vos nos ayudás a nosotros 
        Es una pena enorme que este sea nuestro último año teniéndote como profe, pero que te quede claro que no te vas a librar de mí tan fácilmente!! 😉
        Que pases un día hermoso! Te quiero un montón!! 🤍🤍`,
        imagen: `Rebecca.png`,
    },
    {
        titulo: `Benja`,
        descripcion: ``,
        imagen: `Benja.jpeg`,
        vuelta: true,
    },
    {
        titulo: `Gonzalez Mara 4°7`,
        descripcion: `
        Hola, profe. Soy Benja de 4°7. Le quiero decir feliz cumpleaños. Es una gran profe y gran persona. En serio la quiero un montón; sos la mejor profe que tuve en el transcurso de la secu, en sí. En serio, gracias por todo, profe. Gracias a usted me uní a Informática; sos de mis profes favoritas. Pero bueno, ¡feliz cumple, profe! Pásala genial hoy, en serio. 💗💗💗🫰😭😭💗💗💗💗🩷🩷🩷🩷🍊🩷🫰🫰🩷💗💗💗💗🩷🫰🐸🐸💚💚💚💚☘️☘️☘️`,
        imagen: `Mara.jpeg`,
    },
    {
        titulo: `Matías Luppini 5°5`,
        descripcion: `Caro sos invencible, audaz, 
        vigorosa, encantadora, abrumadora,
        espléndida, apasionada, bella y 
        poderosa (hollow knight 2008)
        Muy felíz cumpleaños que la pases muy lindo :D
        Soy tu esclavo. Sos una dios Caro para todos y una segunda mami
        Gracias por ayudarnos a todos sin pedirlo :D
        `,
        imagen: `Luppini.png`,
        vuelta: true,
    },
];

let datos_html = "";

datos.forEach(datos_foreach => {
    if (datos_foreach["imagen"] === "") {
        datos_html += `
        <article class="contenedor space-evenly align-center cards">
            <div>
                <h3>${datos_foreach["titulo"]}</h3>
                <p>${datos_foreach["descripcion"]}</p>
            </div>
        </article>
    `;
    } else if (datos_foreach["titulo"] === "" || datos_foreach["descripcion"] === "") {
        datos_html += `
        <article class="contenedor space-evenly align-center cards">
            <img src="assets/img/${datos_foreach["imagen"]}" alt="${datos_foreach["titulo"]}">
        </article>
    `;
    }
    else if (datos_foreach["vuelta"]) {
        datos_html += `
        <article class="contenedor space-evenly align-center cards">
            <img src="assets/img/${datos_foreach["imagen"]}" alt="${datos_foreach["titulo"]}">
            <div>
                <h3>${datos_foreach["titulo"]}</h3>
                <p>${datos_foreach["descripcion"]}</p>
            </div>
        </article>
    `;
    } else {
        datos_html += `
        <article class="contenedor space-evenly align-center cards">
            <div>
                <h3>${datos_foreach["titulo"]}</h3>
                <p>${datos_foreach["descripcion"]}</p>
            </div>
            <img src="assets/img/${datos_foreach["imagen"]}" alt="${datos_foreach["titulo"]}">
        </article>
    `;
    }
});

contenedor_cards.innerHTML = datos_html;