import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const GameSchema = Schema({
    player1: { type: String, trim: true, required: [true, "The player 1 name is required"] },
    player2: { type: String, trim: true, required: [true, "The player 2 name is required"] },
    winner: { type: String, trim: true }
});

module.exports = mongoose.model('Game', GameSchema);