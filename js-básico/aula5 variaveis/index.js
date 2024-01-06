// Existem 3 palavra-chaves para declarar variáveis

// -> var - armazenar informações
// -> let - variável de escopo
// -> const

var pote="bombom"
alert(pote)


// declarando variaveis
var a,b,c,s;

//atribuindo valor as variáveis
// a=2;
// b=2;
c=a+b;
console.log(c) //Not_a_numbe - devido as variáveis, não possuirem atribuições
console.log(s)//por padrão se uma variável não for utilizada ela tem o valor "undefined"

var nome,sobrenome,nome_completo;

nome="dimitri"
sobrenome="leo"
nome_completo = nome+ " "+sobrenome

document.getElementById('texto').innerHTML = nome_completo

let x = 10

{
  let x = 2
  alert(x)//2
}
alert(x) //10