
// Criando um array
const alunos =['luiz', 'maria', 'joao']
// editando elementos
alunos[0]='eduardo'
console.log(alunos[1])
alunos[3]='luiza'

// tamanho do array
alunos.length

// adicionando um elemento no fim do array
alunos.push('jorge')

//remove um elemento no começo 
alunos.unshift('Gabriel')

//adiciona um elemento no começo 
alunos.shift('Gabriel')

// remove o ultimo elemento do array
alunos.pop()

// remove um elemento e deixa um elemento vazio no lugar
// delete alunos[1]

// fatiando arrays
console.log(alunos.slice(0,3))

// entendendo se uma variavel é insânciaa de um array
console.log(alunos instanceof Array)

console.log(alunos)