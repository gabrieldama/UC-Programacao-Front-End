function configurarMenuOpcoes() {
  var botoesOpcoes = document.querySelectorAll('.options-button');
 
  for (var i = 0; i < botoesOpcoes.length; i++) {
    botoesOpcoes[i].addEventListener('click', function() {
      var menusPais = this.parentElement;
      var menu = menusPais.querySelector('.options-menu');
     
      // Se o menu está escondido, mostra. Se está visível, esconde
      if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
      } else {
        menu.style.display = 'none';
      }
    });
  }
}
 
// 2. CONTAGEM DE COMENTÁRIOS =====
function atualizarContagemComentarios(publicacao) {
  var comentarios = publicacao.querySelectorAll('.comments-section > .comment');
  var totalComentarios = comentarios.length;
 
  var elementoContagem = publicacao.querySelector('.comments-count');
  if (elementoContagem) {
    if (totalComentarios === 1) {
      elementoContagem.textContent = '1 comentário';
    } else {
      elementoContagem.textContent = totalComentarios + ' comentários';
    }
  }
}
 
// ===== 3. COLAPSAR/EXPANDIR COMENTÁRIOS =====
function configurarExpandirComentarios() {
  var publicacoes = document.querySelectorAll('.post');
 
  for (var i = 0; i < publicacoes.length; i++) {
    var publicacao = publicacoes[i];
    var secaoComentarios = publicacao.querySelector('.comments-section');
    var botaoComentario = publicacao.querySelector('.comment-toggle-button');
    var elementoContagem = publicacao.querySelector('.comments-count');
   
    // Começa com os comentários escondidos
    secaoComentarios.style.display = 'none';
   
    // Clique no botão "Comentar" para abrir/fechar
    (function(secao, contagem) {
      botaoComentario.addEventListener('click', function() {
        if (secao.style.display === 'none') {
          secao.style.display = 'block';
          var entrada = secao.querySelector('input');
          if (entrada) {
            entrada.focus();
          }
        } else {
          secao.style.display = 'none';
        }
      });
     
      // Clique no número de comentários para abrir
      if (contagem) {
        contagem.style.cursor = 'pointer';
        contagem.addEventListener('click', function() {
          secao.style.display = 'block';
          var entrada = secao.querySelector('input');
          if (entrada) {
            entrada.focus();
          }
        });
      }
    })(secaoComentarios, elementoContagem);
  }
}
 
// ===== 4. ADICIONAR NOVO COMENTÁRIO =====
function configurarAdicionarComentario() {
  var formularios = document.querySelectorAll('.new-comment-form');
 
  for (var i = 0; i < formularios.length; i++) {
    (function(formulario) {
      formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();
       
        var entrada = formulario.querySelector('input');
        var textoComentario = entrada.value;
       
        // Remove espaços em branco no início e fim
        textoComentario = textoComentario.trim();
       
        if (textoComentario === '') {
          alert('Por favor, escreva um comentário!');
          return;
        }
       
        var secaoComentarios = formulario.parentElement;
       
        // Cria o HTML do novo comentário
        var novoComentarioHTML = '<div class="comment">' +
          '<img class="avatar" src="https://api.dicebear.com/9.x/avataaars/svg?seed=Usuario" alt="Avatar do usuário">' +
          '<div class="comment-body">' +
          '<span class="comment-author">Você</span>' +
          '<p class="comment-text">' + textoComentario + '</p>' +
          '</div>' +
          '</div>';
       
        // Insere o novo comentário antes do formulário
        formulario.insertAdjacentHTML('beforebegin', novoComentarioHTML);
       
        // Limpa a entrada
        entrada.value = '';
        entrada.focus();
       
        // Atualiza a contagem de comentários
        var publicacao = formulario.closest('.post');
        atualizarContagemComentarios(publicacao);
      });
    })(formularios[i]);
  }
}

// ===== INICIALIZAR QUANDO A PÁGINA CARREGAR =====
document.addEventListener('DOMContentLoaded', function() {
  // Atualiza a contagem de comentários no início
  var publicacoes = document.querySelectorAll('.post');
  for (var i = 0; i < publicacoes.length; i++) {
    atualizarContagemComentarios(publicacoes[i]);
  }

  // Configura todas as funcionalidades
  configurarMenuOpcoes();
  configurarExpandirComentarios();
  configurarAdicionarComentario();
});

 