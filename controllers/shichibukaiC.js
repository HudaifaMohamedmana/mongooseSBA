const connectToDb = require("../db/connection.js");
const Shichibukai = require("../models/shichibukaiM.js");
connectToDb();
// ----------------------------------------------------
// +++++++++++++ {READ} ++++++++++++++
const getCharecters = async (req, res) => {
    const shichibukai = await Shichibukai.find()
    res.json({shichibukai})
};
const getCharectersById = async (req, res) => {
    const characterId = req.params.id
    const shichibukai = await Shichibukai.findById(characterId)
    res.json({shichibukai})
};
// +++++++++++++ {CREATE} ++++++++++++++  
const createCharecter = async (req, res) => {
    const {name,crew,bounty,devilFruitType} = req.body;
    const shichibukai = await Shichibukai.create({
      name: name,
      crew: crew,
      bounty: bounty,
      devilFruitType: devilFruitType,
    });
    res.json({shichibukai});
};
  // // +++++++++++++ {UPDATE} ++++++++++++++
const updateCharecter = async (req, res) => {
    const shichibukaiId = req.params.id
    const {name,crew,bounty,devilFruitType} = req.body;
    const shichibukai = await Shichibukai.findByIdAndUpdate(shichibukaiId, {
        name: name,
        crew: crew,
        bounty: bounty,
        devilFruitType: devilFruitType,
    });
    const updatedshichibukai = await Shichibukai.findById(shichibukaiId);
    res.json({updatedshichibukai});
};
  // // +++++++++++++ {DELETE} ++++++++++++++
const deleteCharecter = async (req, res) => {
    const shichibukaiId = req.params.id;
    await Shichibukai.deleteOne({_id: shichibukaiId});
    res.json({success:"Record Deleted Successfully"} );
};


module.exports = {
    getCharecters,
    getCharectersById,
    createCharecter,
    updateCharecter,
    deleteCharecter
};