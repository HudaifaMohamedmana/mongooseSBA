const mongoose = require('mongoose');
const OnePieceSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    crew: String,
    bounty: Number,
    devilFruitType: String,
})

const OnePiece = mongoose.model('one pice', OnePieceSchema);

module.exports = OnePiece;