/* criei a fila.
* adicionei um cliente na fila com o push.
* fiz exibir cliente por cliente com o for.
* removi o primeiro cliente da fila com o shift.
* exibi a fila atualizada.
*/

/* EXERCÍCIO 1 - Fila de clientes

const fila = [
    'Gabriel',
    'João',
    'Maria'
]

fila.push('José');
for (let i = 0; i < fila.length; i++) {
    console.log(fila[i]);
}
fila.shift();
console.log(fila);

*/

// EXERCÍCIO 2 - Validação de números

// const valores = [1, 'dois', 3, 'quatro', 5];
// function filtrarNumeros(arr) {
//   const numeros = [];
//   for (const elemento of arr) {
//     if (typeof elemento === 'number') {
//       numeros.push(elemento);
//     }
//   }
//   return numeros;
// }

// console.log(filtrarNumeros(valores));


// EXERCÍCIO 3 - Histórico de pedidos

// function adicionarPedido(historico, novoCodigo) {
//   if (historico.length >= 10) {
//     historico.shift(); 
//   }
//   historico.push(novoCodigo);
//   return historico;
// }
// const pedidos = [
//   "0001", "0002", "0003", "0004", "0005",
//   "0006", "0007", "0008", "0009", "0010"
// ];
// console.log(adicionarPedido(pedidos, "0011"));

// EXERCÍCIO 4 e 5 - Lista de compras

// const listaCompras = ['arroz', 'feijão', 'macarrão'];
// function gerarTextoCompras(itens, formato = 'texto') {
//     if (formato === 'texto') {
//     return itens.join(', ');
// } else if (formato === 'lista') {
//     return itens.map(item => `• ${item}`).join('\n');
// }
// }
// console.log(gerarTextoCompras(listaCompras, 'lista'));

// EXERCÍCIO 6 - Pódio

// const classificacao = ["Ana", "Beto", "Caio", "Duda", "Eva", "Fred"];

// const podio = classificacao.slice(0, 3);

// console.log("Pódio da corrida:", podio);

// EXERCÍCIO 7 - Usuários Banidos

const usuariosBanidos = ['WiseScorpion', 'Plabbernom', 'xxx33Fubbeflop'];

function banidos(arrayBanidos, apelido) {
    return arrayBanidos.includes(apelido);
    } 
console.log(banidos(usuariosBanidos, 'FulpGamesV'));