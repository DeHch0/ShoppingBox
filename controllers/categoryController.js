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
    let { name} = req.params;
    let creator = req.cookies('username');
    let date = helpers.dateFormatter(date.Now());



    models.User.find({ username: creator }).then(user => {
        creator = user.id;
    }).catch(e => {
        console.log(e);
    })

    models.Category.create({ name, date, creator,  })
}

function edit(req, params) {
    let editParams = req.body;
    let id = req.params.id;

    models.Category.findByIdAndUpdate(id , editParams)
    .then(data => {
        console.log('edited' + data);
        res.redirect(`/product/${data._id}`) // *** for edit ***
        
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