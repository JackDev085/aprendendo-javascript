// const data = new Date(0); //01/01/1970 timestamp unix
const data = new Date(1705183689173); //cria uma data no momento atual
// Ano, Mês(0-11) ,Dia , Hora, Minutos, Segundos
const dataCriada = new Date(2021, 4 , 2, 0,0,0) //criando a data no periodo especificado
console.log(dataCriada) //2023-09-16T03:00:00.000Z

const dataCriadaString = new Date('2021-4-2 12-15-19') //criando a data no periodo especificado com string


console.log(data.toString()) //Sat Jan 13 2024 18:50:26 GMT-0300 (GMT-03:00)

console.log("dia", data.getDate()) // retorna o dia
console.log("Mes", data.getMonth()) // retorna o mês
console.log("Ano", data.getFullYear()) //retorna ano
console.log("Hora", data.getHours()) // retorna hora
console.log("Min", data.getMinutes()) // retorna minutos
console.log("Seg", data.getSeconds()) //retorna seg
console.log("Milisegundos", data.getMilliseconds()) //retorna milisegundos
console.log("Dia semana", data.getDay()) //retorna dia da semana (0-6)

const datinha = Date.now() //retorna o valor do horário atual em milisegundos
console.log(datinha)//1705183689173