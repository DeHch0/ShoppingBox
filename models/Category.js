const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({

    name: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    date: {
        type: mongoose.SchemaTypes.String,
        required: true,
        default: new Date(),
    },
    creator: {
        type: mongoose.SchemaTypes.ObjectId, 
        ref: 'User',
    },
    products: [{
        type: mongoose.SchemaTypes.ObjectId, 
        ref: 'Product',
    }],

});

module.exports = mongoose.model('Category', categorySchema);