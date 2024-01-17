let controle = 0
function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}


let rand = random(1, 10)
console.log(rand)

// estrutura do while, usado quando queremos que o programa execute pelo menos uma vez 
// estrutura while, usado quando não sabemos quando vai terminar o programa
while (controle <= 10) {
    console.log(controle)
    controle++
}


while (rand !== 10) {
    rand = random(5, 11)
    console.log(rand)
}

//como posso ver esse codigo no console do navegador

do{
    rand = random(5, 11)
    console.log(rand)
}while(rand !== 10);
   