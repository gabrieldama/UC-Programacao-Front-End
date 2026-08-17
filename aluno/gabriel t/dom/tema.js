const fundoPagina = document.querySelector("body");
fundoPagina.style.backgroundColor = 'red';

const titulos = document.querySelectorAll('h2');

titulos.forEach(h2 => {
    h2.style.fontFamily = "Arial, sans-serif"; 
    h2.style.color = "white";
});

const metas = document.querySelector(".meta");

metas.remove();