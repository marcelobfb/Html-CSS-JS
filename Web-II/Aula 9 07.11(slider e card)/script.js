var slides = ['./imgs/doc.png', './imgs/mate.png', './imgs/relampago.png', './imgs/sally.png'];
var tam = slides.length;
var sAtual = 0;
var tmpslider;

function trocaAutomatica() {
    sAtual++;
    if (sAtual >= tam) {
        sAtual = 0;
    }
    document.querySelector("#dvSlider").style.backgroundImage = `url('${slides[sAtual]}')`;
}

function iniciarSlider() {
    document.querySelector("#dvSlider").style.backgroundImage = `url('${slides[sAtual]}')`;
    tmpslider = setInterval(trocaAutomatica, 2000);
}

function parar() {
    clearInterval(tmpslider);
}

function troca(direcao) {
    sAtual += direcao;
    if (sAtual >= tam) {
        sAtual = 0;
    } else if (sAtual < 0) {
        sAtual = tam - 1;
    }
    document.querySelector("#dvSlider").style.backgroundImage = `url('${slides[sAtual]}')`;
}

function expandCard(card) {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
}

function shinkCard(card) {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = 'none';
}

function rotateCard(card) {
    card.style.transform = "rotate(20deg)";
}

function resetCard(card) {
    card.style.transform = "rotate(0deg)";
}

function showMoreInfo() {
    alert("Mais informação");
}
