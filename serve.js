console.log('Testando!!')
const express = require('express')
const app = express();
app.use(express.json());


//Preparar para responder ao GET
app.get('/',(req, res) => {
    res.send('Atendida a requisição GET!!');
});

app.post('/animais', (req, res, next) => {
    db.collection('animais').insertOne(req.body, (err, result) => {
        if (err) throw err;
        res.json({success: "Incluído com sucesso."});
    })
   })

app.listen(3001, () => {
    console.log("Rodando em http://localhost:3001")
})

// conexão com mongoBD
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const uri = "mongodb://localhost:27017/aula01";
MongoClient.connect(uri, (err, client) => {
 if (err)
 return console.log(err);
db = client.db('aula01');
app.listen(3000, function() { // subir serviço da api na porta 3001
console.log('API rodando na porta 3001');
console.log('Testar por http://localhost:3001');
});
 });


// rotas para animais
const animais = require('./animais');
animais(app)

