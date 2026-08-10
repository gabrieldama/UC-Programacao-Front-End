const carrinho = {
	cliente: "Alice",
	itens: [
	{ nome: "Smartphone", preco: 2200, quantidade: 1 },
	],
	cupons: ["MENOS10", "PROMO10", "10PORCENTO"],

    adicionarProduto: function (produto) { 
        [nome, preco, quantidade] = produto;
        this.itens.push({ nome, preco, quantidade });
        // se item não esteja no carrinho, adiciona o item, caso contrário, atualiza a quantidade
        if (!this.itens.some(item => item.nome === nome)) {
            this.itens.push({ nome, preco, quantidade });
        } else {
            this.itens.find(item => item.nome === nome).quantidade += quantidade;
        }
    },
    calcularTotal: function () {
        let total = 0;
        this.itens.forEach(item => {
            total += item.preco * item.quantidade;
        });
        return total;
    },

    aplicarDesconto: function (cupom) {
        if (this.cupons.includes(cupom)) {
            let desconto = 0;
            if (cupom === "MENOS10") {
                desconto = 10;
            } else if (cupom === "PROMO10") {
                desconto = 0.1 * this.calcularTotal();
            }
            return this.calcularTotal() - desconto;}
    },

    exibirCupom: function () {
        console.log("Cupons disponíveis:");
        this.cupons.forEach(cupom => {
            console.log(cupom);
        });
    }
}

carrinho.adicionarProduto(["Ps5", 3500, 1]);
console.log(carrinho.itens);

console.log(carrinho.calcularTotal());

console.log(carrinho.aplicarDesconto("PROMO10"));

