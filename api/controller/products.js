const mongoose = require("mongoose");

const Product = require("../models/product");
const Ssubcategorie = require('../models/ssubcategorie');


exports.products_get_all = (req, res, next) => {
  Product.find()
    .select( "ssubcategorie name _id")  
    .populate( 'ssubcategorie')
    .then(docs => {
      res.status(200).json({
        count: docs.length,
        products: docs.map(doc => {
          return {
            _id: doc._id,
            name: doc.name,
            price: doc.price,
            ssubcategorie: doc.ssubcategorie,
            // productImage: doc.productImage,
            request: {
              type: "GET",
              url: "http://localhost:3000/products/" + doc._id
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

  exports.products_create_product = (req, res, next) => {
    Ssubcategorie.findById(req.body.ssubcategorieId)
      .then(ssubcategorie => {
        if (!ssubcategorie) {
          return res.status(404).json({
            message: "Ssubcategorie not found"
          });
        }
        const product = new Product({
          _id: mongoose.Types.ObjectId(),
          name: req.body.name,
          price: req.body.price,
          ssubcategorie: req.body.ssubcategorieId,
          // productImage: req.file.path,
          
        });
        return product.save();
      })
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "Product stored",
          createdProduct: {
            _id: result._id,
            name: result.name,
            price: result.price,
            ssubcategorie: result.ssubcategorie,
            
          },
          request: {
            type: "GET",
            url: "http://localhost:3000/products/" + result._id
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
  

  
  
  exports.products_get_product = (req, res, next) => {
    Product.findById(req.params.productId)
    .select("name price _id productImage")
      .populate("ssubcategorie")
      .exec()
      .then(product => {
        if (!product) {
          return res.status(404).json({
            message: "Product not found"
          });
        }
        res.status(200).json({
          
          product: product,
          request: {
            type: "GET",
            url: "http://localhost:3000/products"
          }
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  };
  
  exports.products_delete_product = (req, res, next) => {
    Product.remove({ _id: req.params.productId })
      .exec()
      .then(result => {
        res.status(200).json({
          message: "Product deleted",
          request: {
            type: "POST",
            url: "http://localhost:3000/products",
            
          }
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  };