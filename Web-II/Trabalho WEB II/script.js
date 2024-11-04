var searchButton = document.getElementById("procura");
var searchBar = document.getElementById("textoprocura");

searchButton.addEventListener("click", function () {
    if (searchBar.style.display === "none" || searchBar.style.display === "") {
        searchBar.style.display = "inline";

        searchBar.focus();
    } else {
        searchBar.style.display = "none";
    }
});

var cartButton = document.getElementById("carrinho");
var cart = document.getElementById("shop");
var limpar = document.getElementById("limpar");

cartButton.addEventListener("click", function () {
    if (shop.style.right == "100vw") {
        shop.style.right = "5px";
    } else {
        shop.style.right = "100vw";
    }
});
limpar.addEventListener("click", function () {
    var ultimoItem = l.lastChild;
    if (ultimoItem) {
        l.removeChild(ultimoItem);
    }
});

var l = document.getElementById("lista");
var item1 = document.getElementById("item-1");
var item2 = document.getElementById("item-2");
var item3 = document.getElementById("item-3");
var item4 = document.getElementById("item-4");
var item5 = document.getElementById("item-5");
var item6 = document.getElementById("item-6");
var total = 0;

item1.addEventListener("click", function () {
    var novoItem = document.createElement("li");
    novoItem.innerText = "Café Coado --- R$15,99";
    total = total + 15,99;
    l.appendChild(novoItem);
    inputItem.value = "";
});
item2.addEventListener("click", function () {
    var novoItem = document.createElement("li");
    novoItem.innerText = "Café Extraordinário --- R$15,99";
    total = total + 15,99;
    l.appendChild(novoItem);
    inputItem.value = "";
});
item3.addEventListener("click", function () {
    var novoItem = document.createElement("li");
    novoItem.innerText = "Café Gourmet --- R$15,99";
    total = total + 15,99;
    l.appendChild(novoItem);
    inputItem.value = "";
});
item4.addEventListener("click", function () {
    var novoItem = document.createElement("li");
    novoItem.innerText = "Café Especial --- R$15,99";
    total = total + 15,99;
    l.appendChild(novoItem);
    inputItem.value = "";
});
item5.addEventListener("click", function () {
    var novoItem = document.createElement("li");
    novoItem.innerText = "Café Tradicional --- R$15,99";
    total = total + 15,99;
    l.appendChild(novoItem);
    inputItem.value = "";
});
item6.addEventListener("click", function () {
    var novoItem = document.createElement("li");
    novoItem.innerText = "Café Premium --- R$15,99";
    total = total + 15,99;
    l.appendChild(novoItem);
    inputItem.value = "";
});
