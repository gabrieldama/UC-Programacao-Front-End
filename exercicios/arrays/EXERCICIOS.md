# Exercícios

## Arrays

Faça os exercícios a seguir escrevendo código JavaScript a ser vinculado à sua página HTML com a tag `<script>`.

- Utilize a função `prompt()` para capturar dados do usuário
- Utilize as funções `prompt()` ou `confirm()` para capturar entradas do usuário
- Utilize as funções `alert()` ou `console.log()` para exibir saídas ao usuário
- Faça a verificação se o tipo de dado adequado foi inserido
- Utilize a conversão de tipos, implícita ou explícita, conforme necessidade, em cada exercício
- Os exercícios a seguir NÃO precisam necessariamente que dados sejam fornecidos pelo usuário
- As funções podem ser testadas e invocadas por vocês mesmos no código a fim de testar os seus resultados
- Você pode utilizar tanto DECLARAÇÃO DE FUNÇÃO quanto EXPRESSÃO DE FUNÇÃO

### Essenciais

1. **Fila de atendimento**: crie um array que armazene pessoas em uma fila de atendimento, inicialmente com 3 pessoas (nomes). Adicione mais 1 pessoa ao final da fila e exiba a fila utilizando for (usando um contador e propriedade `length`). Remova a pessoa do início da fila e exiba-a novamente no console.
2. **Validação números**: crie uma função que recebe um array e percorre-o (`for` ou `for...of`), verificando se os valores armazenados são números. Armazene os valores que são números em um novo array e retorne-o na função.
3. **Histórico de pedidos**: crie uma função que recebe um array de pedidos, e um código de pedido de 4 dígitos (exemplo: `0001`, `0002`, `0003`). Armazene o novo código do pedido ao final do array apenas se o array tiver menos de 10 elementos. Caso ele tenha 10 elementos, remova o pedido do início e então armazene-o.
	- Opcional: resolver este exercício utilizando _recursividade_
4. **Lista de compras**: crie uma função `gerarTextoCompras(itens)` que receba um array de strings contendo produtos de supermercado. A função deve retornar uma única string com todos os itens separados por vírgula e espaço. Exiba a lista no console.
5. **Lista de compras 2**: adicione um parâmetro `formato` à função `gerarTextoCompras(itens, formato)`, que espera receber `texto` ou `lista`. Caso seja passado `texto`, retorne os itens separados por vírgula e espaço. Caso seja passado `lista`, retorne os elementos prefixados com um marcador • e separados por uma quebra de linha. Exemplo:

	```txt
	• Arroz
	• Feijão
	• Macarrão
	```