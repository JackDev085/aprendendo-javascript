const pessoa = {
  nome:'maria',
  idade:30,
  endereco:{
    rua:'joaquin', numero:123, cidade:'fortal'
  }
}
// metodo convncional 
// nome = pessoa.nome
// endereco = pessoa.endereco;
// console.log(endereco)

// atribuicao via desestruturacao

const {nome,idade,...resto} = pessoa //buscando dois valores dentro de um objeto
console.log(nome, idade)
const {endereco:{numero}} = pessoa //buscando o valor de um objeto dentro de um objeto
console.log(numero)

// parametro nomeado, caso nao tenha valores em ruas
const{endereco:{rua:r=12345}}= pessoa
console.log(r)

// =======================================
// Valores subsequentes não armazenados em variaveiss
console.log(resto)