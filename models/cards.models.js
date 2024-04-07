const moongose = require('mongoose');

const cardSchema = new moongose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    createdBy: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},
{
    timestamps: true
});

const Card = moongose.model('Card', cardSchema);

