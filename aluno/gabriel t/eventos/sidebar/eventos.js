const toggleButton = document.querySelector('.toggle');
const sidebar = document.querySelector('.sidebar');

// Adiciona o evento de clique ao botão
toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});
