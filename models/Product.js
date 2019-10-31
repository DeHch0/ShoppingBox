const mongoose = require('mongoose');
const { dateFormatter } = require('../helpers');


const productSchema = new mongoose.Schema({

    name: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    // date: {
    //     type: mongoose.SchemaTypes.String,
    //     required: true,
    //     default: new Date(),
    // },
    price: {
        type: mongoose.SchemaTypes.Number,
        required: true,
    },
    // category: {
    //     type: mongoose.SchemaTypes.String,
    //     required: true,
    // },
    // description: {
    //     type: mongoose.SchemaTypes.String,
    //     required: true,
    //     minlength: 10,
    //     maxlength: 50,
    // },
    // creator: {
    //     type: mongoose.SchemaTypes.ObjectId,
    // },

});

module.exports = mongoose.model('Product', productSchema);