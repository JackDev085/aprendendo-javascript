//Filter -> sempre retorna um array, com a mesma quantidade de elementos
//ou menos


const numeros = [5,43,121,1,34,2,5,77,98]
const numeros2=[]
numeros.forEach(element=>{
  if(element>10){
    numeros2.push(element)
  }
})
// console.log(numeros2)
let numeros3 = numeros.filter(valor => valor>10)
// console.log(numeros3)

const pessoas =[
  {nome: "Luiz", idade:32},
  {nome: "Junior", idade:22},
  {nome: "Marcel", idade:42},
  {nome: "Ricardo", idade:72},
  {nome: "Ana", idade:12},
  {nome: "Jorge", idade:42},
  {nome: "Fernando", idade:32}
]

let filtrado = pessoas.filter(pessoa=>(pessoa.nome.length > 4))
let filtrado1 = pessoas.filter(pessoa=>(pessoa.idade >50))
let filtrado2 = pessoas.filter(pessoa=>(pessoa.nome.toLowerCase.endsWith('a')))
console.log(filtrado)
console.log(filtrado1)
console.log(filtrado2)