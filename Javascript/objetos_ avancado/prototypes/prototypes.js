// corrente de heranca
// pessoa -> __proto__ -> Object
function Pessoa(nome,sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}
Pessoa.prototype.nomeCompleto = function(){
  return this.nome+' '+this.sobrenome;
  
}
const p1 = new Pessoa("Julio","verne")
const p2 = new Pessoa("Julio","ricardo")

console.dir(p1)
console.dir(p2)