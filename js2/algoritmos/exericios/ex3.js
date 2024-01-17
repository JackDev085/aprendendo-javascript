//escreva uma funcao que receba um numero e retorne fizz se o numero for divisivel por 3, buzz se for divisivel por 5,
// fizzbuzz se for divisivel por 3 e 5 e o proprio numero caso nao seja divisivel nem por 3 nem por 5

const func =(a)=>{
   
  if(Number.isInteger(a)==false){
    return 'Não é um número inteiro'
  }
  if(a%3==0&&a%5==0){
    return 'fizzbuzz'
  }
  if(a%5==0){
    return 'buzz'
  }
  else if(a%3==0){
    return 'fizz'
  }else{
    return a
  }
  
}
for (i=0; i<100; i++){
  console.log(func(i))
}
console.log(func('d'))

