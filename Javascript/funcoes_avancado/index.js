//Declaracao de funcao (function hoisting)
//hoisting = nao importa onde a funcao foi declarada, ela sempre sera movida para o topo do codigo

falaOi();
function falaOi() {
    console.log('Oie');
}
//First-class objects (Objetos de primeira classe)
//podemos atrbuit uma funcao a uma variavel
const souUmdado = function () {
 console.log('Sou um dado');
};
souUmdado();


//Arrow function
//funcao anonima e com uma sintaxe mais curta
const arrow = () =>{
    console.log('Sou uma arrow function');
}
arrow();

//setInterval é utilizado para exectar uma funcao de tempos em tempos
let teste = setInterval(() => {
  console.log("Hello, world!");
}, 1000);

//clearInterval é utilizado para parar o setInterval
// clearInterval(teste);

//funcao dentro de um objeto é chamada de metodo
const obj = {
  falaOi:function(){
      console.log('Oi');
  }
  //outra forma de declarar essa funcao
  //falaOi(){
  //  console.log('Oi');
  //}

};
obj.falaOi();