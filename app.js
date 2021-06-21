const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
//const routes = require('./routes');

app.set('view engine', 'ejs');
app.set('views', 'views');


//Static file

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public'));
app.use('/static', express.static(__dirname, + 'public'));
app.use(express.static(__dirname, + 'api'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('dev'));
//app.use('/', routes);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});


const categorieRoutes = require("./routes/categories");
const subcategorieRoutes = require("./routes/subcategories");
const ssubcategorieRoutes = require("./routes/ssubcategories");
const productRoutes = require("./routes/products");
const orderRoutes = require('./routes/orders');
const userRoutes = require('./routes/user');

app.use("/categories", categorieRoutes);
app.use("/subcategories", subcategorieRoutes);
app.use("/ssubcategories", ssubcategorieRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/user", userRoutes);




mongoose.connect("mongodb+srv://node-shop:"+
 process.env.MONGO_ATLAS_PW +
 "@nodejs.btkp7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser: true , useUnifiedTopology: true }
 
 );
mongoose.Promise = global.Promise;


app.get('/', (req, res) => {
  res.render('index');
});

app.get('/men', (req, res) => {
  res.render('men');
});

app.get('/women', (req, res) => {
  res.render('women');
});

app.get('/womens-clothing', (req, res) => {
  res.render('womens-clothing');
});

app.get('/womens-clothing-tops', (req, res) => {
  res.render('womens-clothing-tops');
});

app.get('/womens-clothing-tops-details', (req, res) => {
  res.render('womens-clothing-tops-details');
});

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;


