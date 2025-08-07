const express = require('express');
const app = express();

const db = require('./db/conection');//ligação com banco

const port = 3000;

app.listen(port, function(){
    console.log('porta 3000 disponivel');
});

//db connection
db

  .authenticate()
  .then(()=>{
    console.log("conectou au banco com sucesso");
  })
  .catch(err => {
    console.log('ocorreu um erro', err)
  })


//routes
app.get("/", function(reg,res){
    res.send('acessando a rota com exito 0')
});