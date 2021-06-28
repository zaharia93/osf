const mongoose = require("mongoose");

const Subcategorie = require("../models/subcategorie");
const Categorie = require('../models/categorie');

exports.subcategories_get_all = (req, res, next) => {
  Subcategorie.find()
    .select("categorie name _id")
    .populate('categorie')
    .then(docs => {
      res.status(200).json({
        count: docs.length,
        subcategories: docs.map(doc => {
          return {
            _id: doc._id,
            name: doc.name,
            categorie: doc.categorie,
            request: {
              type: "GET",
              url: "http://localhost:3000/subcategories/" + doc._id
            }
          };
        })
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

  exports.subcategories_create_subcategorie = (req, res, next) => {
    Categorie.findById(req.body.categorieId)
      .then(categorie => {
        if (!categorie) {
          return res.status(404).json({
            message: "Categorie not found"
          });
        }
        const subcategorie = new Subcategorie({
          _id: mongoose.Types.ObjectId(),
          name: req.body.name,
          categorie: req.body.categorieId,
          
        });
        return subcategorie.save();
      })
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "Subcategorie stored",
          createdSubcategorie: {
            _id: result._id,
            name: result.name,
            categorie: result.categorie, 
          },
          request: {
            type: "GET",
            url: "http://localhost:3000/subcategories/" + result._id
          }
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };
  
  

  
  
  exports.subcategories_get_subcategorie = (req, res, next) => {
    Subcategorie.findById(req.params.subcategorieId)
      .populate("categorie")
      .exec()
      .then(subcategorie => {
        if (!subcategorie) {
          return res.status(404).json({
            message: "Subcategorie not found"
          });
        }
        res.status(200).json({
          subcategorie: subcategorie,
          request: {
            type: "GET",
            url: "http://localhost:3000/subcategories"
          }
        });
      }) 
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  };
  
  exports.subcategories_delete_subcategorie = (req, res, next) => {
    Subcategorie.remove({ _id: req.params.subcategorieId })
      .exec()
      .then(result => {
        res.status(200).json({
          message: "Subcategorie deleted",
          request: {
            type: "POST",
            url: "http://localhost:3000/subcategories",
            
          }
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  };