// const objA = {
//   chaveA: 'A'
//   //__proto__:Object.prototype
// }
// const objB = {
//   chaveA: 'B'
// }
// Object.setPrototypeOf(objB,objA)

function Produto(nome,preco){
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function(porcentagem){
  this.preco = (this.preco - (this.preco*porcentagem /100)).toFixed(2)
  
}
Produto.prototype.aumento = function(porcentagem){
  this.preco = this.preco +(this.preco*100)
  
}
const p1 = new Produto("Carro",21)
p1.aumento(10)
p1.desconto(20)
console.log(p1)

const p2= {
  nome:'Bola',
  preco:20
}
Object.setPrototypeOf(p2, Produto.prototype)

const p3 =Object.create(Produto.prototype)
p3.preco=30
console.log(p3)