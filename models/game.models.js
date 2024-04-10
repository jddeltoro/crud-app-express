const mongoose = require('mongoose');

const gameModel = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    players: {
        type: Array<Player>,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    winner: {
        type: Player,
        required: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    duration: {
        type: Number,
        required: false
    },
    rounds: {
        type: Number,
        required: false
    },
    initialDeck: {
        type: Array<Card>,
        required: true
    },
    currentDeck: {
        type: Array<Card>,
        required: true
    },
    discardPile: {
        type: Array<Card>,
        required: true
    },
    turn: {
        type: Player,
        required: true
    },
},
{
    timestamps: true
});

const Game = mongoose.model('Game', gameModel);
