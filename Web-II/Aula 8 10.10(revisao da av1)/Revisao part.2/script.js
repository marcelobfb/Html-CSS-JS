// 1) a
//*splice()- 1º valor: posição, 2º valor: quantidade de elementos excluidos, 3º valor: novos elementos

// 2)a

// 3)c

// 4).push(8)

// 5)c

// 6).unshift()

// 7)b

// 8)d

// 9)

distancia=prompt("Qual a distancia em km: ")
switch (true){
    case (distancia<=100):
        custo=distancia*10
        document.write(`<br>O custo de envio é R$${custo.toFixed(2)}`)
        break
    case (distancia>100&&distancia<=300):
        custo=distancia*8
        document.write(`<br>O custo de envio é R$${custo.toFixed(2)}`)

        break
    case (distancia>300):
        custo=distancia*6
        document.write(`<br>O custo de envio é R$${custo.toFixed(2)}`)
        break
}

