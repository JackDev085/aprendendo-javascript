const carro = {
  marca:"ford",
  modelo:"esportivo",
  ano: 2015,
  placa :"ABC-1234",

  buzina: function(){
    alert('beeeeee')
  },

  completo: function(){
    alert("Esse carro é um " + this.marca + " modelo: "+ this.modelo + " ano: " + this.ano)
  }
};

console.log(carro)
console.log(carro['marca']) //acessando elemento do objeto carro
console.log(carro.completo())
// console.log(carro.buzina())
