const nome =["grabriel" ,"monteiro","ricardo"]

for(let valor of nome){
  console.log(valor)
}

nome.forEach(function(valor,elemento){
  console.log(valor, elemento)
});