
const peso = document.querySelector('.peso')
const altura = document.querySelector('.altura')

function algoritmo(peso,altura) {
  resultado = (peso)/altura**2
  resultado = resultado.toFixed(1)
  if(resultado <18.5){
    return `resultado: ${resultado} - abaixo do peso`
  }
  else if(resultado >18.4 && resultado <25){
    return `resultado: ${resultado} - peso normal`
  }
  else if(resultado >24.9 && resultado <29){
    return `resultado: ${resultado} - sobrepeso`
  }
  else if(resultado >28.9 && resultado <35){
    return `resultado: ${resultado} - Obresidade grau 1`
  }
  else if(resultado >34.9 && resultado <40){
    return `resultado: ${resultado} - Obresidade grau 2`
  }
  else if(resultado >40){
    return `resultado: ${resultado} - Obresidade grau 1`
  }
}

 function pressionou(){
  alert(algoritmo(Number(peso.value),Number(altura.value)) )
}