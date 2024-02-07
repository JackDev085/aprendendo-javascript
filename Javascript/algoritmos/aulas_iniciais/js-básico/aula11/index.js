// Objetos são coleções de dados
var pessoa = {
  nome:'ruan',
  idade:24,
  descrever: function(){
    console.log(`O nome é ${this.nome} , idade é ${this.idade}`)
  }
}

pessoa.altura = 1.54;
pessoa.descrever()