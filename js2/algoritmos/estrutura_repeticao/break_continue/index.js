const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 // continue pula o numero 2 e 5
 // break sai do laço quando encontra o numero 7
for(let numero of numeros) {
    if(numero === 2 || numero === 5) {
        console.log('Pulei o número 2 e o 5')
        continue
    }
    console.log(numero)
    if(numero === 7) {
        console.log('7 encontrado, saindo...')
        break
    }
}