const models = require('../models');
const helpers = require('../helpers');

function get(req, res) {
    let searchCriteria = req.body.id;
    console.log(req.params);

    if (searchCriteria) {
        return models.Product.findById(searchCriteria)
            .then(data => {
                res.send(data);
            }).catch(e => {
                res.send(e);
            });
    }

    models.Product.find({})
        .then(data => {
            res.send(data);
        }).catch(e => {
            res.send(e);
        });
}


function getByCriteria(req, res) {
    const { gender } = req.params;
    console.log('in search criteria' + gender);
    models.Product.find({ 'gender': gender })
        // .then(data => data.json())
        .then(data => {

            res.send(JSON.stringify(data));
        }).catch(e => {
            res.send(e);
        });
}

function getOne(req, res) {
    console.log('getOne');
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

    models.Users.findOne({ username: creator })
        .then(data => {
            creatorId = data._id;
        })
        .catch(err => {
            res.send({ error: 'Creator not found !' }).end();
            return;
        })
    models.Product.findOne({ name })
        .then((data) => {
            if (data !== null) {
                res.send({ error: 'Product name is already in use !' }).end();
                return;
            } else {

                models.Product.create({name, brand, date, price, imageUrl, creatorId, category, gender})
                    .then(data => {
                        res.send({ error: 'Everything is fine !' }).end();
                        return;
                    })
                    .catch(e => {
                        console.log(e);
                        res.send({ error: 'Error is here' + e }).end();
                        return;
                    });
            }
        })
        .catch(e => {
            res.send({ error: 'error' + e }).end();
        })

    // models.Category.findOne({ name: category })
    //     .then(data => {
    //         category = data._id;
    //     })
    //     .catch(e => {
    //         res.send({ error: 'Category not found !' });
    //         return;
    //     });

    // models.Users.findOne({ username: creator }).then(user => {
    //     models.Product.create({ name, brand, imageUrl, price, creator: user._id, date, category, gender })
    //         .then(data => {
    //             models.Category.updateOne({ _id: data.category }, { $push: { products: data._id } })
    //                 .then(data => res.send({
    //                     updated: 'Everything is fine!',
    //                     error: '',
    //                 }))
    //                 .catch(err => res.send({
    //                     error: 'Request error !'
    //                 }));

    //         })
    //         .catch(err => {

    //             if(err.code == 11000) {
    //                 // let field = err.keyPattern;
    //                 // console.log(field);
    //                 let fieldDuplicate = Object.keys(err.keyValue)[0]
    //                 res.send({error: `${fieldDuplicate} already exists !` });
    //                 return;
    //             }

    //             res.send('Validation Error !');
    //             // res.send({ err: err })
    //             //  console.log(e.code);
    //         });

    // }).catch(e => {
    //     res.send({ error: 'Invalid Credentials' })
    // })


}

function edit(req, res) {
    let editParams = req.body;
    let id = req.params.id;
    // console.log(editParams + '*******' + id);

    models.Product.findByIdAndUpdate(id, editParams)
        .then(data => {
            // console.log('edited' + data);
            res.send(data)
            res.end();

        })
        .catch((e) => console.log('Error !' + e));
}

function remove(req, res) {

    console.log('in remove funct !')
    let { id } = req.params;

    models.Product.findByIdAndRemove(id)
        .then(data => { res.send(data); console.log('deleted !'); })
        .catch(err => { res.send(err) });
}



module.exports = {
    get,
    getOne,
    getByCriteria,
    create,
    edit,
    remove,

}