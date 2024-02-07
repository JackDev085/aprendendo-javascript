function funcao(){

  //imprimindo na tela o primeiro argumento passado na funcao
    console.log(arguments[1])
    let total = 0
    for(args of arguments){
      total+=args;
    }
    console.log(total);
}

funcao( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function teste(a,b=0){
  //caso o valor de b nao seja passado, ele sera 0
  b= b||0;
  console.log(a+b);
}

teste(2);//2
teste(2,10);//12


function conta(operador,acumulador,...numeros){
  for(let numero of numeros){
    if(operador === '+') acumulador+=numero;
    if(operador === '-') acumulador-=numero;
    if(operador === '/') acumulador/=numero;
    if(operador === '*') acumulador*=numero;
  }
  console.log(acumulador);
}
conta('+',0,20,30,40,50);
