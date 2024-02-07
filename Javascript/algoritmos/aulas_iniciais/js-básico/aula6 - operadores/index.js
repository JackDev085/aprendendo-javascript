/*
atribuição = "=","+=", "-=" "/="
operadores aritméticos = -,+,*,/
incremento = ++, --

comparação = "=="(se os valores são iguais), "==="(se o valor e o tipo for igual)
"1=" se o valor é diferente ,"!==" se é  diferente valor e tipo, "<" menor, ">" maior

operadores lógicos = "&& - E" "// - ou" "!- não"


*/
var total =1 
++total;
// alert(total) 2

var  a = '1'
var b = 1

var c = a==b
// alert(c) // true

var c = a===b
// alert(c) false


// ternário

var idade, eleitor;
idade =7
eleitor =(idade<18)? "não é eleitor": "sim"
// alert(eleitor) não eleitor


idade = 61

eleitor = (idade>18)&&(idade<60)?'pode votar':'não pode votar'
alert(eleitor)

