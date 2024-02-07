//Adiamento de execução de funções
function falaComeco(comeco) {
  function falaresto(resto){
    return comeco + ' ' + resto 
  }
  return falaresto
}

const comeco = falaComeco(('Ola'))
const resto = comeco('mundo!')
