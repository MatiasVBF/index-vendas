class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

class Carrinho {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    calcularTotal() {
        return this.produtos.reduce((total, produto) => total + produto.preco, 0);
    }

    aplicarDesconto(porcentagem) {
        const total = this.calcularTotal();
        return total - (total * (porcentagem / 100));
    }

    mostrarCarrinho() {
        console.log("Carrinho de Compras:");
        this.produtos.forEach(produto => {
            console.log(`${produto.nome}: R$${produto.preco.toFixed(2)}`);
        });
        console.log(`Total: R$${this.calcularTotal().toFixed(2)}`);
    }
}

// Exemplo de uso:
const produto1 = new Produto("Camiseta", 50);
const produto2 = new Produto("Tênis", 120);

const carrinho = new Carrinho();
carrinho.adicionarProduto(produto1);
carrinho.adicionarProduto(produto2);

carrinho.mostrarCarrinho();
console.log(`Total com desconto de 10%: R$${carrinho.aplicarDesconto(10).toFixed(2)}`);
