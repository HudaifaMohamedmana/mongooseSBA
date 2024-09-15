const mongoose = require('mongoose');
const PiratesSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    crew:{
        type: String,
        required:true        
    },
    bounty: Number,
    devilFruitType: String
})
/*
{
"name":"Luffy",
"crew":"straw hats",
"bounty":3000000000,
"devilFruitType":"Nika "
}
*/

const Pirates = mongoose.model('pirates', PiratesSchema);

module.exports = Pirates;