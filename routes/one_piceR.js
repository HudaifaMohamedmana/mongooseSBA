const express = require('express');
const router = express.Router();
const OnePieceC = require('../controllers/one_piceC')
//-------------------------------------------------------
router.get('/',OnePieceC.getCharecters);

router.get('/:id',OnePieceC.getCharectersById);

router.post('/',OnePieceC.createCharecter);

router.put('/:id',OnePieceC.updateCharecter);

router.delete('/:id',OnePieceC.deleteCharecter);

//-------------------------------------------------------
module.exports = router