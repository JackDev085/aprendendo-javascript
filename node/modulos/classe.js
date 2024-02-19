module.exports = class Cachorro{
  constructor(nome){
    this.nome = nome;
  }
    fala(){
      console.log(this.nome)
    }
}