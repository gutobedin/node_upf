console.log('Testando!!')
const express = require('express')
const app = express();
app.use(express.json());


//Preparar para responder ao GET
app.get('/',(req, res) => {
    res.send('Atendida a requisição GET!!');
});

app.listen(3001, () => {
    console.log("Rodando em http://localhost:3001")
})


// rotas para animais
const animais = require('./animais');
animais(app)