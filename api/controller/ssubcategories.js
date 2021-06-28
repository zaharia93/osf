const mongoose = require("mongoose");

const Ssubcategorie = require("../models/ssubcategorie");
const Subcategorie = require('../models/subcategorie');


exports.ssubcategories_get_all = (req, res, next) => {
  Ssubcategorie.find()
    .select() 
    .populate( 'subcategorie ')
    .then(docs => { 
      res.status(200).json({
        count: docs.length,
        ssubcategories: docs.map(doc => {
          return {
            _id: doc._id,
            name: doc.name,
            subcategorie: doc.subcategorie,
            
            request: {
              type: "GET",
              url: "http://localhost:3000/ssubcategories/" + doc._id
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

  exports.ssubcategories_create_ssubcategorie = (req, res, next) => {
    Subcategorie.findById(req.body.subcategorieId)
      .then(subcategorie => {
        if (!subcategorie) {
          return res.status(404).json({
            message: "Subcategorie not found"
          });
        }
        const ssubcategorie = new Ssubcategorie({
          _id: mongoose.Types.ObjectId(),
          name: req.body.name,
          subcategorie: req.body.subcategorieId,
          
          
        });
        return ssubcategorie.save();
      })
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "Ssubcategorie stored",
          createdSsubcategorie: {
            _id: result._id,
            name: result.name,
            subcategorie: result.subcategorie,
            
          },
          request: {
            type: "GET",
            url: "http://localhost:3000/ssubcategories/" + result._id
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
  

  
  
  exports.ssubcategories_get_ssubcategorie = (req, res, next) => {
    Ssubcategorie.findById(req.params.ssubcategorieId)
      .populate("subcategorie")
      .exec()
      .then(ssubcategorie => {
        if (!ssubcategorie) {
          return res.status(404).json({
            message: "Ssubcategorie not found"
          });
        }
        res.status(200).json({
          
          ssubcategorie: ssubcategorie,
          request: {
            type: "GET",
            url: "http://localhost:3000/ssubcategories"
          }
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  };
  
  exports.ssubcategories_delete_ssubcategorie = (req, res, next) => {
    Ssubcategorie.remove({ _id: req.params.ssubcategorieId })
      .exec()
      .then(result => {
        res.status(200).json({
          message: "Ssubcategorie deleted",
          request: {
            type: "POST",
            url: "http://localhost:3000/ssubcategories",
            
          }
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  };