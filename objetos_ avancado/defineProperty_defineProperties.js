function Produto(nome, preco, estoque){
  this.nome= nome;
  this.preco = preco;


  Object.defineProperty(this, 'estoque',{
    // mostragem do valor
    enumerable:true,
    // qual o valor da propriedade
    value:estoque,
    // Ele pode ser alterado?
    writable:false,
    //pode reconfigurar as informações?
    configurable:true
  })
  Object.defineProperties(this,{
    nome:{
    // mostragem do valor
    enumerable:true,
    // qual o valor da propriedade
    value:estoque,
    // Ele pode ser alterado?
    writable:false,
    //pode reconfigurar as informações?
    configurable:true
    },
    preco:{
    // mostragem do valor
    enumerable:true,
    // qual o valor da propriedade
    value:estoque,
    // Ele pode ser alterado?
    writable:false,
    //pode reconfigurar as informações?
    configurable:true
    }
  })
}

const p1 = new Produto("Camiseta", 20, 3)
console.log(p1)