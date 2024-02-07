//map realiza uma funcao para cada elemento do array
//dobrando valores do array
let numeros = [5,3,1,5,23,123,5,31,43]
numeros = numeros.map(num=>num*2)
// console.log(numeros)

const pessoas =[
  {nome: "Luiz", idade:32},
  {nome: "Junior", idade:22},
  {nome: "Marcel", idade:42},
  {nome: "Ricardo", idade:72},
  {nome: "Ana", idade:12},
  {nome: "Jorge", idade:42},
  {nome: "Fernando", idade:32}
]

let nomePessoas = pessoas.map(obj => obj.nome)
let pessoasSemNome = pessoas.map(obj => ({idade: obj.idade}))
let pessoasComId = pessoas.map((obj,indice) => {

  obj.id = indice
  return obj
})
console.log(nomePessoas)
console.log(pessoasSemNome)
console.log(pessoasComId)