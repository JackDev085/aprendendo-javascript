const pontuacaoUsuario = 500;
                             // Condicao     caso verdadeiro  caso falso
const nivelUsuario = pontuacaoUsuario <= 1000 ? 'normal' : 'premium';
console.log(nivelUsuario)



let corUsuario = null
          // caso seja false, o outro valor será usado
corPadrao = corUsuario || 'blue'  //blue
console.log(corPadrao)


corUsuario = 'black'
          // caso seja false, o outro valor será usado
corPadrao = corUsuario || 'blue'
console.log(corPadrao) //black


