class ControleRemoto{
  constructor(tv){
    this.tv = tv;
    this.volume = 0;
  }
  aumentarVolume(){
    this.volume += 2;
  }
  diminuirVolume(){
    this.volume += 2;
  }

  static trocaPilha(){
    console.log("Trocando...");
  }
  static vol(vol){
    this.volume = vol
  }
}
const controle1 = new ControleRemoto("Lg");
controle1.aumentarVolume()
ControleRemoto.trocaPilha()
ControleRemoto.vol(21)
console.log(controle1);