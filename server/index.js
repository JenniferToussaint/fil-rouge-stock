const express = require('express');
const path = require('path');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
const { isForOfStatement } = require('typescript');
const app = express();



const distDir = '../dist';
//Connexion a mongoose
const uri = "mongodb+srv://Jennifer:3004@cluster0.lcbpv.mongodb.net/Cluster0?retryWrites=true&w=majority";
mongoose.set('useUnifiedTopology', true);
const Product = require('./model/product.model');


app.use(express.static(path.join(__dirname, distDir))); // Quelque soit le lien je viens dans le dossier distant 
app.use(/^((?!(api)).)*/, (req, res) =>{ //Quand tu tappe autre chose que /api je lui envoie le fichier index.html du dossier dist
    res.sendFile(path.join(__dirname, distDir + '/index.html'));

});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


 var promise = mongoose.connect(uri, {useNewUrlParser: true});
 
 promise.then((db) =>{
     console.log('DB connected');
    app.listen(3000, () =>{

        //A l'ouverture du serveur je mets ce message d'accueil
        console.log('Server Launch!');
    });
});


// ROUTES

app.post('/api/products', (req,res) =>{
    var newProduct = new Product(req.body);
    console.log(newProduct)

    newProduct.save((err, obj) =>{
        if(err) {
            console.log(err);
            return res.send(500);
        }

        res.send(obj);
    });


});

app.get('/api/products', (req, res) =>{
    Product.find({}, (err, obj) =>{
        if(err){
            console.log(err);
            return res.send(500);
        }
        return res.send(obj);
    });
});

app.get('/api/products/:id', (req, res) =>{
    Product.findOne({_id: req.params.id}, (err, obj) =>{
        if(err){
            console.log(err);
            return res.send(500);
        }
        return res.send(obj);
    });
});

app.put('/api/products/:id', (req, res) =>{
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}, (err, obj) => {
        if(err){
            console.log(err);
            return res.send(500);
        }
        return res.send(obj);
    });
});

app.delete('/api/products/:id', (req, res) =>{
    Product.deleteOne({_id: req.params.id}, (err, obj) =>{
        if(err){
            console.log(err);
            return res.send(500);
        }
        res.status(204).end();
    });
});


