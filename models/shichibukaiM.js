
const mongoose = require('mongoose');
const shichibukaiSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    crew: String,
    bounty: Number,
    devilFruitType: String
})
/*
{
"name":"Doflamingo",
"crew":"Donquixote Pirates",
"bounty":340 000 000,
"devilFruitType":"Ito Ito no Mi",
}
*/

const Shichibukai = mongoose.model('shichibukai', shichibukaiSchema);

module.exports = Shichibukai;