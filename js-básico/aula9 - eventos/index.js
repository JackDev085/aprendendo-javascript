/*
Event	       |     Description
onchange	   |  An HTML element has been changed
onclick	     |  The user clicks an HTML element
onmouseover	 |  The user moves the mouse over an HTML element
onmouseout	 |  The user moves the mouse away from an HTML element
onkeydown	   |  The user pushes a keyboard key
onload	     |  The browser has finished loading the page
*/

// Evento onclick elemento
function eventoClique(){
  document.body.style.backgroundColor="black"
}
function eventoDuploClique() {
  document.body.style.background="yellow"
}
function viraAzul(){
  let div =document.getElementById("teste")
  div.style.backgroundColor="blue"
}
function viraVermelho(){
  let div =document.getElementById("teste")
  div.style.backgroundColor="green"
}
function adicionaTexto() {
  let p=document.getElementById("texto");
  p.append("O mouse moveu <br>")
}
function limpaTexto() {
  document.getElementById('campoTexto').value =""
}