

const elementos = [
  {tag:'p', texto:"Qualquer texto"},
  {tag:'div', texto:"Qualquer texto"},
  {tag:'section', texto:"Qualquer texto"},
  {tag:'footer', texto:"Qualquer texto"},
] ;
const container =document.querySelector('.container');
const div =document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
  let {tag, texto} = elementos[i];
  let tagCriada = document.createElement(tag);

  tagCriada.innerText=texto;
  // Poderiamos ter usado essa funcao entretanto caso houvesse algum elemento dentro,seria excluid
  // tagCriada.innerHTML=texto;

  div.appendChild(tagCriada);
}

container.appendChild(div);