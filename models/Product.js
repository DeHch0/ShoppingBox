const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({

    name: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    date: {
        type: mongoose.SchemaTypes.String,
        required: true,
        default: new Date(),
    },
    price: {
        type: mongoose.SchemaTypes.Number,
        required: true,
    },
    category: {
        type: mongoose.SchemaTypes.String,
        ref: 'Category',
        required: true,
    },
    description: {
        type: mongoose.SchemaTypes.String,
        required: true,
        minlength: 5,
        maxlength: 50,
    },
    creator: {
        type: mongoose.SchemaTypes.ObjectId, 
        ref: 'User',
    },

});

module.exports = mongoose.model('Product', productSchema);