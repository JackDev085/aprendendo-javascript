//escreva uma funcao chamada epaisagem que recebe dois argumentos,
// largura e altura de uma imagem(number).
// retorne true se a imagem estiver no modo paisagem.

const ePaisagem = (largura,altura) => largura>altura ? 'é paisagem':'Não é paisagem'

console.log(ePaisagem(100,200))// Nao é paisagem
console.log(ePaisagem(200,100))// é paisagem
