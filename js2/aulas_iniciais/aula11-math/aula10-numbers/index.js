let num1 =10.2938412093892//number
let num2 = 1//number

// convertendo um número para uma String
// num1 = num1.toString() //num1 agora é uma string
// console.log(typeof num1)

// arrendondando/formatando um número

console.log(num1.toFixed(2)) //o número parametrizado irá virar a quandotidade de casas décimais


// checando se o valor de uma variavel é inteiro 
console.log(Number.isInteger(num1)) //retorna verdadeiro ou falso

// verificando se uma expressao retorna um Number

let temp = num1 * num2
console.log(Number.isNaN(temp))