// exibir um pop-up na tela 
alert("Mensagem")

// popup na tela com uma pergunta e duas alternativas para escolher
window.confirm('Deseja realmente apagar')

// popup na tela que recebe um texto
const numero1 = Number(prompt('numero1?'))
const numero2 = Number(prompt('numero2?'))
// recebendo dois números do usuário e somando os valores
alert(`seu valor é ,${numero1+numero2}`)

// mudando o valor de uma variavel

let num1 = prompt('digite um número') //retorna uma string
num1 = parseInt(num1)
num1 = parseFloat(num1)
num1 = Number(num1)
console.log(num1)