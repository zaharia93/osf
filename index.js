
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const { response } = require('express');


app.use(express.json());
app.use(express.urlencoded({extended: false}));


var categories = [
    
];

app.get('/categories', function(request, response) {
    response.send(categories);
});

app.post('/categories', function(request, response) {
    var categorie = request.body;
    if(!categorie || categorie.text === "") {
        response.status(500).send({error:"Your categorie must have text"});
    } else {
        categories.push(categorie);
        response.status(200).send(categories);
    }
});

app.put('/categories/:categorieId', function(request , response){

    var categorieId = request.params.categorieId;
    var newtext = request.body.text;

    if(!categorieId || categorieId === "" || (!newtext || newtext ==="")){
        response.status(500).send({error:"You must provide categorie Text"})
    } else {
        var objectFound = false;
        for(var x = 0; x < categories.length; x++){
            var ing = ingredients[x];

            if(ing.id === request.params.categorieId){
                categories[x].text = newtext;
                objectFound = true;
                break;
            }
        }
        if (!objectFound){
            response.status(500).send({error:"Categorie id not found"});
        }else{
            response.send(categories);
        }
        
    }

});

app.listen(3000, function() {
console.log("first api runn on prt 3000");
});


