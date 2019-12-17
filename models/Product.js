const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({

    name: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    // series: {
    //     type: mongoose.SchemaTypes.String,
    //     required: true,
    // },
    imageUrl: {
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
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category',
        required: true,
    },
    brand: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    gender: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    creator: {
        type: mongoose.SchemaTypes.ObjectId, 
        ref: 'User',
    },

    // promotion: {
    //     type: mongoose.SchemaTypes.Boolean,
    //     default: false,
    // },
    // badge: {
    //     type: mongoose.SchemaTypes.String,
    //     default: null,
    // }


});

module.exports = mongoose.model('Product', productSchema);