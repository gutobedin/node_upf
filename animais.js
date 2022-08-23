
module.exports = (app) => {
app.get('/animais', (req, res) => {
    //res.send('retornar animais');
    db.collection('animais').find().toArray((err, results)=>{
    if (err) throw err;
    res.json(results);
    });
   })
};