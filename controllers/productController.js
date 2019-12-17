const models = require('../models');
const helpers = require('../helpers');

function get(req, res) {
 
    models.Product.find({})
        .then(data => {
            res.send(data);
        }).catch(e => {
            res.send(e);
        });
}


function getByCriteria(req, res) {
    const { gender } = req.params;
    // console.log('in search criteria' + gender);
    models.Product.find({ 'gender': gender })
        // .then(data => data.json())
        .then(data => {

            res.send(JSON.stringify(data));
        }).catch(e => {
            res.send(e);
        });
}

function getCollection(req, res) {

    

    models.Product.find( { _id: { $in: req.body } } )
    .then(data => res.send(data))
    .catch(err => res.send(err));

}

function getOne(req, res) {
    // console.log('getOne');
    models.Product.findById(req.params.id)
        .then(data => {
            res.send(data);
        }).catch(e => {
            res.send(e);
        });
}

function create(req, res) {

    let { name, brand, price, imageUrl, creator, category, gender } = req.body;
    let date = new Date();
    date = helpers.dateFormatter.format(date);
    let creatorId = null;


        
    models.Product.findOne({ name })
        .then((data) => {
            if (data !== null) {
                res.send({ error: 'Product name is already in use !' }).end();
                return;
            } else {
                models.Users.findOne({ username: creator })
                .then(creator => {
                    let creatorId = creator._id;
                    models.Product.create({name, brand, date, price, imageUrl, creator: creatorId, category, gender})
                    .then(data => {
                        models.Category.findOneAndUpdate({_id: data.category} , {$push: {products: data._id}})
                        .then((data) => {
                            res.send({ success: 'Product Created Successfully !'}).end();
                        })
                        .catch(e => {
                            res.send({ error: 'Error ****' + e}).end();
                        })
                    })
                    .catch(e => {
                        console.log(e);
                        res.send({ error: 'Error is here' + e }).end();
                        return;
                    });
                })
                .catch(err => {
                    res.send({ error: 'Creator not found !' }).end();
                    return;
                })
               
            }
        })
        .catch(e => {
            res.send({ error: 'error' + e }).end();
        })
}

function edit(req, res) {
    let editParams = req.body;
    let id = req.params.id;

         models.Product.findByIdAndUpdate(id, editParams)
        .then(data => {
            res.send({success: 'Edited Successfully'})
            res.end();

        })
        .catch((e) => {
            if (e.name === 'MongoError' && e.code === 11000) {
                res
                .send({error: `Този продукт вече е създаден !`})
                .end();
                return
                }
                res.send(e);
        });
    

   
}

function remove(req, res) {

    // console.log('in remove funct !')
    let { id } = req.params;

    models.Product.findByIdAndRemove(id)
        .then(data => { res.send(data); })
        .catch(err => { res.send(err) });
}



module.exports = {
    get,
    getOne,
    getByCriteria,
    create,
    edit,
    remove,
    getCollection
}