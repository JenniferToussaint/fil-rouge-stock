const mongoose = require('mongoose');

var productSchema = mongoose.Schema({

    title: String,
    picture: String,
    statutStock: String,
    details: String,
    color: String
    
});

var Product = mongoose.model('Product', productSchema);
module.exports = Product;