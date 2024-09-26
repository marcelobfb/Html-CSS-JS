var nome = document.querySelector("#btn");
function msg() {
    a = document.querySelector("#n1").value;
    resp1.innerText = `Boas Vindas ${a}!`;
}
nome.addEventListener("click", msg);

var tudo = document.querySelector("#btn2");
function contas() {
    a = Number(document.querySelector("#n2").value);
    b = Number(document.querySelector("#n3").value);
    soma = a + b;
    multiplicar=a*b
    dividir=a/b
    menos=a-b
    resp2.innerHTML = `A soma dos valores = ${soma}<br>A multiplicação é ${multiplicar}<br>A divisão é ${dividir}<br>A subtração é ${menos}`;
}
tudo.addEventListener("click", contas);

document.querySelector('#btn3').addEventListener('click',function(){
    a = Number(document.querySelector("#nota1").value);
    b = Number(document.querySelector("#nota2").value);
    c = Number(document.querySelector("#nota3").value);
    media = (a + b+c)/3;
    resp3.innerHTML = `A media é ${media}`;
})

var menoss = document.querySelector("#btn4");
function sub() {
    x = Number(document.querySelector("#var1").value);
    y = Number(document.querySelector("#var2").value);
    menosss=x-y
    resp4.innerHTML = `A subtração é ${menosss}`;
}
menoss.addEventListener("click", sub);

var tabuada = document.querySelector("#btn5");
function tabuadin() {
    x = Number(document.querySelector("#var3").value);
    for(var i=0;i<10;i++){
        resp5.innerHTML += `${x}x${i+1}=${x*(i+1)}<br>`
    }

}
tabuada.addEventListener("click", tabuadin);