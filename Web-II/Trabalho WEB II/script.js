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


var cartButton=document.getElementById("carrinho")
var cart=document.getElementById("shop")
var fechar=document.getElementById("fechar")

cartButton.addEventListener("click",function(){
    if(shop.style.right=="100vw"){
        shop.style.right="5px"
    }
    else{
        shop.style.right="100vw"
    }
})
fechar.addEventListener("click",function(){
    shop.style.right="100vw"
})