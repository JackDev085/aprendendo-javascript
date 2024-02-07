const pessoa1 = {
  nome:'luiz',
  sobrenome:'José',
  idade:33,
  fala(){
    console.log("oi"+this.nome)
  }
}

const pessoa2 = {
  nome:'maria',
  sobrenome:'Oliveira',
  idade:33
}
console.log(pessoa1.nome)


function criaObjeto(nome, sobrenome, idade) {
  objeto= {

    nome:nome,
    sobrenome:sobrenome,
    idade:idade
  }
  return objeto
}

const pessoa = criaObjeto('gui', 'gadelha', 20)
console.log(pessoa1)
pessoa1.fala()