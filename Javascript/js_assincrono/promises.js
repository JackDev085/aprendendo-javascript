function rand(min,max){
  return Math.floor(Math.random()*(max-min)+min)
}
function esperaAi(msg,tempo){
  return new Promise((resolve,reject)=>{
    if(typeof msg!=='string') return reject("Bad value")
    setTimeout(()=>{
      resolve(msg)
    }, tempo)

  })
}
esperaAi('Frase 1', rand(1,3))
.then((resposta=>{
  console.log(resposta)
  return esperaAi(1,rand(1,3))
}))
.then((resposta=>{
  console.log(resposta)
}))
.catch(error=>{
  console.log( "Você colocou números: ",error)
})