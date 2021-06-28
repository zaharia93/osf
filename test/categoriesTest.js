
process.env.NODE_ENV = 'test';

const mongoose = require("mongoose");
const categories = require('../api/routes/categories');
const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect();
const server = require('../api/app');
chai.use(chaiHttp);

 
  
describe('Categories route', () => {
    
    const categorie = {
        _id: mongoose.Schema.Types.ObjectId,
        name: { type: String, required: true },
        
    };
    const preSave = {
      name: 'Mens',
      _id: '123',
    };
  

  
    describe('categorie create', () => {
      it('should crete new categorie ', async () => {
        try {
          const result = await chai
            .request(server)
            .post(categorie)
            .send(categorie);
             expect(result.status).to.equal(200);
             expect(result.body).not.to.be.empty;
             expect(body._id).toBeDefined();
            categorieId = body._id;
            expect(body.name).toEqual(categorie.name);
        } catch (error) {
          console.log(error);
        }
      });
    });
  
    describe(' get all categories', () => {
        it('should read all categories ', async () => {
          try {
            const result = await chai
            .request(server)
            .get('/categories')
            expect(result.status).to.be.equal(200);
          } catch (error) {
            console.log(error);
          }
        });
      });

      const categorieId =  '123';

      describe(' get  categorie by Id', () => {
        it('should read  categorie ', async () => {
          try {
            const result = await chai
            .request(server)
            .get('/categorieId')
            expect(result.status).to.be.equal(200);
          } catch (error) {
            console.log(error);
          }
        });
      });


  });


        



