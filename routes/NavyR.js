const express = require('express');
const router = express.Router();
const NavyC = require('../controllers/NavyC')
//-------------------------------------------------------
router.get('/',NavyC.getNavy);

router.get('/:id',NavyC.getNavyById);

router.post('/',NavyC.createNavy);

router.put('/:id',NavyC.updateNavy);

router.delete('/:id',NavyC.deleteNavy);

//-------------------------------------------------------
module.exports = router