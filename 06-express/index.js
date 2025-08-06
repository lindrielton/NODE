let express =  require('express');
let app = express();


app.get('/',function(req, res){
    res.send('primeira rota com express');
});

app.get('/teste',function(req, res){
    res.send('testando rota ');
});




app.listen(3000, function(){
    console.log('aplicação rodando na porta 3000');
})