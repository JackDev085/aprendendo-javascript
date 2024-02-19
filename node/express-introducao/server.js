const express = require('express');
const app = express();
// criando rota
app.get('/',(req,res)=>{
  res.send(
    '<form action =/ method="POST">'+
    'Nome: <input type="text" name"nome">'+
    '<button>Enviar</button> </form>'
    )
});


app.get('/contato',(req,res)=>{
  res.send('Valeu')
})

// listen -> amostra no terminal o que for retornado
app.listen(2000,()=>{
  console.log('Acessar http://localhost:2000')
  console.log('servidor executando')
})