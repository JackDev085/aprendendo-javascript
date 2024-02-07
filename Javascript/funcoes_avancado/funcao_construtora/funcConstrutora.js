function Pessoa(nome,sobrenome){
  this.nome = nome;
  this.sobrenome =sobrenome;

  this.metodo = ()=>{
    console.log( this.nome, this.sobrenome)

  }
}

const p1 = new Pessoa("Luiz", "Augusto")
const p2 = new Pessoa("Maria", "oliveira")

p1.metodo()
p2.metodo()