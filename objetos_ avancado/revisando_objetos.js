const pessoa = {
  nome:"Luiz",
  sobrenome: "Júlio"
};
// console.log(pessoa.nome);
console.log(pessoa['nome'])
console.log(pessoa.sobrenome)
// console.log(pessoa['sobrenome'])
// outra forma de criar um objeto
const pessoa1 = new Object()
pessoa1.nome="Julio"
pessoa1.sobrenome="alex"
console.log(pessoa1, pessoa)

// factory function
function criaPessoa(nome,sobrenome){
  return{
  nome,
  sobrenome,
  get nomeCompleto(){
   return`${this.nome} ${this.sobrenome}`
  }
}
}
p1 = criaPessoa("Julio", "Alberto")
console.log(p1.nomeCompleto)


// funcao construtuora

function Pessoa(nome, sobrenome){
  this.nome = nome
  this.sobrenome= sobrenome
}

const p = new Pessoa("Julio" ,"verne")
console.log(p)