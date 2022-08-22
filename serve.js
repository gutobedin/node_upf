console.log('Testando!!')
const express = require('express')
const app = express();
app.use(express.json());


//Preparar para responder ao GET
app.get('/',(req, res) => {
    res.send('Atendida a requisição GET!!');
});