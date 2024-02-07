class DispoisitvoEletronico{
  constructor(nome){
    this.nome = nome
    this.ligado = false
  }
  ligar(){
    if(this.ligado===false)return this.ligado=true
    return this.ligado=false
  }
};
let d1 = new DispoisitvoEletronico('Cafeteira');
d1.ligar();
d1.ligar();
console.log(d1);

class Smartphones extends DispoisitvoEletronico{
  constructor(nome,cor,modelo){
    super(nome);
    this.cor=cor;
    this.modelo = modelo;
  }
}
const s1 = new Smartphones("Iphone",'blue',12);
console.log(s1);