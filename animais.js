
const ObjectId = require('mongodb').ObjectId;
module.exports = (app) => {
app.get('/animais', (req, res) => {
    //res.send('retornar animais');
    db.collection('animais').find().toArray((err, results)=>{
    if (err) throw err;
    res.json(results);
    });
   })

   app.post('/animais', (req, res, next) => {
    db.collection('animais').insertOne(req.body, (err, result) => {
    if (err) throw err;
    res.json({success: "Incluído com sucesso."});
    })
   });


};
