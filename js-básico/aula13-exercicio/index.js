class Carro {
  nome;
  motorCavalos;
  ano;
  parado = true;

  constructor(nome, motorCavalos, ano) {
    this.nome = nome
    this.ano = ano
    this.motorCavalos = motorCavalos

  }

  acelerar() {

    if (this.parado === true) {
      this.parado = false
      console.log(`O ${this.nome} acelarandoo`)
    }else{
      console.log(`O ${this.nome} já está acelerando`)

    }
  }


  frear() {
    if (this.parado === false) {
      this.parado =true
      console.log(`O ${this.nome}está freando`)
    }
    else {
      console.log(`O ${this.nome} já está parado`)
    }

  }
}

var carro = new Carro('Fiesta', '2', 2022)

carro.acelerar()
carro.frear()
carro.frear()
carro.acelerar()
carro.acelerar()