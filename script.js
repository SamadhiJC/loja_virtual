let carrinho = [];

function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    atualizarCarrinho();
    alert(`${produto} foi adicionado ao carrinho!`);
}

function atualizarCarrinho() {
    const contagem = document.getElementById('carrinho-contagem');
    contagem.innerText = carrinho.length;
}
