// *evento do teclado continuação
// keydown - ocorre qunado uma tecla é pressionada
// keyup- ocorre quando uma tecla é liberada
// keypress- ocorre quando uma tecla que produz caractere é pressionada

//* exemplo 1 - captura das teclas digitadas
document.getElementById("input").addEventListener("keydown", function (event) {
    console.log("Tecla pressionada: ", event.key);
});
// *recarega pagina
document.getElementById("f5").addEventListener("click", function () {
    location.reload();
});
//* arrow function
document.getElementById("input1").addEventListener("keydown", (event) => {
    console.log("tecla pressonada: ", event.key);
});
// * apaga
document.getElementById("clear").addEventListener("click", function () {
    document.getElementById("input").value = "";
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
});
// *exemplo 2 - previnir a acao padrao do botao
document.querySelector("#input2").addEventListener("keydown", (event) => {
    if (event.key == "s") {
        event.preventDefault();
        console.log("tecla s foi pressionada,mas acao foi previnida");
    }
});
// *exemplo 3 - verificando se as teclas sao numericas
document.querySelector("#input3").addEventListener("keydown", (event) => {
    if (isNaN(event.key) && event.key != "Backspace") {
        event.preventDefault();
    }
});
// *exemplo 4 - controle de volume
var volume = 50;
document.addEventListener("keydown", function (event) {
    if (event.key == "ArrowUp") {
        volume = Math.min(100, volume + 5);
    } else if (event.key == "ArrowDown") {
        volume = Math.max(0, volume - 5);
    }
    document.querySelector("#volume").textContent =
        "Volume seta para cima ou para baixo: " + volume;
});
// *exemplo 5- alterar a cor de fundo da tela
function cor(event) {
    var kc = event.which; //obtem o codigo da tecla pressionada
    switch (kc) {
        case 82:
            document.body.style.backgroundColor = "red";
            break;
        case 71:
            document.body.style.backgroundColor = "green";
            break;
        case 66:
            document.body.style.backgroundColor = "blue";
            break;
    }
}
document.addEventListener("keydown", cor);
// *exemplo 6 - alterar a cor do elemento com a barra de espaço
var elemento=document.getElementById('elemento')
function h(event){
    if(event.key==' '){
        elemento.style.backgroundColor='black'
    }
}
function hh(event){
    if(event.key==' '){
        elemento.style.backgroundColor='lightblue'
    }
}
document.addEventListener('keydown',h)
document.addEventListener('keyup',hh)