const mongoose = require('mongoose');

const subcategorieSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true }, 
    categorie: { type: mongoose.Schema.Types.ObjectId, ref: 'Categorie', required: true }
    
     
});

module.exports = mongoose.model('Subcategorie', subcategorieSchema);   