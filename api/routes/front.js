
const express = require('express');
const router = express.Router();





router.get("/", (req, res) => {
    res.render('index');
  });
  
  router.get('/men', (req, res) => {
    res.render('men');
  });
  
  router.get('/women', (req, res) => {
    res.render('women');
  });
  
  router.get('/womens-clothing', (req, res) => {
    res.render('womens-clothing');
  });
  
  router.get('/womens-clothing-tops', (req, res) => {
    res.render('womens-clothing-tops');
  });
  
  router.get('/womens-clothing-tops-details', (req, res) => {
    res.render('womens-clothing-tops-details');
  });
  
  router.get('/womens-clothing-dress', (req, res) => {
    res.render('womens-clothing-dress');
  });
  
  router.get('/womens-clothing-jackets', (req, res) => {
    res.render('womens-clothing-jackets');
  });
  
  router.get('/womens-clothing-bottoms', (req, res) => {
    res.render('womens-clothing-bottoms');
  });
  
  router.get('/womens-jewelry', (req, res) => {
    res.render('womens-jewelry');
  });
  
  router.get('/womens-jewelry-earrings', (req, res) => {
    res.render('womens-jewelry-earrings');
  });
  
  router.get('/womens-jewelry-necklaces', (req, res) => {
    res.render('womens-jewelry-necklaces');
  });
  
  router.get('/womens-accesories', (req, res) => {
    res.render('womens-accesories');
  });
  
  router.get('/womens-accesories-footwear', (req, res) => {
    res.render('womens-accesories-footwear');
  });
  
  router.get('/womens-accesories-ties', (req, res) => {
    res.render('womens-acesories-ties');
  });
  
  router.get('/mens-accesories', (req, res) => {
    res.render('mens-accesories');
  });
  
  router.get('/mens-clothing', (req, res) => {
    res.render('mens-clothing');
  });
  
  router.get('/mens-accesories-luggage', (req, res) => {
    res.render('mens-accesories-luggage');
  });
  
  router.get('/mens-accesories-ties', (req, res) => {
    res.render('mens-accesories-ties');
  });
  
  router.get('/mens-clothing-shirt', (req, res) => {
    res.render('mens-clothing-shirt');
  });
  
  router.get('/mens-clothing-pants', (req, res) => {
    res.render('mens-clothing-pants');
  });
  
  router.get('/mens-clothing-shorts', (req, res) => {
    res.render('mens-clothing-shorts');
  });
  
  router.get('/mens-clothing-suits', (req, res) => {
    res.render('mens-clothing-suits');
  });
  


  module.exports = router;