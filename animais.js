module.exports = (app) => {
    // colocar aqui as rotas paa requisicoes de animais
    app.get('/animais', (req, res) => {
        res.json({"res":"ok"})
    });
}

