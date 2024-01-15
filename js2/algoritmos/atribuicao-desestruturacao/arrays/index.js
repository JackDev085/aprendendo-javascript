// Definindo a variaveis a,b,c como strings

let a = "A" 
let b = "B"
let c = "C"

//desestruturando o valor das variaveis a,b,c de string para numbers

const numeros= [1,2,3];

[a,b,c] = numeros;
console.log(a,b,c)


const numeros2 = [1,2,3,4,5,6]
// Esse trecho de código abaixo irá alocar os dois primeiros números do array numeros 2
// E no final o "resto" dos números
const [primeiro,segundo,  ...resto] = numeros2
console.log(primeiro,segundo) // [1,2] 
console.log(resto) //[3,4,5,6]


// listas dentro de listas
const lista = [[1,2,3], [4,5,6], [7,8,9]];

console.log(lista[1][2])