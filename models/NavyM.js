const mongoose = require('mongoose');
const NavySchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    title:{
        type: String,
        required:true
    },
    devilFruitType: String
})
/*
{
"name":"Fujitora",
"title":"Admiral",
"devilFruitType":"Zushi Zushi no Mi"
}
*/

const Navy = mongoose.model('Nave', NavySchema);

module.exports = Navy;