const produto = {nome:"Caneca", preco:1.8}
// const outroProduto = {...produto, materal:"porcelana"}
const outroProduto = Object.assign({}, produto,{material:"porcelana"}) // cópia os valores de um objeto e aloca em outro
outroProduto.preco = 12
console.log(produto)
console.log(outroProduto)
console.log(Object.keys(outroProduto)) //retorna as chaves do objeto
// Object.freeze(outroProduto) -> impossibilita alterações no objto

//alterando propriedades dos valores do objeto
Object.defineProperty(produto,'nome',{
  writable:false,
})
// exibindo as propriedades do objeto
console.log(Object.getOwnPropertyDescriptor(produto,'nome'))
/* {
//   value: 'Caneca',
//   writable: false,
//   enumerable: true,
//   configurable: true
}*/