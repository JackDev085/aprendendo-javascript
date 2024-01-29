//reduce retorna um elemento

const numeros = [ 1,5,4,3,6,123,3,2,1]

const total =numeros.reduce((acumulador ,valor)=>{
    if(valor%2===0){
      acumulador.push(valor)
    }
    return acumulador
},[]);
console.log(total)

// retorne a pessoa mais velha
const pessoas =[
  {nome: "Luiz", idade:32},
  {nome: "Junior", idade:22},
  {nome: "Marcel", idade:42},
  {nome: "Ricardo", idade:72},
  {nome: "Ana", idade:12},
  {nome: "Jorge", idade:42},
  {nome: "Fernando", idade:32}
]
// retornando pessoa mais velha
pessoaVelha = pessoas.reduce((velho,valor)=>{
  if(valor.idade > velho){
    velho=valor.idade
   
  }
  return velho
},0)
console.log(pessoaVelha)