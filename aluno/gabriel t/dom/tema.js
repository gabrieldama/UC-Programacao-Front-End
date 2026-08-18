const trocarCorDeFundo = (cor) => {
    document.body.style.backgroundColor = cor;
};

const trocarFonteTitulos = (nomeDaFonte) => {
    const titulos = document.querySelectorAll('h1, h2');
    titulos.forEach((titulo) => {
        titulo.style.fontFamily = nomeDaFonte;
    });
};

const removerMeta = () => {
    const metas = document.querySelectorAll('.meta');
    metas.forEach((meta) => meta.remove());
};

const inserirEmoji = (emoji) => {
    const artigos = document.querySelectorAll('article');
    artigos.forEach((artigo) => {
        const primeiroParagrafo = artigo.querySelector('p');
        if (primeiroParagrafo) {
            primeiroParagrafo.prepend(`${emoji} `);
        }
    });
};

const inserirAvisoIA = () => {
    const main = document.querySelector('main');
    if (!main) return;

    const alertaDiv = document.createElement('div');
    alertaDiv.className = 'alert';
    alertaDiv.innerHTML = `
        <p>⚠️ Atenção: os textos abaixo são excertos gerados com IA apenas porque são exemplos de preenchimento para uma atividade de programação. Leia, escreva, estude: não terceirize sua humanidade para uma máquina espertinha de autocompletar.</p>
    `;

    main.prepend(alertaDiv);
};