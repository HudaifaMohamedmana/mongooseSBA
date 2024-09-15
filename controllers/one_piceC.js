const connectToDb = require("../db/connection.js");
const OnePiece = require("../models/one_piceM.js");
connectToDb();
// ----------------------------------------------------
// +++++++++++++ {READ} ++++++++++++++
const getCharecters = async (req, res) => {
    const characters = await OnePiece.find()
    res.json({characters})
};
const getCharectersById = async (req, res) => {
    const characterId = req.params.id
    const character = await OnePiece.findById(characterId)
    res.json({character})
};
// +++++++++++++ {CREATE} ++++++++++++++  
const createCharecter = async (req, res) => {
    const {name,crew,bounty,devilFruitType} = req.body;
    const charecter = await OnePiece.create({
      name: name,
      crew: crew,
      bounty: bounty,
      devilFruitType: devilFruitType,
    });
    res.json({charecter});
};
  // // +++++++++++++ {UPDATE} ++++++++++++++
const updateCharecter = async (req, res) => {
    const charecterId = req.params.id
    const {name,crew,bounty,devilFruitType} = req.body;
    const charecter = await OnePiece.findByIdAndUpdate(charecterId, {
        name: name,
        crew: crew,
        bounty: bounty,
        devilFruitType: devilFruitType,
    });
    const updatedCharecter = await OnePiece.findById(charecterId);
    res.json({updatedCharecter});
};
  // // +++++++++++++ {DELETE} ++++++++++++++
const deleteCharecter = async (req, res) => {
    const CharecterId = req.params.id;
    await OnePiece.deleteOne({id: CharecterId,});
    res.json({success:"Record Deleted Successfully"} );
};


module.exports = {
    getCharecters,
    getCharectersById,
    createCharecter,
    updateCharecter,
    deleteCharecter
};