//1
count = 1;
document.getElementById("caixa").addEventListener("click", function () {
    console.log(`o botao foi clicado ${count} vezes`);
    count++;
});

//2
document.getElementById("txt").addEventListener("mouseup", function () {
    document.getElementById("txt").innerText = "Outro texto";
});

//3
document.getElementById("alert").addEventListener("click", function () {
    alert("Alerta");
});

//4
document.getElementById("caixa2").addEventListener("dblclick", function () {
    document.getElementById("caixa2").style.backgroundColor = "blue";
});

//5
const area = document.getElementById("area");
const mouse = document.getElementById("mouse");

area.addEventListener("mousemove", function (event) {
    const rect = area.getBoundingClientRect(); // Obtém as coordenadas do retângulo
    const x = event.clientX - rect.left; // Coordenada X relativa à área
    const y = event.clientY - rect.top; // Coordenada Y relativa à área

    mouse.textContent = `X: ${x.toFixed(0)}, Y: ${y.toFixed(0)}`;
});

//6
document.getElementById("caixa3").addEventListener("mousemove", function () {
    document.getElementById("caixa3").style.backgroundColor = "blue";
});

//7
const caixa = document.getElementById('caixa4');
    let isDragging = false, offsetX, offsetY;

    caixa.addEventListener('mousedown', (event) => {
        isDragging = true;
        offsetX = event.clientX - caixa.offsetLeft;
        offsetY = event.clientY - caixa.offsetTop;
    });

    document.addEventListener('mousemove', (event) => {
        if (isDragging) {
            caixa.style.left = `${event.clientX - offsetX}px`;
            caixa.style.top = `${event.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });