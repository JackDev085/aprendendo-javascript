function* geradora(){
  //codigo a ser executado
  yield  'valor1'
  //codigo a ser executado
  yield  'valor2'
  //codigo a ser executado
  yield  'valor3'
}

// const g1= geradora()
// console.log(g1.next().value)
// console.log(g1.next().value)
// console.log(g1.next().value)

//gera valor infinito
function* geradoraz(){
  let i =0
  while(true){
    yield i;
    i++
  }
}
// const g2 = geradoraz()

// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)


function* geradora3(){
  yield 0;
  yield 1;
  yield 2;
}
function* geradora4 (){
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4()

for (let valor of g4){
  console.log(valor)
}