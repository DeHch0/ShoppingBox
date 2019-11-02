const models = require('../models');

function get(req, res) {
    let searchCriteria = req.params.id;

    if(searchCriteria) {
      return  models.Product.findById(searchCriteria)
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

function remove (req,res) {
    let { id } = req.params;

    models.Product.findByIdAndRemove(id)
    .then(data => { res.send(data)})
    .catch(err => { res.send(err)});
}



module.exports = {
    get,
    remove


}