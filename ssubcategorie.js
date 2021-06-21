const mongoose = require('mongoose');

const ssubcategorieSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true }, 
    subcategorie: { type: mongoose.Schema.Types.ObjectId, ref: 'Subcategorie', required: true }
    
     
});

module.exports = mongoose.model('Ssubcategorie', ssubcategorieSchema);  