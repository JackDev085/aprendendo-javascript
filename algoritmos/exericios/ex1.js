//escreva uma funcao que reecebe 2 numeros e retorne o maior deles
//utilizando uma funcao tradicional
function maiorNumero(num1,num2){
  return num1 > num2 ? num1 : num2
}

console.log(maiorNumero(12,5)) // 12
console.log(maiorNumero(42,12)) // 42
console.log(maiorNumero(12,2)) // 12
//utilizando arrow function
const max2 = (x, y)=> x > y ? x : y
