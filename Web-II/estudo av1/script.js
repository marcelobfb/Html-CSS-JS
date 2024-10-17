function vida (dano,saude){
    if(dano>=saude){
        return true
    }
    else{
        return false
    }
}
saude=prompt(`Quanto de vida vc tem: `)
dano=prompt(`quanto de dano vc tomou: `)
alert(`${vida(dano,saude)}`)