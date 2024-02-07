function Produto(nome, preco){
  this.nome= nome;
  this.preco = preco;
}

Produto.prototype.aumento =function(quantia){
  this.preco += quantia;
}
Produto.prototype.desconto = function(quantia){
  this.preco -= quantia;
}

function Camiseta(nome,preco,cor){
  Produto.call(this,nome,preco )
}
function Caneca(nome,preco,cor,estoque){
  Produto.call(this,nome,preco );
  this.cor = cor;
  this.estoque = estoque;
  Object.defineProperty(this,'estoque',{
    enumerable:true,
    configurable:false,
    get:function(){
      return estoque;
    },
    set:function(valor){
      if(typeof valor!=="number") return;
      estoque = valor
    }

  })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Camiseta
const caneca = new Caneca("Caneca",21,'azul',3)
console.log(caneca)
caneca.estoque = 30
console.log(caneca.estoque)
