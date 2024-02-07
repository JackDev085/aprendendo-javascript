// Encontre os numeros pares com filter
// dobre os valores 
// some todos os valores
const numeros = [ 1,5,4,3,6,123,3,2,1]

numerosPares = numeros.filter(valor => valor%2==1).map(valor => valor*2).reduce((ac,valor)=> ac+valor)
console.log(numerosPares)