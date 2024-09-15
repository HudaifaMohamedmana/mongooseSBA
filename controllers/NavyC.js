const connectToDb = require("../db/connection.js");
const Navy = require("../models/NavyM.js");
connectToDb();
// ----------------------------------------------------
// +++++++++++++ {READ} ++++++++++++++
const getNavy = async (req, res) => {
    const navy = await Navy.find()
    res.json({navy})
};
const getNavyById = async (req, res) => {
    const characterId = req.params.id
    const navy = await Navy.findById(characterId)
    res.json({navy})
};
// +++++++++++++ {CREATE} ++++++++++++++  
const createNavy = async (req, res) => {
    const {name,title,devilFruitType} = req.body;
    const navy = await Navy.create({
      name: name,
      title: title,
      devilFruitType: devilFruitType,
    });
    res.json({navy});
};
  // // +++++++++++++ {UPDATE} ++++++++++++++
const updateNavy = async (req, res) => {
    const NavyId = req.params.id
    const {name,crew,bounty,devilFruitType} = req.body;
    const Navy = await Navy.findByIdAndUpdate(NavyId, {
        name: name,
        title: title,
        devilFruitType: devilFruitType,
    });
    const updatedNavy = await Navy.findById(NavyId);
    res.json({updatedNavy});
};
  // // +++++++++++++ {DELETE} ++++++++++++++
const deleteNavy = async (req, res) => {
    const NavyId = req.params.id;
    await Navy.deleteOne({id: NavyId,});
    res.json({success:"Record Deleted Successfully"} );
};


module.exports = {
    getNavy,
    getNavyById,
    createNavy,
    updateNavy,
    deleteNavy
};