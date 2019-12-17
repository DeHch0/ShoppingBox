const models = require('../models');
const helpers = require('../helpers');

function get(req, res) {
    let searchCriteria = req.params.id;

    if (searchCriteria) {
        return models.Category.findById(searchCriteria)
            .then(data => {
                res.send(data);
            }).catch(e => {
                res.send(e);
            });
    }

    models.Category.find({})
        .then(data => {
            res.send(data);
        }).catch(e => {
            res.send(e);
        });
}

function create(req, res) {
    let { name , creator} = req.body;

    // console.log(name);
    // console.log(creator);
    let date = new Date();
    date = helpers.dateFormatter.format(date);
    let userId = null;

    models.Users.findOne({username: creator})
    .then((user) => {
        if(user == null) {
            res.send({error: 'User not found !'});
            return;
        }

            models.Category.findOne({name})
            .then(category => {
                if(category !== null) {
                    res.send({error: 'Category already exists !'});
                    return;
                }
                models.Category.create({name, date, creator: user._id})
                .then(data => {
                    res.send({success : 'Created Successfully !'})
                })
                .catch(err => {
                    console.log(err);
                })
            })
            .catch(err => {
                console.log(err);
            })

    })
    .catch(err => {
        console.log(err);
    })

    // models.Category.find({name: name}).then(cat => {
    //    if(cat !== [] || cat !== null) {
    //        res
    //        .send({error: 'Category already exist !'})
    //        .end();
    //        return;
    //    } else {
    //     models.Users.findOne({ username: creator }).then(user => {

    //         if(user === null ) {
    //             res.send({error: 'Invalid username !'})
    //         }
    
    //         models.Category.create({ name, date, creator: user._id })
    //         .then( data => {
    //             res.send({succes: 'Category Created !'})
    //         })
    //         .catch(e => {
    //             res.send({error: "Server Error !"});
    //         });
    //     }).catch(e => {
    //         res.send({error: "Server Error !"});
    //     })
    //    }
    // })
    // .catch(e => {
    //     res.send({error: "Server Error !"});
    // })



    // models.Category.create({ name, date, creator,  })


    
}

function edit(req, params) {
    let editParams = req.body;
    let id = req.params.id;

    models.Category.findByIdAndUpdate(id , editParams)
    .then(data => {
        res.send({edited: 'Peoduct Edited Successfully !'}).end();
        
    })
}

function remove(req, res) {
    let { id } = req.params;

    models.Category.findByIdAndRemove(id)
        .then(data => { res.send(data) })
        .catch(err => { res.send(err) });
}



module.exports = {
    get,
    create,
    edit,
    remove,

}