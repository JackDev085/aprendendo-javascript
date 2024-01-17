

function meuEscopo(){
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');
  const pessoas =[]
  form.onsubmit= function(evento){
   function recebeEventoForm(evento){
    evento.preventDefault()
    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const peso= form.querySelector('.peso')
    const altura = form.querySelector('.altura')
    
    const mostrar= []
    mostrar.push(nome.value, sobrenome.value, peso.value, altura.value)

    resultado.innerHTML= `
    <p>Nome: ${mostrar[0]}</p><br>
    <p>Sobrenome: ${mostrar[1]}</p><br>
    <p>Peso: ${mostrar[2]}</p><br>
    <p>Altura: ${mostrar[3]}</p><br>
    `
    }
    console.log(resultado)
    form.addEventListener('submit', recebeEventoForm(evento))
  };
}
meuEscopo()