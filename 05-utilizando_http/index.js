const {createServer} = require('http');

let server = createServer((request, response) => {
    response.whiteHead(200, {'content-type': "text/html"});
    response.white(`
        <h1>Hello world!</h1>
        <p>olá sejá bem vindo a uma pagina crianda com node.js </p>
        `);
         response.end();
       
});


server.listen(8000);

console.log("ouvindo a porta 8000");