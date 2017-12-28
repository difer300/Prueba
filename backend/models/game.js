import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const GameSchema = Schema({
    player1: { type: String, trim: true, required: [true, "The player 1 name is required"] },
    player2: { type: String, trim: true, required: [true, "The player 2 name is required"] },
    winner: { type: String, trim: true },
    rounds: [
        {
            id: { type: Number, required: [true, "The id of the round is required"] },
            movePlayer1: { type: String, trim: true, required: [true, "Movement of the player 1 is required"] },
            movePlayer2: { type: String, trim: true, required: [true, "Movement of the player 2 is required"] },
            winner: { type: String, trim: true, required: [true, "The winning player's name is required"] }
        }
    ]
});

module.exports = mongoose.model('Game', GameSchema);