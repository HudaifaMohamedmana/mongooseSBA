const express = require('express');
const router = express.Router();
const ShichibukaiC = require('../controllers/shichibukaiC')
//-------------------------------------------------------
router.get('/',ShichibukaiC.getCharecters);

router.get('/:id',ShichibukaiC.getCharectersById);

router.post('/',ShichibukaiC.createCharecter);

router.put('/:id',ShichibukaiC.updateCharecter);

router.delete('/:id',ShichibukaiC.deleteCharecter);

//-------------------------------------------------------
module.exports = router