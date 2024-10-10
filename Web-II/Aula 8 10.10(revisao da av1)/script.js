// 1
// let rsp1=70/(1.70*1.70)
// document.write(`<br>1) O IMC é 70/(1.70*1.70)=${rsp1.toFixed(1)}`)

// 2
// let anos = prompt('Quantos anos você fumou: ');
// let cigarrosPorDia = prompt('Número de cigarros fumados por dia: ');
// let precoMaco = prompt('Preço do maço: ');
// let precoCigarro = precoMaco / 20;
// let gastosTotais = (cigarrosPorDia * precoCigarro * 30) * anos;

// document.write(`<br>Você gastou R$ ${gastosTotais.toFixed(2)}`);

// 3
// let amalia=prompt("Quantos anos Amalia tem: ")
// let joaquin=prompt("Quantos anos Joaquin tem:")
// if(amalia>joaquin){
//     document.write(`<br>3) Amalia com ${amalia} é mais velha que Joaquin com ${joaquin}`)
// }
// if(joaquin>amalia){
//     document.write(`<br>3) Joaquin com ${joaquin} é mais velha que Amalia com ${amalia}`)
// }
// if(amalia==joaquin){
//     document.write('Eles tem a mesma idade.')
// }

// 4
// function vivo(dano,saude){
//     if(dano>=saude){
//         return false
//     }
//     else{
//         return true
//     }
// }
// dano=prompt("Quanto dano vc tomou: ")
// saude=prompt("Quanto de vida vc tem: ")
// document.write(vivo(dano,saude))

// 5
sortear=[(Math.random()*60).toFixed(0),(Math.random()*60).toFixed(0),(Math.random()*60).toFixed(0),(Math.random()*60).toFixed(0),(Math.random()*60).toFixed(0),(Math.random()*60).toFixed(0)]
tenta=[]
for(let i=0;i<6;i++){
    tenta.push(prompt('digite um numero: '))
}
document.write(`<br>O computador sorteou: ${sortear}`)
document.write(`<br>Seus números foram: ${tenta}`)
document.write("<br>Números sorteados que você acertou:");
for (let i = 0; i < 6; i++) {
    if (sortear.includes(tenta[i])) {
        document.write(`<br>O número ${tenta[i]}`);
    }
}
