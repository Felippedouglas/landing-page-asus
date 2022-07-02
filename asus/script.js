var itensCarrinho = document.getElementById("numero-itens-carrinho-span")

function escolherImgPrincipal(src) {
    switch (src) {
    case 1:
        document.getElementById("img-principal").setAttribute("src", "./imagens/produto/imagem1.png")
        break
    case 2:
        document.getElementById("img-principal").setAttribute("src", "./imagens/produto/imagem2.png")
        break
    case 3:
        document.getElementById("img-principal").setAttribute("src", "./imagens/produto/imagem3.png")
        break
    case 4:
        document.getElementById("img-principal").setAttribute("src", "./imagens/produto/imagem4.png")
        break
    case 5:
        document.getElementById("img-principal").setAttribute("src", "./imagens/produto/imagem5.png")
        break
    case 6:
        document.getElementById("img-principal").setAttribute("src", "./imagens/produto/imagem6.png")
        break
    case 7:
        document.getElementById("img-principal").setAttribute("src", "./imagens/produto/imagem7.png")
        break
    }
}

function memoriaRamBranca() {
    img = document.getElementById("img-memoria-ram")
    img.setAttribute("src", "./imagens/memoria-ram-preto.png")
}

function memoriaRamPreta() {
    img = document.getElementById("img-memoria-ram")
    img.setAttribute("src", "./imagens/memoria-ram-branco.png")
}

function comprar() {
    document.getElementById("bt-comprar-icone").setAttribute("class", "fa fa-circle-o-notch fa-spin")
    document.getElementById("bt-comprar").style.backgroundColor = "#04AA6D";
    document.getElementById("bt-comprar").style.color = "#fff";
    document.getElementById("bt-comprar").style.fontSize = "16px";
    setTimeout(function() {
    document.getElementById("bt-comprar-icone").setAttribute("class", "fas fa-shopping-basket")
    document.getElementById("bt-comprar").style.backgroundColor = "unset";
    document.getElementById("bt-comprar").style.color = "#000";
    document.getElementById("bt-comprar").style.border = ".4px solid #000";
    document.getElementById("bt-comprar").style.fontSize = "14px";
        },4000);
}

function comprarCarrinho() {
    document.getElementById("bt-comprar-icone-carrinho").setAttribute("class", "fa fa-circle-o-notch fa-spin")
    document.getElementById("bt-comprar-carrinho").style.backgroundColor = "#04AA6D";
    document.getElementById("bt-comprar-carrinho").style.color = "#fff";
    document.getElementById("bt-comprar-carrinho").style.fontSize = "16px";
    setTimeout(function() {
    document.getElementById("bt-comprar-icone-carrinho").setAttribute("class", "fas fa-shopping-basket")
    document.getElementById("bt-comprar-carrinho").style.backgroundColor = "unset";
    document.getElementById("bt-comprar-carrinho").style.color = "#000";
    document.getElementById("bt-comprar-carrinho").style.border = ".4px solid #000";
    document.getElementById("bt-comprar-carrinho").style.fontSize = "14px";
        },4000);
}

function addCarrinho() {
    var itensCarrinho = document.getElementById("numero-itens-carrinho-span")
    var quantidadeItensCarrinho = document.getElementById("quantidade-item-carrinho")
    document.getElementById("item-1-carrinho").style.display = "flex"
    document.getElementById("valor-subtotal-carrinho").innerText = "R$" + (44.099 * (parseInt(itensCarrinho.innerText) + 1)).toFixed(3) + "," + (10 * (parseInt(itensCarrinho.innerText) + 1));
    if (itensCarrinho.innerText < "9") {
        itensCarrinho.style.display = "flex";
        itensCarrinho.innerText = parseInt(document.getElementById("numero-itens-carrinho-span").innerText) + 1;
        quantidadeItensCarrinho.innerText = `${itensCarrinho.innerText}x`;
    }

    else {
        itensCarrinho.innerText = "9+"
        quantidadeItensCarrinho.innerText = "Q: " + 10
    }
    document.getElementById("bt-add-carrinho-icone").setAttribute("class", "fas fa-check")
    document.getElementById("bt-add-carrinho").style.backgroundColor = "#04AA6D";
    document.getElementById("bt-add-carrinho").style.color = "#fff";
    document.getElementById("bt-add-carrinho").style.fontSize = "16px";
    setTimeout(function() {
        document.getElementById("bt-add-carrinho-icone").setAttribute("class", "fas fa-shopping-cart")
        document.getElementById("bt-add-carrinho").style.backgroundColor = "unset";
        document.getElementById("bt-add-carrinho").style.color = "#000";
        document.getElementById("bt-add-carrinho").style.border = ".4px solid #000";
        document.getElementById("bt-add-carrinho").style.fontSize = "14px";
            },2000);
}

function clicarBtComprar() {
    document.getElementById("bt-add-carrinho").click();
    document.getElementById("checkbox-carrinho-label").click()
}

function abrirCarrinho() {
    document.body.style.overflow = "hidden";
    document.getElementById("background-itens-carrinho-div").style.display = "block"
}

function fecharCarrinho() {
    document.getElementById("checkbox-carrinho-label").click();
    document.body.style.overflow = "auto";
    document.getElementById("background-itens-carrinho-div").style.display = "none"
}

function backgroundItensCarrinho() {
    document.getElementById("checkbox-carrinho-label").click();
    document.body.style.overflow = "auto";
    document.getElementById("background-itens-carrinho-div").style.display = "none"
}

function removerItemCarrinho() {
    document.getElementById("item-1-carrinho").style.display = "none"
    document.getElementById("valor-subtotal-carrinho").innerText = 0;
    itensCarrinho.innerText = 0;
    document.getElementById("quantidade-item-carrinho").innerText = 0
    itensCarrinho.style.display = "none";
}