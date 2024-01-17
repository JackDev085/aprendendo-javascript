const notas = [];
notas.push(5)
notas.push(6)
notas.push(4)
notas.push(3)
notas.push(5)
notas.push(2)
notaTotal=0
for(i=0; i<notas.length; i++){
  notaTotal += notas[i]
}
console.log(notaTotal/notas.length)