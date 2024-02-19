const express = require('express');
const app = express();
app.use(express.urlencoded({
  extended:true
}));
// criando rota
app.get('/', (req, res) => {
  res.send(
   ` <form action ="/" method="POST">
    Nome: <input type="text" name"nome">
    <button>Enviar form</button> </form>`
    )


});
app.post('/',(req,res)=>{
  console.log(req.body)
  res.send(`recebido ${req.body.nome}`)

})
app.get('/testes/:nome?/:parametros?',(req,res)=>{
  // parametros de rota => rota/parametro
  console.log(req.params);
  // query para rotas => rota?nome=tal&idade=10
  console.log(req.query);
  res.send(req.params);
});
app.post('/sobre',(req,res)=>{
  res.send('ok');
})

// listen -> amostra no terminal o que for retornado
app.listen(3000,()=>{
  console.log('Acessar http://localhost:3000')
  console.log('servidor executando')
})