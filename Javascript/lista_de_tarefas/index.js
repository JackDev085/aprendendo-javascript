const input = document.querySelector('.input');  // seleciona o formulario
const btn = document.querySelector('.btn');  // seleciona o button
const tarefas = document.querySelector('.tarefas');  // seleciona a ul
const lista = [1]

function criarLi(){
  const li = document.createElement('li') // cria um elemento li
  return li
}


function limpaInput(){
  input.value = '' // limpa o input
  input.focus() // coloca o cursor no input
} 

// cria um botao apagar e adiciona ao li
function criaBotaoApagar(li){
  li.innerText += ' ' // adiciona um espaco
  const botaoApagar = document.createElement('button') // cria um botao
  botaoApagar.innerText = 'Apagar' // adiciona o texto no botao
  li.appendChild(botaoApagar) // adiciona o botao ao li
  botaoApagar.setAttribute('class', 'apagar') // adiciona uma classe ao botao
}
// cria uma tarefa
function criaTarefas(textoInput){
  const li = criarLi()
  li.innerText = textoInput // adiciona o texto do input ao li  
  tarefas.appendChild(li) // adiciona o li a ul
  limpaInput() // limpa o input
  criaBotaoApagar(li) // cria o botao apagar
  salvarTarefas() // salva as tarefas
}

// adiciona um evento de click no botao 
btn.addEventListener('click', function(event) {  
  criaTarefas(input.value); // cria uma tarefa
});

// adiciona um evento de click no input
input.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    if (!input.value) return;
    // console.log("Enter pressionado");
    criaTarefas(input.value);
  }
});
// adiciona um evento de click na ul
document.addEventListener('click', function(e){
  const el = e.target
  if(el.classList.contains('apagar')){
    el.parentElement.remove()
    salvarTarefas() // salva as tarefas
  }
});

// salvando as tarefas
function salvarTarefas(){
  const liTarefas = tarefas.querySelectorAll('li')
  const listaDeTarefas = []

  for(let tarefa of liTarefas){
    let tarefaTexto = tarefa.innerText
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
    listaDeTarefas.push(tarefaTexto)
  }
  const tarefasJSON = JSON.stringify(listaDeTarefas)// transforma o array em string
  localStorage.setItem('tarefas', tarefasJSON) // salva no local storage em json
}

// criando as tarefas salvas
function adicionaTarefasSalvas(){
  const tarefas = localStorage.getItem('tarefas') // pega as tarefas salvas
  const listaDeTarefas = JSON.parse(tarefas) // transforma em array
  for(let tarefa of listaDeTarefas){
    criaTarefas(tarefa) // cria as tarefas
  }
}
adicionaTarefasSalvas() // adiciona as tarefas salvas