// ex
function mostrarHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}
// console.log(mostrarHora()); //18:46:00
// explicação: o setInterval executa uma função de tempos em tempos, no caso a cada 1 segundo (1000 milisegundos)
//parametrizando a funcao do setinterval em uma variavel
const timer = setInterval(function(){
  console.log(mostrarHora());
}, 1000)

setTimeout(function(){
  clearInterval(timer);
},10000)