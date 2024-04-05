const mongoose = require('mongoose');


const priceSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    discount: {
        type: Number,
        default: 0
    }
},
{
    timestamps: true
});
