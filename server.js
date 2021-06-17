const express = require('express');
const app = express();
// const routes = require('./app/routes');

app.set('view engine', 'ejs');

//Static file

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public'));
app.use('/static', express.static(__dirname, + 'public'));

// app.use(express.json());
// app.use('/api', routes);

// app.use((req, res, next) => {
//     const err = new Error("Not Found");
//     err.status = 404;
//     next(err);
// });

// app.use((err, req, res, next) => {
//     res.status(err.status || 500);
//     res.json({
//         error: {
//             message: err.message
//         }
//     });
// });

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

app.listen(3000, () => console.log('API listening on port 3000!'));