// try {
//  console.log(hello) 
// } catch (ReferenceError) {
//   console.log('hello não foi definido'+ ReferenceError)
// }
//explicação: o try tenta executar o código, caso não consiga, ele vai para o catch e executa o código dentro do catch  e o erro é exibido no console

function soma(x, y) {
  if ( typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('x e y precisam ser números')
  }
  return x + y
}

try {
  console.log(soma(1, 2));
  console.log(soma('1', 2));
} catch(error) {
  console.log(error)
}