// Utilizando a class math para realizar contas matemáticas

let num1 = 9.552343
let num2 = 1.452343

// Arrendondamento para baixo - Math.floor
console.log(Math.floor(num1)) //9
console.log(Math.floor(num2)) //1

// Arrendondamento para cima - Math.ceil
console.log(Math.ceil(num1)) //10
console.log(Math.ceil(num2)) //2

//arredondamento para o polo mais próximo
console.log(Math.round(num2)) //1

//maior número da sequência

console.log(Math.max(1,2,4,2,2,41,213,4,123,124,12,43,))//213

//menor número da sequência

console.log(Math.min(1,2,4,2,2,41,213,4,123,124,12,43,))//s1


//números aleatórios entre 10 e5

console.log(Math.round(Math.random()*(100-20)+20))