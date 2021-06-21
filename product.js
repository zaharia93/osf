const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    ssubcategorie: { type: mongoose.Schema.Types.ObjectId, ref: 'Subcategorie', required: true },
    price: { type: Number, required: true },
    
    
});

module.exports = mongoose.model('Product', productSchema); 