
// Criando classe pessoa
class Pessoa{
  
  // definindo atributos
  nome;
  idade;

  // construtor com argumentos
  constructor(nome, idade){
    this.nome = nome
    this.idade = idade
  }
  // metódos de classe
  descrever() {
    console.log(`meu nome é ${this.nome}, minha idade é ${this.idade} `)
  }
}

function comparaPessoa(p1, p2){
  if (p1.idade >p2.idade){
    console.log(`${p1.nome} é mais velha`)
  }
  else{
    console.log(`${p2.nome} é mais velha`)

  }

}
// instanciando um objeto do tipo pessoa
const pessoa2 = new Pessoa('joao',3)
const pessoa1 = new Pessoa('julio', 2)
// atribuindo valores aos atributos do objeto pessoa

console.log(pessoa2.nome)
pessoa2.descrever()

comparaPessoa(pessoa1,pessoa2)