import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RuleSchema = Schema({
    move: { type: String, trim: true, required: [true, "The name of the movement is required"] },
    kills: { type: String, trim: true, required: [true, "The name of the movement is required"] }
});

module.exports = mongoose.model('Rule', RuleSchema);