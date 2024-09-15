const connectToDb = require("../db/connection.js");
const Pirates = require("../models/PiratesM.js");
connectToDb();
// ----------------------------------------------------
// +++++++++++++ {READ} ++++++++++++++
const getCharecters = async (req, res) => {
    const pirates = await Pirates.find()
    res.json({pirates})
};
const getCharectersById = async (req, res) => {
    const characterId = req.params.id
    const pirate = await Pirates.findById(characterId)
    res.json({pirate})
};
// +++++++++++++ {CREATE} ++++++++++++++  
const createCharecter = async (req, res) => {
    const {name,crew,bounty,devilFruitType} = req.body;
    const pirate = await Pirates.create({
      name: name,
      crew: crew,
      bounty: bounty,
      devilFruitType: devilFruitType,
    });
    res.json({pirate});
};
  // // +++++++++++++ {UPDATE} ++++++++++++++
const updateCharecter = async (req, res) => {
    const pirateId = req.params.id
    const {name,crew,bounty,devilFruitType} = req.body;
    const pirate = await Pirates.findByIdAndUpdate(pirateId, {
        name: name,
        crew: crew,
        bounty: bounty,
        devilFruitType: devilFruitType,
    });
    const updatedpirate = await Pirates.findById(pirateId);
    res.json({updatedpirate});
};
  // // +++++++++++++ {DELETE} ++++++++++++++
const deleteCharecter = async (req, res) => {
    const pirateId = req.params.id;
    await Pirates.deleteOne({id: pirateId});
    res.json({success:"Record Deleted Successfully"} );
};


module.exports = {
    getCharecters,
    getCharectersById,
    createCharecter,
    updateCharecter,
    deleteCharecter
};