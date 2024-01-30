function Produto(nome, preco, estoque){
  this.nome= nome;
  this.preco = preco;
  let estoquePrivado = estoque

  Object.defineProperty(this, 'estoque',{
    // mostragem do valor
    enumerable:true,

    //pode reconfigurar as informações?
    configurable:true,
    get: function(){
      return estoquePrivado;
    },
    set: function(valor){
      if(typeof valor !=='number'){
        return;
      }
      estoquePrivado= valor
      
    }
  })
}
const p1 = new Produto("camiset", 30, 3)
console.log(p1)
p1.estoque='aas'
console.log(p1.estoque)
