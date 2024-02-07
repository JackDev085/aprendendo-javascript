function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
function esperaAi(msg, tempo) {
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject("cai no erro")
        return;
      }
      resolve(msg.toLocaleUpperCase() + ' = passei na promisse');
      return
    }, tempo);

  })
  
  
}
async function executa(){
  try{
  const fase1 = await esperaAi('Fase 1', rand(0,3000))
  console.log(fase1)
  const fase2= await esperaAi('Fase 2', rand(0,3000))
  console.log(fase2)
  const fase3 = await esperaAi('Fase 3', rand(0,3000))
  console.log(fase3)
}catch(e){
  console.log(e)
}
}
executa()
// esperaAi('Fase 1', rand(0,3000))
// .then(valor =>{
//   console.log(valor);
//   return esperaAi('Fase 2', rand(0,3000))
// })
// .then(valor=>{
//   console.log(valor);
//   return esperaAi('Fase 3', rand(0,3000))
// })
// .then(valor=>{
//   console.log(valor)
// })
// .catch(e=>{
//   console.log('erro: ',e)
// })
