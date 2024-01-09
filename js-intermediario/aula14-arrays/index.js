
// // Lista de strings

// //position=0       1         2
// var array  = ['Joao', 'lucas','bernado',]

// // atibuindo a posicao 5 da lista um valor
// lista[5] ='lucio'

// // Adicionando elemento ao final de uma lista
// lista.push('renan')
// lista.push(23)

// // removendo o último item da lista 
// lista.pop()
// console.log(lista)

// // =========================
// // percorrendo uma palavraa com for

// const palavra ='extraterrestre'
// for (let index = 0; index < palavra.length; index++) {
//   console.log(palavra[index]);
  
// }

for (let j = 1; j < 10; j++) {
  for (let i = 1; i < 10; i++) {
    if(i%2===0 && j%2===0 )
    console.log(`A multiplicação entre ${j} x ${i} resulta em: `+ j*i)
  }
  
}