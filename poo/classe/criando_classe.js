class Pessoa{
  constructor(nome,sobrenomes){
    this.nome = nome;
    this.sobrenomes = sobrenomes;
  }
  falar(){
    console.log("Olá")
  }
  comer(){
    console.log("comendo")
  }
  dormindo(){
    console.log("dormindo")
  }
}
const p1 = new Pessoa('luiz', 'augusto');
console.log(p1);