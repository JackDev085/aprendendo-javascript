// essa funcao cria uma hora a partir de segundos
function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'GMT'
  })
}
console.log(criaHoraDosSegundos(1));
// criando variavies do dom
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

// essa funcao inicia o relogio e aplica estilos
function iniciaRelogio() {
  timer = setInterval(function() {
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);
  }, 1000);
}
// adicionando eventos aos botoes
document.addEventListener('click', function(event) {
  
  const elemento = event.target
  //essa condicional verifica se o elemento clicado tem a classe iniciar
  if (elemento.classList.contains('iniciar')) {
    relogio.classList.remove('pausado');
    relogio.classList.add('rodando');
    clearInterval(timer);
    iniciaRelogio();
  }
  //essa condicional verifica se o elemento clicado tem a classe pausar
  else if (elemento.classList.contains('pausar')) {
    clearInterval(timer);
    relogio.classList.add('pausado');
    relogio.classList.remove('rodando');
  }
  //essa condicional verifica se o elemento clicado tem a classe zerar
  else if (elemento.classList.contains('zerar')) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
    relogio.classList.add('pausado');
    relogio.classList.remove('rodando');
  }
});
