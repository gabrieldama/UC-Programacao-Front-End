let btnCachorro = document.getElementById('btn-cao');
let btnGato     = document.getElementById('btn-gato');
let imagemPet   = document.getElementById('imagem-pet');
let fundoPag    = document.getElementById('btn-background')
let cores = ['#06F874', '#8706f8', '#f806a7', '#f80606', '#f8e806']
let body = document.querySelector('body');
let contador = 0;

btnGato.addEventListener("click", function() {
    let fotoGato = "https://images.pexels.com/photos/31440960/pexels-photo-31440960.jpeg"
    imagemPet.src = fotoGato;
});

btnCachorro.addEventListener("click", function() {
    let fotoCachorro = "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400"
    imagemPet.src = fotoCachorro
});

fundoPag.addEventListener("click", function() {
    body.style.backgroundColor = cores[contador];
    contador++;
    
    if (contador >= cores.length) {
    contador = 0;
  }
});