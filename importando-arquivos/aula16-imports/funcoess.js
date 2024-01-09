console.log('ok')

function gets(){

  return 10
}

function print(texto){

  console.log(texto)
}

function maiorNummero(lista, numero) {

  maior =0
  for (let i = 0; i< lista.length; i++) {
    if (lista[i] > maior) {
      maior= lista[i]
    }
  }
  if (maior===numero){
    console.log('acertou papai')
  }
}
module.exports ={gets,print,maiorNummero}