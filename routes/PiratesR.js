const express = require('express');
const router = express.Router();
const PiratesC = require('../controllers/PiratesC')
//-------------------------------------------------------
router.get('/',PiratesC.getCharecters);

router.get('/:id',PiratesC.getCharectersById);

router.post('/',PiratesC.createCharecter);

router.put('/:id',PiratesC.updateCharecter);

router.delete('/:id',PiratesC.deleteCharecter);

//-------------------------------------------------------
module.exports = router