const mongoose = require("mongoose");
const Categorie = require("../models/categorie");

exports.categories_get_all = (req, res, next) => {
    Categorie.find()
      .select()
      .exec() 
      .then(docs => {
        const response = {
          count: docs.length,
          categories: docs.map(doc => {
            return {
              name: doc.name,
              _id: doc._id,
              request: {
                type: "GET",
                url: "http://localhost:3000/categories/" + doc._id
              }
            };
          })
        };
        
        res.status(200).json(response);
       
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };

  exports.categories_create_categorie = (req, res, next) => {
    const categorie = new Categorie({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
    });
    categorie
      .save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "Created categorie successfully",
          createdCategorie: {
            _id: result._id,
            name: result.name,
            
            request: {
              type: "GET",
              url: "http://localhost:3000/categories/" + result._id
            }
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

  exports.categories_delete = (req, res, next) => {
    const id = req.params.categorieId;
    Categorie.remove({ _id: id })
      .exec()
      .then(result => {
        res.status(200).json({
          message: "Categorie deleted",
          request: {
            type: "POST",
            url: "http://localhost:3000/categories",
            body: { name: "String" }
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

  exports.categories_get_categorie = (req, res, next) => {
    const id = req.params.categorieId;
    Categorie.findById(id)
      .select()
      .exec()
      .then(doc => {
        console.log("From database", doc);
        if (doc) {
          res.status(200).json({
            categorie: doc,
            request: {
              type: "GET",
              url: "http://localhost:3000/categories"
            }
          });
        } else {
          res
            .status(404)
            .json({ message: "No valid entry found for provided ID" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  };
