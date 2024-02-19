class Pessoa{
  constructor(nome , sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome
  }
}
function fala(){
  console.log("OI")
}

const objeto ={
  idade:12,
  altura:12,
}
exports.Pessoa = Pessoa;
exports.fala = fala
exports.info = objeto
