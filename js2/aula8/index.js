let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A

varC = varA
varA = varB
varB = varC
varC = varA
varA = varAux


console.log(varA, varB, varC)
