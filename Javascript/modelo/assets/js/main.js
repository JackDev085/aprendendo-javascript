const paragrafos = document.querySelector('.paragrafos')
const p = paragrafos.querySelectorAll('p')

// Extraindo todos os estilos aplicados ao body
const estiloBody = getComputedStyle(document.body);
// Separando um estilo em especifico do body
const backgroundColorBody =estiloBody.background

// Atribuindo a cada elemento p da div pagrafos e aplicando um estilo(backgroundColorBody)
for(i in p){
  p[i].style.background=backgroundColorBody
  p[i].style.color="white"
}