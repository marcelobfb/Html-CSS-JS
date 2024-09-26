// https://realfavicongenerator.net/  - gera icone
function linha() {
    document.write(
        `<br>---------------------------------------------------------------------`
    );
}
document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("txt").innerText = "Bom dia!";
});
document.getElementById("f5").addEventListener("click", function () {
    location.reload();
});

var a1 = document.querySelector("#a");
a1.addEventListener("mouseover", function () {
    a1.style.backgroundColor = "black";
});
a1.addEventListener("mouseout", function () {
    a1.style.backgroundColor = "pink";
});
a1.addEventListener("click", function () {
    location.reload();
});
document.querySelector("#b").addEventListener("click", function () {
    this.style.backgroundColor = "red";
});
contador = 0;
document.querySelector("#btn1").addEventListener("click", function () {
    if (contador % 2 == 0) {
        document.querySelector("#img").src = "Tere.jpg";
    } else {
        document.querySelector("#img").src = "Monaco.jpg";
    }
    contador++;
});

document.querySelector("#btn2").addEventListener("click", function () {
    document.querySelector("#txt2").style.display = document.querySelector("#txt2").style.display == "none" ? "block" : "none";
});

document.querySelector("#btn3").addEventListener('click',function(){
    var novo=document.createElement('p')
    novo.textContent='Novo valor Inserido no container'
    document.querySelector('#container').appendChild(novo)
})