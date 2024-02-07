const nomes = ["Jduardo", "Maria", "Joana"]
const novo = [...nomes]//"copiando!" array

novo.pop();
nomes[2]="joao"

console.log(nomes)//[ 'Jduardo', 'Maria', 'joao' ]
console.log(novo) //[ 'Jduardo', 'Maria' ]

const nomes2 = ["Jduardo", "Maria", "Joana","lucas"]
const nomesNovo =nomes2.slice(1,3)
console.log(nomesNovo)